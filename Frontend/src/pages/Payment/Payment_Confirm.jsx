import { useNavigate } from 'react-router-dom'

const navItems = [
  { icon: 'dashboard', label: 'Dashboard', path: '/dashboard' },
  { icon: 'account_balance_wallet', label: 'Wallet', path: '/payment', active: true },
  { icon: 'history', label: 'History', path: '/transaction' },
  { icon: 'person', label: 'Profile', path: '/profile' },
]

function Sidebar({ items, onNavigate }) {
  return (
    <>
      <div className="px-2 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#630ED4] flex items-center justify-center shadow-lg shadow-[#630ED4]/30">
            <span className="material-symbols-outlined text-white text-2xl">wallet</span>
          </div>
          <div>
            <p className="text-xl font-black text-[#630ED4] leading-none">IWallet</p>
            <p className="text-[10px] font-bold uppercase tracking-[1px] text-[#4A4455] mt-1">Premium Digital Wallet</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 flex flex-col gap-1">
        {items.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={() => onNavigate(item.path)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
              item.active
                ? 'bg-[#7C3AED] text-[#EDE0FF] font-bold shadow-md shadow-[#630ED4]/20'
                : 'text-[#4A4455] hover:bg-[#F9F1FF] active:scale-95'
            }`}
          >
            <span className="material-symbols-outlined text-xl">{item.icon}</span>
            <span className="text-xs tracking-[0.01em] font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="pt-4 border-t border-[#CCC3D8]/20 flex flex-col gap-1">
        <button type="button" onClick={() => onNavigate('/login')} className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#BA1A1A] hover:bg-[#FEE2E2] transition-all duration-200 active:scale-95">
          <span className="material-symbols-outlined text-xl">logout</span>
          <span className="text-xs tracking-[0.01em] font-medium">Logout</span>
        </button>
      </div>
    </>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-xl border-b border-[#CCC3D8]/30">
      <div className="flex items-center justify-between h-16 px-4 md:px-10">
        <h1 className="text-lg md:text-xl font-semibold text-[#630ED4]">Konfirmasi Pembayaran</h1>
        <div className="flex items-center gap-3 md:gap-6">
          <button type="button" className="relative p-1 text-[#4A4455] hover:text-[#630ED4] transition-colors">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-[#BA1A1A]" />
          </button>
          <button type="button" className="p-1 text-[#4A4455] hover:text-[#630ED4] transition-colors">
            <span className="material-symbols-outlined">help</span>
          </button>
          <div className="flex items-center gap-3 pl-3 md:pl-4 border-l border-[#CCC3D8]/30">
            <div className="hidden sm:block text-right">
              <p className="text-xs font-bold text-[#1D1A24] leading-tight">Alex Johnson</p>
              <p className="text-[10px] text-[#4A4455]">Premium Member</p>
            </div>
            <div className="w-10 h-10 shrink-0 rounded-full ring-2 ring-[#7C3AED] overflow-hidden">
              <img className="w-full h-full object-cover" src="https://placehold.co/40x40" alt="Alex Johnson" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default function PaymentConfirm() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#FEF7FF] text-[#1D1A24]">
      <div className="flex min-h-screen">
        <aside className="hidden lg:flex flex-col w-64 shrink-0 h-screen sticky top-0 bg-white border-r border-[#CCC3D8]/20 p-4 gap-4">
          <Sidebar items={navItems} onNavigate={navigate} />
        </aside>

        <div className="flex-1 flex flex-col min-w-0">
          <Header />

          <main className="flex-1 pb-24 lg:pb-10">
            <div className="max-w-screen-xl mx-auto px-4 py-6 md:px-8 md:py-10">
              <div className="grid lg:grid-cols-3 gap-6 items-start">
                <div className="lg:col-span-2 flex flex-col gap-6">
                  <section className="bg-white rounded-3xl p-5 md:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] ring-1 ring-[#CCC3D8]/10 flex items-center gap-4 md:gap-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-2xl bg-[#F9F1FF] ring-1 ring-[#CCC3D8]/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#630ED4] text-3xl md:text-4xl">storefront</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.5px] text-[#630ED4]">Merchant Partner</p>
                      <h2 className="text-xl md:text-2xl font-semibold truncate">The Daily Grind Coffee</h2>
                      <p className="text-sm text-[#4A4455] flex items-center gap-2 mt-0.5">
                        <span className="material-symbols-outlined text-base">pin_drop</span>
                        Merchant ID:
                        <span className="font-mono font-bold text-[#4A4455]">MCH-99283-ID</span>
                      </p>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F3EBFA] text-[#630ED4] text-xs font-medium shrink-0">
                      <span className="material-symbols-outlined text-sm">verified</span>
                      Verified Merchant
                    </span>
                  </section>

                  <section className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] ring-1 ring-[#CCC3D8]/10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <h3 className="text-lg md:text-xl font-semibold">Nominal Pembayaran</h3>
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#F9F1FF] text-xs font-medium text-[#4A4455] self-start sm:self-auto">
                        <span className="material-symbols-outlined text-[#630ED4]">account_balance_wallet</span>
                        Saldo:
                        <span className="font-medium text-[#1D1A24]">Rp 1.250.000</span>
                      </span>
                    </div>

                    <div className="mt-6 flex items-baseline gap-2 px-4 md:px-6 py-8 rounded-2xl ring-2 ring-[#CCC3D8]/20">
                      <span className="text-3xl md:text-4xl font-bold text-[#4A4455]/50">Rp</span>
                      <span className="text-4xl md:text-5xl font-bold">150.000</span>
                    </div>

                    <p className="mt-5 flex items-center gap-2 text-sm text-[#4A4455]">
                      <span className="material-symbols-outlined text-base">info</span>
                      Pastikan nominal pembayaran sudah sesuai dengan tagihan merchant.
                    </p>
                  </section>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <button type="button" className="bg-white rounded-3xl p-5 md:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] ring-1 ring-[#CCC3D8]/10 flex items-center gap-4 text-left hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98]">
                      <div className="w-12 h-12 shrink-0 rounded-xl bg-[#FFDCC6] flex items-center justify-center">
                        <span className="material-symbols-outlined text-[#7D3D00]">local_offer</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold tracking-wide">Promo Cashback</p>
                        <p className="text-[10px] text-[#4A4455]">2 Voucher tersedia</p>
                      </div>
                      <span className="material-symbols-outlined text-[#4A4455]">chevron_right</span>
                    </button>

                    <button type="button" className="bg-white rounded-3xl p-5 md:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] ring-1 ring-[#CCC3D8]/10 flex items-center gap-4 text-left hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98]">
                      <div className="w-12 h-12 shrink-0 rounded-xl bg-[#EADDFF] flex items-center justify-center">
                        <span className="material-symbols-outlined text-[#630ED4]">account_balance_wallet</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold tracking-wide">Metode Bayar</p>
                        <p className="text-[10px] text-[#4A4455]">IWallet Balance</p>
                      </div>
                      <span className="material-symbols-outlined text-[#4A4455]">chevron_right</span>
                    </button>
                  </div>
                </div>

                <aside className="lg:col-span-1 lg:sticky lg:top-24">
                  <section className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] ring-1 ring-[#CCC3D8]/10">
                    <h3 className="text-xl font-semibold mb-6">
                      Ringkasan
                      <br />
                      Transaksi
                    </h3>

                    <div className="flex flex-col gap-6">
                      <div className="flex justify-between items-start gap-3">
                        <div>
                          <p className="text-xs font-medium text-[#4A4455]">Nominal Transaksi</p>
                          <p className="text-[10px] text-[#4A4455]">Subtotal Tagihan</p>
                        </div>
                        <span className="text-xs font-bold shrink-0">Rp 150.000</span>
                      </div>

                      <div className="flex justify-between items-start gap-3">
                        <div>
                          <p className="text-xs font-medium text-[#4A4455]">Biaya Layanan</p>
                          <p className="text-[10px] text-[#4A4455]">IWallet processing fee</p>
                        </div>
                        <span className="text-xs font-bold shrink-0">Rp 1.500</span>
                      </div>

                      <div className="flex justify-between items-start gap-3">
                        <div>
                          <p className="text-xs font-medium text-[#16A34A]">Diskon Promo</p>
                          <p className="text-[10px] text-[#4A4455]">Cashback Promo Kopi</p>
                        </div>
                        <span className="text-xs font-bold text-[#16A34A] shrink-0">-Rp 5.000</span>
                      </div>

                      <div className="pt-6 border-t border-[#CCC3D8]/50 flex justify-between items-end gap-3">
                        <div>
                          <p className="text-base font-semibold">Total Bayar</p>
                          <p className="text-[10px] text-[#4A4455]">Sudah termasuk pajak &amp; biaya</p>
                        </div>
                        <span className="text-lg font-semibold text-[#630ED4] shrink-0">Rp 146.500</span>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-col gap-4">
                      <button
                        type="button"
                        onClick={() => navigate('/payment/pin')}
                        className="w-full py-5 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#630ED4] text-white text-xl font-semibold flex items-center justify-center gap-3 shadow-[0_10px_15px_-3px_rgba(99,14,212,0.25)] hover:brightness-110 active:scale-[0.98] transition-all duration-200"
                      >
                        <span className="material-symbols-outlined text-2xl">lock</span>
                        Bayar Sekarang
                      </button>
                      <button type="button" onClick={() => navigate('/payment')} className="w-full py-4 rounded-2xl text-[#4A4455] text-xs font-medium hover:bg-[#F9F1FF] transition-colors">
                        Batalkan Transaksi
                      </button>
                    </div>

                    <div className="mt-6 p-4 rounded-2xl bg-[#F9F1FF] flex items-center gap-4">
                      <div className="w-10 h-10 shrink-0 rounded-full bg-white shadow-sm flex items-center justify-center">
                        <span className="material-symbols-outlined text-[#630ED4]">verified_user</span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold text-[#1D1A24]">Pembayaran Aman</p>
                        <p className="text-[10px] text-[#4A4455]">Enkripsi 256-bit AES tingkat bank.</p>
                      </div>
                    </div>
                  </section>
                </aside>
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
