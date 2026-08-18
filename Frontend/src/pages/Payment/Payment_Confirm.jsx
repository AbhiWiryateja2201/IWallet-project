import { useNavigate, useLocation } from 'react-router-dom'
import DashboardIcon from "../../assets/icons/dashboard/dashboard.svg"
import PaymentsIcon from "../../assets/icons/dashboard/payments.svg"
import HistoryIcon from "../../assets/icons/dashboard/history.svg"
import PersonIcon from "../../assets/icons/dashboard/person.svg"
import LogoutIcon from "../../assets/icons/dashboard/logout.svg"
import SearchIcon from "../../assets/icons/dashboard/search.svg"
import NotificationsIcon from "../../assets/icons/dashboard/notifications.svg"
import ProfileImage from '../../assets/image/profile.png'

const navItems = [
  { icon: DashboardIcon, label: 'Dashboard', path: '/dashboard' },
  { icon: PaymentsIcon, label: 'Bayar', path: '/payment', active: true },
  { icon: HistoryIcon, label: 'History', path: '/transaction' },
  { icon: PersonIcon, label: 'Profile', path: '/profile' },
]

const SideNavBar = () => {
  const navigate = useNavigate();
  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-full w-64 bg-surface dark:bg-surface-container-low flex-col py-6 md:py-8 gap-6 z-50 border-r border-outline-variant/30 shadow-md">
      <div className="px-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center">
            <img src="/Logo_App.png" alt="IWallet Logo" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div>
            <h1 className="font-headline-sm text-headline-sm font-black text-primary dark:text-primary-fixed">IWallet</h1>
            <p className="font-label-md text-label-md text-secondary opacity-70">Premium Finance</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 px-2 space-y-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-xl transition-all duration-200 ease-in-out cursor-pointer ${
              item.active ? 'bg-primary-container text-on-primary-container' : 'text-secondary dark:text-secondary-fixed-dim hover:bg-surface-container-highest dark:hover:bg-inverse-surface'
            }`}
            onClick={() => navigate(item.path)}
          >
            <img src={item.icon} alt={item.label} className="w-6 h-6" />
            <span className="font-label-md text-label-md">{item.label}</span>
          </a>
        ))}
        <div className="pt-4 mt-4 border-t border-outline-variant/30">
          <a className="flex items-center gap-3 text-error px-4 py-3 mx-2 hover:bg-error-container/10 rounded-xl transition-all duration-200 ease-in-out cursor-pointer" onClick={() => navigate('/login')}>
            <img src={LogoutIcon} alt="Logout" className="w-6 h-6" />
            <span className="font-label-md text-label-md">Logout</span>
          </a>
        </div>
      </nav>
    </aside>
  );
};

const TopNavBar = () => (
  <header className="w-full h-16 sticky top-0 bg-surface/80 dark:bg-surface-container/80 backdrop-blur-md shadow-sm flex justify-between items-center px-container-margin z-40">
    <div className="flex items-center bg-surface-container-low dark:bg-surface-container-highest px-4 py-2 rounded-full w-96">
      <img src={SearchIcon} alt="search" className="w-4 h-4 text-outline mr-2" />
      <input className="bg-transparent border-none focus:ring-0 text-body-md font-body-md w-full placeholder:text-outline-variant" placeholder="Cari transaksi atau fitur..." type="text" />
    </div>
    <div className="flex items-center gap-4">
      <button className="w-10 h-10 flex items-center justify-center text-on-secondary-container dark:text-outline-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors rounded-full active:scale-95 transition-transform">
        <img src={NotificationsIcon} alt="notifications" className="w-6 h-6" />
      </button>
      <div className="flex items-center gap-3 pl-4 border-l border-outline-variant/30">
        <div className="text-right">
          <p className="font-label-md text-label-md font-bold">Budi Santoso</p>
          <p className="text-[10px] text-secondary">Verified Member</p>
        </div>
        <img className="w-10 h-10 rounded-full object-cover border-2 border-primary-container" alt="Professional portrait of Budi Santoso" src={ProfileImage} />
      </div>
    </div>
  </header>
);

export default function PaymentConfirm() {
  const navigate = useNavigate()
  const location = useLocation()
  
  const qrData = location.state?.qrData || {}
  const merchantId = qrData.merchantId || "MCH-99283-ID"
  const merchantName = qrData.merchantName || "The Daily Grind Coffee"
  const nominalTransaksi = qrData.amount || 150000
  
  const serviceFee = 1500
  const discount = 5000
  const totalPay = nominalTransaksi + serviceFee - discount
  
  const formatRp = (num) => new Intl.NumberFormat('id-ID').format(num)

  return (
    <div className="bg-background text-on-background min-h-screen flex overflow-x-hidden">
      <SideNavBar />
      <main className="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 pb-20 lg:pb-0">
        <TopNavBar />

        <div className="flex-1">
          <div className="max-w-7xl mx-auto w-full px-4 py-6 md:px-8 md:py-10">
            <div className="grid lg:grid-cols-3 gap-6 items-start">
              <div className="lg:col-span-2 flex flex-col gap-6">
                <section className="bg-white rounded-3xl p-5 md:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] ring-1 ring-[#CCC3D8]/10 flex items-center gap-4 md:gap-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-2xl bg-[#F9F1FF] ring-1 ring-[#CCC3D8]/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#630ED4] text-3xl md:text-4xl">storefront</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.5px] text-[#630ED4]">Merchant Partner</p>
                    <h2 className="text-xl md:text-2xl font-semibold truncate">{merchantName}</h2>
                    <p className="text-sm text-[#4A4455] flex items-center gap-2 mt-0.5">
                      <span className="material-symbols-outlined text-base">pin_drop</span>
                      Merchant ID:
                      <span className="font-mono font-bold text-[#4A4455]">{merchantId}</span>
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
                    <span className="text-4xl md:text-5xl font-bold">{formatRp(nominalTransaksi)}</span>
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
                      <span className="text-xs font-bold shrink-0">Rp {formatRp(nominalTransaksi)}</span>
                    </div>

                    <div className="flex justify-between items-start gap-3">
                      <div>
                        <p className="text-xs font-medium text-[#4A4455]">Biaya Layanan</p>
                        <p className="text-[10px] text-[#4A4455]">IWallet processing fee</p>
                      </div>
                      <span className="text-xs font-bold shrink-0">Rp {formatRp(serviceFee)}</span>
                    </div>

                    <div className="flex justify-between items-start gap-3">
                      <div>
                        <p className="text-xs font-medium text-[#16A34A]">Diskon Promo</p>
                        <p className="text-[10px] text-[#4A4455]">Cashback Promo Kopi</p>
                      </div>
                      <span className="text-xs font-bold text-[#16A34A] shrink-0">-Rp {formatRp(discount)}</span>
                    </div>

                    <div className="pt-6 border-t border-[#CCC3D8]/50 flex justify-between items-end gap-3">
                      <div>
                        <p className="text-base font-semibold">Total Bayar</p>
                        <p className="text-[10px] text-[#4A4455]">Sudah termasuk pajak &amp; biaya</p>
                      </div>
                      <span className="text-lg font-semibold text-[#630ED4] shrink-0">Rp {formatRp(totalPay)}</span>
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
        </div>
      </main>

      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-surface/95 backdrop-blur-xl border-t border-outline-variant/30 flex justify-around py-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))]">
        {navItems.map((item) => (
          <a
            key={item.label}
            className={`flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-xl cursor-pointer ${
              item.active ? 'text-primary' : 'text-secondary'
            }`}
            onClick={() => navigate(item.path)}
          >
            <img src={item.icon} alt={item.label} className="w-6 h-6" />
            <span className="text-[10px] font-medium">{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  )
}
