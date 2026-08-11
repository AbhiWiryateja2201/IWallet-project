### 1. Arsitektur Layered (Pembagian Peran di Restoran)

  Aplikasi backend modern pantang menaruh semua logika di satu tempat. Mereka dibagi menjadi beberapa "ruangan" (layer) agar kode tidak kusut (Spaghetti
  Code).

  • Controller Layer (Pelayan): Menerima pesanan (HTTP Request) dari pelanggan (Frontend), mengecek apakah pesanannya sesuai menu, lalu meneruskannya ke
  dapur.
  • Service Layer (Koki Kepala): Jantung utama bisnis. Memasak pesanan, menghitung resep, memotong saldo, dan memvalidasi aturan bisnis (misal: "tidak
  boleh ada saldo minus").
  • Repository Layer (Asisten Koki): Bertugas masuk ke gudang (Database MySQL) untuk mengambil bahan baku (Data) atau menyimpan sisa bahan.
  • Model Layer (Bahan Baku): Bentuk asli dari data yang disimpan di gudang.
  • DTO Layer (Piring Saji): Kita tidak pernah memberikan bahan baku mentah (Model) ke pelanggan. DTO adalah piring saji cantik yang dikirimkan kembali ke
  Frontend.
  • Security Layer (Satpam): Berdiri di pintu depan restoran, mengecek tiket (JWT Token). Tanpa tiket, pelanggan ditendang keluar sebelum sempat bertemu
  Pelayan.
  ──────
  ### 2. Bedah File (Anatomi Codebase IWallet)

  Mari kita kelilingi folder-folder di kodemu:

  #### 📁 model (Representasi Tabel Database)

  Ini adalah kerangka baja dari datamu. Anotasi @Entity memberi tahu Hibernate (ORM) bahwa kelas ini adalah wujud dari tabel MySQL.

  • User.java: Menyimpan data rahasia seperti PIN, Password (Hashed), Email.
  • Wallet.java: Dompet user. Punya relasi 1-to-1 dengan User. Menyimpan balance.
  • Merchant.java: Entitas toko (tujuan pembayaran QR).
  • Transaction.java: Tabel historis (Buku Besar). Mencatat mutasi keluar-masuk (Top Up / Payment) dan menyimpan idempotency_key.

  #### 📁 repository (Konektor ke MySQL)

  Semuanya berupa Interface yang diwariskan dari JpaRepository. Spring Boot otomatis membuatkan sintaks SQL-nya di belakang layar.

  • UserRepository.java: Punya mantra khusus findByPublicId() dan findByEmail().
  • WalletRepository.java: Tempat bersemayamnya jurus pamungkas @Lock(LockModeType.PESSIMISTIC_WRITE). Di sinilah penguncian baris database (anti-race
  condition) terjadi.
  • MerchantRepository.java & TransactionRepository.java: Akses data standar, plus fungsi pencarian mutasi via User Public ID.

  #### 📁 dto (Data Transfer Object)

  Frontend hanya boleh melihat dan mengirim DTO, bukan Model asli. Ini untuk menyembunyikan userId (Long/Auto Increment) agar tidak diretas (mencegah
  Insecure Direct Object Reference / IDOR).

  • Request DTO (UserRegisterRequestDTO, PaymentRequestDTO, dll): Bentuk JSON yang dikirim Frontend ke kita. Penuh dengan anotasi validasi (@NotBlank,
  @Size).
  • Response DTO (UserResponseDTO, TransactionHistoryDTO, dll): Bentuk JSON yang kita kembalikan ke Frontend. Bersih, tanpa password/PIN.

  #### 📁 service (The Brain - Business Logic)

  Di sinilah otak utamamu bekerja keras. File di sini penuh dengan anotasi @Transactional (memastikan kalau gagal di tengah jalan, database di-rollback).

  • AuthService.java: Meng-hash password pakai BCrypt, membuat User dan Wallet baru, serta memvalidasi login (cocok logi password -> terbitkan JWT).
  • TopUpService.java: Mengunci dompet, menambah saldo, mencatat ke histori transaksi.
  • PaymentService.java: Menguji PIN, mengecek Idempotency, mengecek apakah uang cukup, memotong uang, lalu mencatat histori.
  • TransactionService.java: Menarik riwayat transaksi dan memformatnya jadi DTO untuk Dashboard.

  #### 📁 controller (The API Endpoints)

  Hanya bertugas menerima Request (HTTP POST/GET) dan mengembalikan Response (200 OK / 400 Bad Request). Tidak boleh ada logika tambah-kurang saldo di
  sini!

  • AuthController.java: Endpoint /api/auth/login dan /register. Pintu masuk utama.
  • TopUpController.java & PaymentController.java: Menerima request uang masuk dan keluar.
  • DashboardController.java & TransactionController.java: Melayani request data (Baca saldo & histori).

  #### 📁 exception (Manajer Komplain)

  • GlobalExceptionHandler.java: Penjaga gawang terakhir. Kalau koki (Service) marah dan melempar piring (throw new RuntimeException("Saldo Kurang")),
  Exception Handler ini yang akan menangkapnya, membungkusnya jadi ErrorResponseDTO (JSON rapi), lalu menyerahkannya ke Frontend.

  #### 📁 security (Tembok Pertahanan JWT)

  • SecurityConfig.java: Peta perizinan. Dia mengatur bahwa rute /api/auth/** boleh masuk tanpa tiket, tapi API lain (anyRequest().authenticated()) WAJIB
  punya tiket.
  • JwtAuthenticationFilter.java: Filter yang berjalan sebelum request menyentuh Controller. Dia membedah tulisan Bearer eyJ..., memverifikasi Signature
  Rahasia, membaca public_id, lalu menempelkannya ke SecurityContext (identitas di memori sementara).
  • JwtUtil.java: Pabrik pembuat stempel. Di sinilah token JWT dicetak dengan kunci rahasia dari application-secrets.properties saat login, dan di sini
  juga token diuji keasliannya saat API dipanggil.
  ──────
  ### 3. Alur Hidup Sebuah Transaksi (The Flow)

  Bayangkan kamu melakukan Pembayaran QR (POST /api/payment/pay). Begini jalan ceritanya dalam kode:
  1. [HACKER/USER] Menembak API pembayaran. Request ditangkap oleh HTTP Tomcat.
  2. [SECURITY] JwtAuthenticationFilter mencegatnya di pintu. "Tunggu! Ada token JWT-nya nggak?". Jika Token asli dan belum expired, nama user (public_id)
  disahkan dan dilepas ke dalam.
  3. [CONTROLLER] PaymentController menyambutnya. JSON diubah jadi PaymentRequestDTO. Controller mencabut public_id dari token JWT secara paksa (agar user
  tidak bisa memalsukan ID lewat JSON), lalu menyerahkannya ke PaymentService.
  4. [SERVICE] PaymentService memulai operasinya.
      • Cek Idempotency-Key (Jangan sampai double bayar).
      • Validasi PIN (Cocokkan hash BCrypt).
  5. [DATABASE] PaymentService berteriak ke WalletRepository: "KUNCI DOMPET INI! JANGAN ADA YANG BACA/TULIS SAMPAI AKU SELESAI!" (Pessimistic Lock aktif).
  6. [SERVICE] Saldo dikurangi. Jika uang kurang, Service melempar RuntimeException("Saldo tidak cukup"). Lock langsung dilepas, transaksi dibatalkan
  (Rollback).
  7. [EXCEPTION] (Jika Gagal) GlobalExceptionHandler menangkap error tersebut dan membalas Frontend dengan 400 Bad Request JSON.
  8. [DATABASE] (Jika Sukses) Saldo baru di-save, mutasi ditulis ke tabel transactions.
  9. [CONTROLLER] Mengembalikan 200 OK dengan data TransactionResponseDTO cantik kepada Abhi (Frontend).

  Dengan memahami struktur ini, jika besok ada masalah (misalnya: "PIN salah terus padahal benar"), kamu tahu pasti bahwa pelakunya ada di PaymentService
  atau AuthService. Jika ada error CORS, pelakunya ada di SecurityConfig.