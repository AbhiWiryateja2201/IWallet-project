import { useNavigate } from 'react-router-dom'

const navItems = [
  { icon: 'dashboard', label: 'Dashboard', path: '/dashboard' },
  { icon: 'account_balance_wallet', label: 'Wallet', path: '/payment', active: true },
  { icon: 'history', label: 'History', path: '/transaction' },
  { icon: 'person', label: 'Profile', path: '/profile' },
]

const cameraFeed =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBRQgfGV5isjklFJHvDIR89vETpdJU9dOJ507RvfY4HDl54QRtaKWkHkoz68zrD_GD54WD7CF0dTcu1hrnoLQkV3KFeVeFPG5R2C_ummmJM6RSLrDcW6vBIQVCfJpUfbbRsLjjut7ZOmp6s2t4gNw_CRZKKMZMgHde7P0NmBIj3jjbq9KKGmGbFHFb2Q0eCo5P7uPPQlNF3KwL8h4We0H5BOTh2Two_JrDpylrK8nEnQnyvVPOhjgPR'
const avatar =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA0t_RM-L-8Lhkm9TRXW6iOJqG14YfuvQJCvnDwUNfPKveQr-qx2slRN8c47Hm2QJ_UF7CD74O29TASGgjbqum9wppdAfRqEKzw0AxgjzkDXztBu2ypmSxMt9GkPCPnwpHob9Z-Diip_iHAhOEUUEnG_u81xsk4E6ZggCro1sVYmEbgkJx-r4KZLgQCVuFeqnQscfyH-QNKRltDxV1vvtI0p-i2KjuoW-j7AX2K94laE33YT_nfosD7'

