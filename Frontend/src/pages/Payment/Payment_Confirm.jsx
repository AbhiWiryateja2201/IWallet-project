export default function PaymentConfirm() {
  return (
    <div className="flex w-full h-screen bg-[#FEF7FF] text-[#1D1A24] overflow-hidden font-sans">
      {/* Left Sidebar */}
      <aside className="w-64 h-full bg-white border-r border-[#CCC3D8]/20 shadow-sm flex-col hidden lg:flex">
        <div className="p-6 pb-8 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#630ED4] flex items-center justify-center shrink-0">
            <img src="https://placehold.co/40x40" alt="logo" className="rounded-xl w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-black text-[#630ED4] leading-tight">IWallet</h1>
            <span className="text-[10px] font-bold text-[#4A4455] uppercase tracking-widest">Premium Digital<br/>Wallet</span>
          </div>
        </div>

        <nav className="flex-1 px-4 flex flex-col gap-1">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-[#7C3AED] rounded-xl text-[#EDE0FF] font-medium text-sm">
            <div className="w-4 h-4 bg-[#EDE0FF] rounded-sm"></div>
            Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#4A4455] font-medium text-sm hover:bg-[#F9F1FF] transition-colors">
            <div className="w-4 h-4 bg-[#4A4455] rounded-sm"></div>
            Wallet
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#4A4455] font-medium text-sm hover:bg-[#F9F1FF] transition-colors">
            <div className="w-4 h-4 bg-[#4A4455] rounded-sm"></div>
            History
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#4A4455] font-medium text-sm hover:bg-[#F9F1FF] transition-colors">
            <div className="w-4 h-4 bg-[#4A4455] rounded-sm"></div>
            Profile
          </a>
        </nav>

        <div className="px-4 py-4 border-t border-[#CCC3D8]/20 flex flex-col gap-1">
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#4A4455] font-medium text-sm hover:bg-[#F9F1FF] transition-colors">
            <div className="w-5 h-5 bg-[#4A4455] rounded-sm"></div>
            Settings
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#BA1A1A] font-medium text-sm hover:bg-red-50 transition-colors">
            <div className="w-4 h-4 bg-[#BA1A1A] rounded-sm"></div>
            Logout
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-y-auto">
        {/* Header */}
        <header className="h-16 px-6 lg:px-10 bg-white/80 backdrop-blur-md border-b border-[#CCC3D8]/30 flex items-center justify-between sticky top-0 z-10 shrink-0">
          <h2 className="text-xl font-semibold text-[#630ED4]">Konfirmasi Pembayaran</h2>
          
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative hidden sm:block">
              <div className="w-4 h-5 bg-[#4A4455]"></div>
              <div className="w-2 h-2 bg-[#BA1A1A] rounded-full absolute -top-1 -right-1"></div>
            </div>
            <div className="w-5 h-5 bg-[#4A4455] hidden sm:block"></div>
            <div className="sm:pl-4 sm:border-l border-[#CCC3D8]/30 flex items-center gap-3">
              <div className="flex flex-col items-end">
                <span className="text-xs font-bold text-[#1D1A24]">Alex Johnson</span>
                <span className="text-[10px] font-medium text-[#4A4455]">Premium Member</span>
              </div>
              <img src="https://placehold.co/40x40" alt="profile" className="w-10 h-10 rounded-full border-2 border-[#7C3AED]" />
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="flex-1 w-full max-w-[1280px] mx-auto p-4 sm:p-6 lg:p-10 flex flex-col xl:flex-row gap-6 sm:gap-8">
          
          {/* Left Column (Payment Details) */}
          <div className="flex-1 flex flex-col gap-6 sm:gap-8">
            
            {/* Merchant Card */}
            <div className="bg-white p-5 sm:p-6 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#CCC3D8]/10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#F9F1FF] rounded-2xl border border-[#CCC3D8]/20 flex items-center justify-center overflow-hidden shrink-0">
                <img src="https://placehold.co/78x78" alt="merchant" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <span className="text-[10px] font-bold text-[#630ED4] tracking-wider uppercase">Merchant Partner</span>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1D1A24]">The Daily Grind Coffee</h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-3 h-3 bg-[#4A4455]"></div>
                  <span className="text-xs sm:text-sm text-[#4A4455]">Merchant ID: <span className="font-mono font-bold">MCH-99283-ID</span></span>
                </div>
              </div>
              <div className="absolute top-5 right-5 sm:static bg-[#F3EBFA] px-3 py-1.5 rounded-full">
                <span className="text-[10px] sm:text-xs font-medium text-[#630ED4]">Verified Merchant</span>
              </div>
            </div>

            {/* Nominal Card */}
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#CCC3D8]/10 flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h3 className="text-lg sm:text-xl font-semibold text-[#1D1A24]">Nominal Pembayaran</h3>
                <div className="bg-[#F9F1FF] px-4 py-2 rounded-2xl flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#630ED4]"></div>
                  <span className="text-xs font-medium text-[#4A4455]">Saldo: <span className="text-[#1D1A24]">Rp 1.250.000</span></span>
                </div>
              </div>
              
              <div className="relative mt-2">
                <div className="bg-white py-5 sm:py-6 md:py-8 pl-12 sm:pl-16 pr-4 sm:pr-6 rounded-2xl border-2 border-[#CCC3D8]/20 flex items-center">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D1A24]">150.000</span>
                </div>
                <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4A4455]/50">Rp</span>
                </div>
                <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 bg-[#630ED4]"></div>
              </div>
              
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#4A4455]">
                <div className="w-3 h-3 bg-[#4A4455] shrink-0"></div>
                <p>Pastikan nominal pembayaran sudah sesuai dengan tagihan merchant.</p>
              </div>
            </div>

            {/* Promos & Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white p-5 sm:p-6 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#CCC3D8]/10 flex items-center gap-4 cursor-pointer hover:border-[#630ED4]/30 transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFDCC6] rounded-xl flex items-center justify-center shrink-0">
                  <div className="w-4 sm:w-5 h-4 sm:h-5 bg-[#7D3D00]"></div>
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-xs font-bold text-[#1D1A24]">Promo Cashback</span>
                  <span className="text-[10px] text-[#4A4455]">2 Voucher tersedia</span>
                </div>
                <div className="w-2 h-3 bg-[#4A4455]"></div>
              </div>
              
              <div className="bg-white p-5 sm:p-6 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#CCC3D8]/10 flex items-center gap-4 cursor-pointer hover:border-[#630ED4]/30 transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#EADDFF] rounded-xl flex items-center justify-center shrink-0">
                  <div className="w-5 h-4 bg-[#630ED4]"></div>
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-xs font-bold text-[#1D1A24]">Metode Bayar</span>
                  <span className="text-[10px] text-[#4A4455]">IWallet Balance</span>
                </div>
                <div className="w-2 h-3 bg-[#4A4455]"></div>
              </div>
            </div>

          </div>

          {/* Right Column (Summary) */}
          <div className="w-full xl:w-80 flex flex-col gap-6 shrink-0">
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#CCC3D8]/10 flex flex-col">
              <h3 className="text-lg sm:text-xl font-semibold text-[#1D1A24] mb-6 sm:mb-8">Ringkasan<br className="hidden sm:block" /> Transaksi</h3>
              
              <div className="flex flex-col gap-5 sm:gap-6">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-[#4A4455]">Nominal Transaksi</span>
                    <span className="text-[10px] text-[#4A4455] mt-1">Subtotal Tagihan</span>
                  </div>
                  <span className="text-xs font-bold text-[#1D1A24]">Rp 150.000</span>
                </div>
                
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-[#4A4455]">Biaya Layanan</span>
                    <span className="text-[10px] text-[#4A4455] mt-1">IWallet processing fee</span>
                  </div>
                  <span className="text-xs font-bold text-[#1D1A24]">Rp 1.500</span>
                </div>
                
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-[#16A34A]">Diskon Promo</span>
                    <span className="text-[10px] text-[#4A4455] mt-1">Cashback Promo Kopi</span>
                  </div>
                  <span className="text-xs font-bold text-[#16A34A]">-Rp 5.000</span>
                </div>
                
                <div className="mt-2 pt-5 sm:pt-6 border-t border-[#CCC3D8]/50 flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-sm sm:text-base font-semibold text-[#1D1A24]">Total Bayar</span>
                    <span className="text-[10px] text-[#4A4455] mt-1">Sudah termasuk pajak & biaya</span>
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-[#630ED4]">Rp 146.500</span>
                </div>
              </div>
              
              <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4">
                <button className="w-full py-3.5 sm:py-4 bg-gradient-to-br from-[#7C3AED] to-[#630ED4] rounded-2xl text-white text-base sm:text-lg font-semibold shadow-lg shadow-[#630ED4]/20 hover:opacity-90 transition-opacity flex items-center justify-center gap-3">
                  <div className="w-4 h-5 bg-white mask-icon rounded-sm"></div>
                  Bayar Sekarang
                </button>
                <button className="w-full py-3 rounded-2xl text-xs font-medium text-[#4A4455] hover:bg-gray-50 transition-colors">
                  Batalkan Transaksi
                </button>
              </div>
            </div>
            
            {/* Security Badge */}
            <div className="bg-[#F9F1FF] p-4 rounded-2xl flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0">
                <div className="w-4 h-5 bg-[#630ED4]"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-[#1D1A24]">Pembayaran Aman</span>
                <span className="text-[10px] text-[#4A4455] mt-0.5 leading-snug">Enkripsi 256-bit AES tingkat bank.</span>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
