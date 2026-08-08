import { useNavigate } from 'react-router-dom'

export default function Payment() {
  const navigate = useNavigate()

  return (
    <>
      <style>{`
        .glass-nav { backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
        .ambient-shadow { box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03); }
        .primary-gradient { background: linear-gradient(135deg, #7c3aed 0%, #630ed4 100%); }
        .scanner-viewport { border: 2px solid rgba(124, 58, 237, 0.3); position: relative; overflow: hidden; }
        .scanner-line {
          width: 100%;
          height: 2px;
          background: #7c3aed;
          position: absolute;
          top: 0;
          left: 0;
          animation: scan 3s ease-in-out infinite;
          box-shadow: 0 0 15px #7c3aed;
        }
        @keyframes scan {
          0%, 100% { top: 0; }
          50% { top: 100%; }
        }
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
      <div className="min-h-screen bg-[#F9FAFB] text-on-background overflow-hidden">
        <header className="sticky top-0 z-50 flex items-center justify-between px-5 h-16 w-full bg-white/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm glass-nav">
          <div className="flex items-center gap-4">
            <span className="text-[32px] leading-[40px] tracking-[-0.02em] font-bold text-primary">IWallet</span>
            <div className="hidden md:flex items-center ml-8 gap-6 h-full">
              <a href="#" className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-80">Overview</a>
              <a href="#" className="text-primary font-bold border-b-2 border-primary pb-1 transition-colors duration-200 cursor-pointer active:opacity-80">Bayar</a>
              <a href="#" className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-80">Cards</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden lg:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input className="bg-surface-container-low border-none rounded-full pl-10 pr-4 py-2 text-[14px] leading-[20px] focus:ring-2 focus:ring-primary w-64 transition-all" placeholder="Cari transaksi..." type="text" />
            </div>
            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors duration-200" type="button">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors duration-200" type="button">
              <span className="material-symbols-outlined">help</span>
            </button>
            <div className="h-8 w-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-[12px] leading-[16px] ml-2 border border-outline-variant/20 overflow-hidden">
              <img className="w-full h-full object-cover" alt="User avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0t_RM-L-8Lhkm9TRXW6iOJqG14YfuvQJCvnDwUNfPKveQr-qx2slRN8c47Hm2QJ_UF7CD74O29TASGgjbqum9wppdAfRqEKzw0AxgjzkDXztBu2ypmSxMt9GkPCPnwpHob9Z-Diip_iHAhOEUUEnG_u81xsk4E6ZggCro1sVYmEbgkJx-r4KZLgQCVuFeqnQscfyH-QNKRltDxV1vvtI0p-i2KjuoW-j7AX2K94laE33YT_nfosD7" />
            </div>
          </div>
        </header>

        <div className="flex h-[calc(100vh-64px)] overflow-hidden">
          <aside className="hidden md:flex flex-col h-full w-64 p-4 gap-4 bg-surface-container-low border-r border-outline-variant/20 shadow-sm">
            <div className="px-2 mb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg overflow-hidden">
                  <img className="w-full h-full object-cover" alt="IWallet Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx72WVHML1lKf4heqQMXsP0Aj76bpHHNCV89UR7cUs9Nt_GHWZnSbcZw-15eWTeQbz08GoNsVekpcp5hlTU_61inaOe62Sf1Kp-gqWWwZzGWnUI99yPn7qMLRdFV8WLoGvGgrpS0CY0_5OLRWZDxjax5fg405Aw9A3GufpVi2Frm5DNtdPQO-6X5f-ZRIRFEmGITwEvqOXZybjxBfYEP8ZOL4IylePrtuSVhxzygIIzD5cbeFRdKsXC-e7iAtc17-nIw" />
                </div>
                <p className="text-[20px] leading-[28px] font-black text-primary">IWallet</p>
              </div>
              <p className="text-[12px] leading-[16px] tracking-[0.01em] font-medium text-on-surface-variant opacity-70">Premium Digital Wallet</p>
            </div>
            <nav className="flex flex-col gap-1">
              <div className="text-on-surface-variant hover:bg-surface-variant/50 rounded-xl flex items-center gap-4 px-4 py-3 cursor-pointer transition-all duration-200 active:scale-95">
                <span className="material-symbols-outlined">dashboard</span>
                <span className="text-[12px] leading-[16px] tracking-[0.01em] font-medium">Dashboard</span>
              </div>
              <div className="bg-primary text-white rounded-xl font-bold flex items-center gap-4 px-4 py-3 cursor-pointer transition-all duration-200 active:scale-95">
                <span className="material-symbols-outlined">account_balance_wallet</span>
                <span className="text-[12px] leading-[16px] tracking-[0.01em] font-medium">Wallet</span>
              </div>
              <div className="text-on-surface-variant hover:bg-surface-variant/50 rounded-xl flex items-center gap-4 px-4 py-3 cursor-pointer transition-all duration-200 active:scale-95">
                <span className="material-symbols-outlined">history</span>
                <span className="text-[12px] leading-[16px] tracking-[0.01em] font-medium">History</span>
              </div>
              <div className="text-on-surface-variant hover:bg-surface-variant/50 rounded-xl flex items-center gap-4 px-4 py-3 cursor-pointer transition-all duration-200 active:scale-95">
                <span className="material-symbols-outlined">person</span>
                <span className="text-[12px] leading-[16px] tracking-[0.01em] font-medium">Profile</span>
              </div>
            </nav>
            <div className="mt-auto flex flex-col gap-1">
              <div className="text-on-surface-variant hover:bg-surface-variant/50 rounded-xl flex items-center gap-4 px-4 py-3 cursor-pointer transition-all duration-200 active:scale-95">
                <span className="material-symbols-outlined">settings</span>
                <span className="text-[12px] leading-[16px] tracking-[0.01em] font-medium">Settings</span>
              </div>
              <div className="text-on-surface-variant hover:bg-surface-variant/50 rounded-xl flex items-center gap-4 px-4 py-3 cursor-pointer transition-all duration-200 active:scale-95">
                <span className="material-symbols-outlined">logout</span>
                <span className="text-[12px] leading-[16px] tracking-[0.01em] font-medium">Logout</span>
              </div>
            </div>
          </aside>

          <main className="flex-1 overflow-y-auto bg-surface p-5 md:p-6 relative">
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40" />
            <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-6 h-full">
              <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-[32px] leading-[40px] tracking-[-0.02em] font-bold text-primary">Bayar - IWallet (Desktop)</h1>
                  <p className="text-on-surface-variant text-[16px] leading-[24px]">Pindai kode QR untuk pembayaran instan dan aman.</p>
                </div>
              </header>

              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="w-full max-w-4xl grid md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-8 bg-white p-6 rounded-[24px] ambient-shadow flex flex-col gap-4">
                    <div className="scanner-viewport aspect-video rounded-xl bg-black/90 flex items-center justify-center group">
                      <div className="absolute inset-0 opacity-50">
                        <img className="w-full h-full object-cover grayscale brightness-75" alt="Camera feed showing QR code" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRQgfGV5isjklFJHvDIR89vETpdJU9dOJ507RvfY4HDl54QRtaKWkHkoz68zrD_GD54WD7CF0dTcu1hrnoLQkV3KFeVeFPG5R2C_ummmJM6RSLrDcW6vBIQVCfJpUfbbRsLjjut7ZOmp6s2t4gNw_CRZKKMZMgHde7P0NmBIj3jjbq9KKGmGbFHFb2Q0eCo5P7uPPQlNF3KwL8h4We0H5BOTh2Two_JrDpylrK8nEnQnyvVPOhjgPR" />
                      </div>
                      <div className="scanner-line"></div>
                      <div className="relative z-10 border-2 border-primary/60 w-48 h-48 rounded-2xl flex items-center justify-center">
                        <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-lg"></div>
                        <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-lg"></div>
                        <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-lg"></div>
                        <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-lg"></div>
                        <span className="material-symbols-outlined text-white/40 text-6xl animate-pulse">qr_code_2</span>
                      </div>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
                        <button className="bg-black/40 hover:bg-black/60 backdrop-blur-md text-white p-3 rounded-full transition-all" type="button">
                          <span className="material-symbols-outlined">flip_camera_ios</span>
                        </button>
                        <button className="bg-primary hover:scale-105 active:scale-95 text-white p-3 rounded-full shadow-lg transition-all" type="button">
                          <span className="material-symbols-outlined">photo_camera</span>
                        </button>
                        <button className="bg-black/40 hover:bg-black/60 backdrop-blur-md text-white p-3 rounded-full transition-all" type="button">
                          <span className="material-symbols-outlined">flash_on</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
                        <p className="text-[14px] leading-[20px] text-on-surface-variant">Posisikan kode QR di dalam bingkai.</p>
                      </div>
                      <div className="flex gap-3">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-[10px] leading-[12px] uppercase tracking-wider text-on-surface-variant font-bold">Live Feed</span>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-4 flex flex-col gap-4 h-full">
                    <div className="bg-white p-6 rounded-[24px] ambient-shadow hover:translate-y-[-4px] transition-all cursor-pointer group border-2 border-transparent hover:border-primary-container">
                      <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined">cloud_upload</span>
                      </div>
                      <h3 className="text-[20px] leading-[28px] font-semibold mb-1">Upload QR from Gallery</h3>
                      <p className="text-[14px] leading-[20px] text-on-surface-variant">Gunakan gambar QR yang sudah tersimpan di file Anda.</p>
                    </div>

                    <div className="bg-white p-6 rounded-[24px] ambient-shadow flex flex-col gap-4">
                      <div>
                        <h3 className="text-[20px] leading-[28px] font-semibold mb-1">Manual ID Input</h3>
                        <p className="text-[14px] leading-[20px] text-on-surface-variant">Masukkan ID Merchant atau Nomor VA secara manual.</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[12px] leading-[16px] tracking-[0.01em] font-bold text-on-surface-variant">ID MERCHANT / VA</label>
                        <div className="relative">
                          <input className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-mono tracking-widest" placeholder="e.g. 1234567890" type="text" />
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-primary material-symbols-outlined">edit</span>
                        </div>
                      </div>
                      <button className="w-full py-3 bg-secondary-container text-secondary font-bold rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-all active:scale-95" onClick={() => navigate('/payment/pin')} type="button">
                        Proceed Payment
                      </button>
                    </div>

                    <div className="p-6 rounded-[24px] bg-primary/5 border border-primary/10 mt-auto">
                      <h4 className="text-[12px] leading-[16px] tracking-[0.01em] font-bold text-primary mb-2 flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">verified_user</span>
                        KEAMANAN TRANSAKSI
                      </h4>
                      <p className="text-[12px] leading-[16px] tracking-[0.01em] text-on-surface-variant leading-relaxed">
                        Pastikan nama merchant sesuai sebelum memasukkan PIN Anda. Semua transaksi IWallet dilindungi oleh enkripsi 256-bit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 backdrop-blur-md p-4 rounded-full ambient-shadow mt-auto flex items-center justify-between px-8 border border-white">
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-3">
                    <div className="h-10 w-10 rounded-full border-2 border-white bg-surface-dim overflow-hidden">
                      <img className="w-full h-full object-cover" alt="Merchant 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRCCJS94w08F4IOT9AHQCOPmDB4850N2fgXTi-Cbg7-2SfMUEZXRqcfwP8MG95P-nu07fD3KuC1s8ZdQu12X_4DLYqsDSs4tzQU_V3ZEoEMfcCsia0WM8AyPPChM0JHNiEA7Lsb6gvRv70cvnDoEWkmx_bX-F6QgOxWZxEaYs1IVBdWEkIE-eYSJCUhoB54afCYQDi8HkXLU3aRiuR7y9kxvKbAjKDX5hRa5i6hppmMe8ajMeaDc7y" />
                    </div>
                    <div className="h-10 w-10 rounded-full border-2 border-white bg-surface-dim overflow-hidden">
                      <img className="w-full h-full object-cover" alt="Merchant 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAefCxcX6YEcktDWImGBlq488EAqAVRUvlw2n5TuWlArEUmU5nhf1ksBHMEIZl2aKJ8B7erUAThL1iMWf6Cp4KcL0iBIx8-OlTt94aAE6vqaKUTB7BPgjUa0mJYcpaN7uMC9gTELntCPuYuTwTIxGt1KMMoattNDHI_Oqqz9j3nf3_RNnIDLMIG7Qw1KnwAU7TDQQOInaOC9-XMN87MC-si6fK79hnY8142ufpIck69KpnbBXnqsuQl" />
                    </div>
                    <div className="h-10 w-10 rounded-full border-2 border-white bg-surface-dim overflow-hidden">
                      <img className="w-full h-full object-cover" alt="Merchant 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6zYQ-YRd_g6woyKpP87zX69vT-oHZeDZJPVZwmgjYrshU183PbeUoNHJQXSi7vlnz6Lke8iWXSDE9IPdMRfp5ERrfTheF1-wHjakiILW2EameD8ELwTiu60k84c5aIllO4lUqpYag4Ik-0sf1BBhzSj3-aWAGYSCqm133KB9RByxxAaFkwlhMM8ymLZOxHynbGZLUzcbOR5lnOi-DX2cANjY3T2VijSWlEFlO2To1s_ixRIhs8X7L" />
                    </div>
                  </div>
                  <p className="text-[14px] leading-[20px] font-medium text-on-surface-variant">Diterima di lebih dari <span className="text-primary font-bold">10,000+</span> Merchant Terverifikasi</p>
                </div>
                <button className="text-primary font-bold flex items-center gap-2 hover:underline" type="button">
                  Lihat Panduan Bayar <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
