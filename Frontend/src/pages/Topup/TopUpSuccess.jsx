import { useNavigate, useLocation } from 'react-router-dom';
import DashboardIcon from "../../assets/icons/dashboard/dashboard.svg";
import PaymentsIcon from "../../assets/icons/dashboard/payments.svg";
import HistoryIcon from "../../assets/icons/dashboard/history.svg";
import PersonIcon from "../../assets/icons/dashboard/person.svg";
import LogoutIcon from "../../assets/icons/dashboard/logout.svg";
import SearchIcon from "../../assets/icons/dashboard/search.svg";
import NotificationsIcon from "../../assets/icons/dashboard/notifications.svg";
import ProfileImage from '../../assets/image/profile.png';

const navItems = [
  { icon: DashboardIcon, label: 'Dashboard', path: '/dashboard' },
  { icon: PaymentsIcon, label: 'Bayar', path: '/payment' },
  { icon: HistoryIcon, label: 'History', path: '/transaction' },
  { icon: PersonIcon, label: 'Profile', path: '/profile' },
];

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
            className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-xl transition-all duration-200 ease-in-out cursor-pointer text-secondary dark:text-secondary-fixed-dim hover:bg-surface-container-highest dark:hover:bg-inverse-surface`}
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
  <header className="w-full h-16 sticky top-0 bg-surface/80 dark:bg-surface-container/80 backdrop-blur-md shadow-sm flex justify-between items-center px-4 md:px-6 z-40">
    <div className="flex items-center bg-surface-container-low dark:bg-surface-container-highest px-4 py-2 rounded-full w-full max-w-xs sm:max-w-sm lg:w-96">
      <img src={SearchIcon} alt="search" className="w-4 h-4 text-outline mr-2" />
      <input className="bg-transparent border-none focus:ring-0 text-body-md font-body-md w-full placeholder:text-outline-variant" placeholder="Cari transaksi atau fitur..." type="text" />
    </div>
    <div className="flex items-center gap-4">
      <button className="w-10 h-10 flex items-center justify-center text-on-secondary-container dark:text-outline-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors rounded-full active:scale-95 transition-transform">
        <img src={NotificationsIcon} alt="notifications" className="w-6 h-6" />
      </button>
      <div className="hidden md:flex items-center gap-3 pl-4 border-l border-outline-variant/30">
        <div className="text-right">
          <p className="font-label-md text-label-md font-bold">Budi Santoso</p>
          <p className="text-[10px] text-secondary">Verified Member</p>
        </div>
        <img className="w-10 h-10 rounded-full object-cover border-2 border-primary-container" alt="Professional portrait of Budi Santoso" src={ProfileImage} />
      </div>
    </div>
  </header>
);

export default function TopUpSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const amount = location.state?.amount || 0;

  return (
    <div className="bg-background text-on-background min-h-screen flex overflow-x-hidden font-['Inter',sans-serif]">
      <SideNavBar />
      <main className="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 pb-20 lg:pb-0">
        <TopNavBar />

        <div className="flex-1 flex flex-col items-center px-4 py-10">
          <div className="w-full max-w-[512px]">
            <div className="bg-surface rounded-t-3xl premium-shadow p-8 flex flex-col gap-8">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-4 shadow-lg shadow-primary/30">
                  <span className="material-symbols-outlined text-white text-[40px]">check</span>
                </div>
                <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface mb-1">Top Up Berhasil</h2>
                <p className="text-center font-body-sm text-body-sm text-secondary">Saldo dompet digital Anda telah bertambah</p>
              </div>

              <div className="bg-surface-container-low rounded-2xl p-6 flex flex-col items-center border border-outline-variant/20">
                <p className="font-label-sm text-label-sm font-medium text-secondary mb-1">Total Top Up</p>
                <p className="font-display-sm text-[32px] leading-10 font-extrabold text-primary">
                  Rp {new Intl.NumberFormat('id-ID').format(amount)}
                </p>
              </div>

              <div className="pt-4 flex flex-col gap-5">
                <div>
                  <p className="font-label-sm text-[10px] font-semibold uppercase tracking-wider text-secondary mb-1">Metode</p>
                  <p className="font-body-sm text-sm font-semibold">Transfer Bank / Virtual Account</p>
                </div>

                <div>
                  <p className="font-label-sm text-[10px] font-semibold uppercase tracking-wider text-secondary mb-1">ID Transaksi</p>
                  <div className="flex items-center justify-between bg-surface-container-lowest rounded-lg px-3 py-2 ring-1 ring-outline-variant/30">
                    <span className="text-xs font-mono text-secondary">TUP-{Math.floor(Math.random() * 1000000)}-IWL</span>
                    <span className="material-symbols-outlined text-primary text-sm cursor-pointer hover:opacity-70">content_copy</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-outline-variant/30 text-center">
                <p className="font-body-sm text-[10px] italic font-semibold text-outline">Terima kasih telah menggunakan IWallet untuk transaksi harian Anda.</p>
              </div>
            </div>

            <div className="mt-4">
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="w-full py-4 rounded-2xl bg-primary text-on-primary font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:brightness-110 active:scale-[0.98] transition-all"
              >
                <span className="material-symbols-outlined">home</span>
                Kembali ke Dashboard
              </button>
            </div>
          </div>
        </div>
      </main>

      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-surface/95 backdrop-blur-xl border-t border-outline-variant/30 flex justify-around py-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))]">
        {navItems.map((item) => (
          <a
            key={item.label}
            className={`flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-xl cursor-pointer text-secondary`}
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