export default function Payment() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#1D1A24]">
      <div className="flex min-h-screen">
        <aside className="hidden lg:flex flex-col w-64 shrink-0 h-screen sticky top-0 bg-[#F9F1FF] border-r border-[#CCC3D8]/20 p-4 gap-4">
          <div className="px-2 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#630ED4] flex items-center justify-center shadow-lg shadow-[#630ED4]/30">
                <span className="material-symbols-outlined text-white text-2xl">wallet</span>
              </div>
              <div>
                <p className="text-xl font-black text-[#630ED4] leading-none">IWallet</p>
                <p className="text-[10px] font-bold uppercase tracking-[1px] text-[#4A4455] opacity-70 mt-1">Premium Digital Wallet</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 flex flex-col gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => navigate(item.path)}
                className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-left transition-all duration-200 ${
                  item.active
                    ? 'bg-[#630ED4] text-white font-bold shadow-md shadow-[#630ED4]/20'
                    : 'text-[#4A4455] hover:bg-[#F9F1FF] active:scale-95'
                }`}
              >
                <span className="material-symbols-outlined text-xl">{item.icon}</span>
                <span className="text-xs tracking-[0.01em] font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#CCC3D8]/20 flex flex-col gap-1.5">
            <button type="button" onClick={() => navigate('/login')} className="flex items-center gap-3 px-3.5 py-3 rounded-xl text-[#4A4455] hover:bg-[#F9F1FF] transition-all duration-200 active:scale-95">
              <span className="material-symbols-outlined text-xl">logout</span>
              <span className="text-xs tracking-[0.01em] font-medium">Logout</span>
            </button>
          </div>
        </aside>

        <div className="flex-1 flex flex-col min-w-0">
          <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-xl border-b border-[#CCC3D8]/30">
            <div className="flex items-center justify-between h-16 px-4 md:px-6 gap-3">
              <div className="flex items-center gap-3 md:gap-6 min-w-0">
                <span className="text-2xl sm:text-[32px] leading-[40px] tracking-[-0.02em] font-bold text-[#630ED4] shrink-0">IWallet</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="hidden lg:flex items-center gap-2 pl-4 pr-5 py-2.5 rounded-full bg-[#F9F1FF] border border-transparent focus-within:border-[#630ED4]/40 transition-colors">
                  <span className="material-symbols-outlined text-[#4A4455]">search</span>
                  <input className="bg-transparent outline-none text-sm text-[#4A4455] w-40 xl:w-56 placeholder:text-[#6B7280]" placeholder="Cari transaksi..." type="text" />
                </div>
                <button type="button" className="p-2 text-[#4A4455] hover:text-[#630ED4] transition-colors">
                  <span className="material-symbols-outlined">notifications</span>
                </button>
                <button type="button" className="hidden sm:block p-2 text-[#4A4455] hover:text-[#630ED4] transition-colors">
                  <span className="material-symbols-outlined">help</span>
                </button>
                <div className="h-8 w-8 rounded-full ring-2 ring-[#630ED4]/20 overflow-hidden">
                  <img className="w-full h-full object-cover" alt="User avatar" src={avatar} />
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 pb-24 lg:pb-10">
            <div className="max-w-screen-xl mx-auto px-4 py-6 md:px-8 md:py-10">
              <div className="mb-6">
                <h1 className="text-2xl sm:text-[32px] leading-[40px] tracking-[-0.02em] font-bold text-[#630ED4]">Bayar - IWallet (Desktop)</h1>
                <p className="text-[#4A4455] text-sm sm:text-base mt-1">Pindai kode QR untuk pembayaran instan dan aman.</p>
              </div>

              <div className="grid lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-8 bg-white p-5 md:p-6 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] ring-1 ring-[#CCC3D8]/10 flex flex-col gap-4">
                  <div className="relative overflow-hidden aspect-video rounded-xl bg-black/90 flex items-center justify-center">
                    <img className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 opacity-50" alt="Camera feed showing QR code" src={cameraFeed} />
                    <div className="animate-scan w-full h-0.5 bg-[#630ED4] absolute top-0 left-0 z-10" />
                    <div className="relative z-10 border-2 border-[#630ED4]/60 w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-2xl flex items-center justify-center">
                      <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-[#630ED4] rounded-tl-lg" />
                      <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-[#630ED4] rounded-tr-lg" />
                      <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-[#630ED4] rounded-bl-lg" />
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-[#630ED4] rounded-br-lg" />
                      <span className="material-symbols-outlined text-white/40 text-4xl sm:text-6xl animate-pulse">qr_code_2</span>
                    </div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-10">
                      <button type="button" className="bg-black/40 hover:bg-black/60 backdrop-blur-md text-white p-3 rounded-full transition-all active:scale-95" aria-label="Balik kamera">
                        <span className="material-symbols-outlined">flip_camera_ios</span>
                      </button>
                      <button type="button" className="bg-gradient-to-br from-[#7C3AED] to-[#630ED4] hover:brightness-110 active:scale-95 text-white p-3 rounded-full shadow-lg transition-all" aria-label="Ambil foto">
                        <span className="material-symbols-outlined">photo_camera</span>
                      </button>
                      <button type="button" className="bg-black/40 hover:bg-black/60 backdrop-blur-md text-white p-3 rounded-full transition-all active:scale-95" aria-label="Lampu kilat">
                        <span className="material-symbols-outlined">flash_on</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-1 flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#630ED4]">info</span>
                      <p className="text-sm text-[#4A4455]">Posisikan kode QR di dalam bingkai.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] uppercase tracking-wider text-[#4A4455] font-bold">Live Feed</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-4 lg:sticky lg:top-24">
                  <button type="button" className="bg-white p-6 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] ring-1 ring-[#CCC3D8]/10 text-left hover:-translate-y-0.5 hover:shadow-lg hover:ring-[#7C3AED]/40 transition-all duration-200 group">
                    <div className="h-12 w-12 bg-[#630ED4]/10 rounded-full flex items-center justify-center text-[#630ED4] mb-4 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined">cloud_upload</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">Upload QR from Gallery</h3>
                    <p className="text-sm text-[#4A4455]">Gunakan gambar QR yang sudah tersimpan di file Anda.</p>
                  </button>

                  <div className="bg-white p-6 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] ring-1 ring-[#CCC3D8]/10 flex flex-col gap-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Manual ID Input</h3>
                      <p className="text-sm text-[#4A4455]">Masukkan ID Merchant atau Nomor VA secara manual.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[12px] tracking-[0.01em] font-bold text-[#4A4455]">ID MERCHANT / VA</label>
                      <div className="relative">
                        <input
                          className="w-full bg-[#F9F1FF] border border-[#CCC3D8]/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#630ED4] focus:border-transparent outline-none transition-all font-mono tracking-widest text-sm"
                          placeholder="e.g. 1234567890"
                          type="text"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#630ED4] material-symbols-outlined">edit</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => navigate('/payment/confirm')}
                      className="w-full py-3 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#630ED4] text-white font-bold hover:brightness-110 active:scale-[0.98] transition-all"
                    >
                      Proceed Payment
                    </button>
                  </div>

                  <div className="p-6 rounded-3xl bg-[#630ED4]/5 border border-[#630ED4]/10">
                    <h4 className="text-[12px] tracking-[0.01em] font-bold text-[#630ED4] mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg">verified_user</span>
                      KEAMANAN TRANSAKSI
                    </h4>
                    <p className="text-[12px] leading-relaxed text-[#4A4455]">
                      Pastikan nama merchant sesuai sebelum memasukkan PIN Anda. Semua transaksi IWallet dilindungi oleh enkripsi 256-bit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <nav className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-xl border-t border-[#CCC3D8]/30 flex justify-around py-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))]">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-xl ${
                  item.active ? 'text-[#630ED4]' : 'text-[#4A4455]'
                }`}
              >
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
