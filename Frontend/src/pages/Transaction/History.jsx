import { useNavigate } from 'react-router-dom';
import DashboardIcon from "../../assets/icons/dashboard/dashboard.svg";
import PaymentsIcon from "../../assets/icons/dashboard/payments.svg";
import HistoryIcon from "../../assets/icons/dashboard/history.svg";
import PersonIcon from "../../assets/icons/dashboard/person.svg";
import LogoutIcon from "../../assets/icons/dashboard/logout.svg";
import SearchIcon from "../../assets/icons/dashboard/search.svg";
import NotificationsIcon from "../../assets/icons/dashboard/notifications.svg";
import CallReceivedIcon from "../../assets/icons/dashboard/call_received.svg";
import ElectricBoltIcon from "../../assets/icons/dashboard/electric_bolt.svg";
import AddCardIcon from "../../assets/icons/dashboard/add_card.svg";
import ShoppingCartIcon from "../../assets/icons/dashboard/shopping_cart.svg";

const navItems = [
  { icon: DashboardIcon, label: 'Dashboard', path: '/dashboard' },
  { icon: PaymentsIcon, label: 'Bayar', path: '/payment' },
  { icon: HistoryIcon, label: 'History', path: '/transaction', active: true },
  { icon: PersonIcon, label: 'Profile', path: '/profile' },
];

const SideNavBar = () => {
  const navigate = useNavigate();
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-surface dark:bg-surface-container-low flex flex-col py-block-padding gap-stack-gap z-50 border-r border-outline-variant/30 shadow-md">
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
        <img className="w-10 h-10 rounded-full object-cover border-2 border-primary-container" alt="Professional portrait of Budi Santoso" src="/Profile.png" />
      </div>
    </div>
  </header>
);

const transactions = [
  { icon: CallReceivedIcon, iconBg: 'bg-primary-container/10', title: 'Transfer Masuk', subtitle: 'Dari Andi • 10:45 AM', amount: '+Rp 200.000', isPositive: true, status: 'Berhasil' },
  { icon: ElectricBoltIcon, iconBg: 'bg-secondary-container', title: 'PLN Token Listrik', subtitle: 'Pembayaran • 09:12 AM', amount: '-Rp 50.500', isPositive: false, status: 'Berhasil' },
  { icon: AddCardIcon, iconBg: 'bg-primary-container/10', title: 'Top Up via BCA', subtitle: 'Virtual Account • Kemarin', amount: '+Rp 500.000', isPositive: true, status: 'Berhasil' },
  { icon: ShoppingCartIcon, iconBg: 'bg-secondary-container', title: 'Indomaret Belanja Harian', subtitle: 'Merchant Payment • Kemarin', amount: '-Rp 125.000', isPositive: false, status: 'Berhasil' },
  { icon: CallReceivedIcon, iconBg: 'bg-primary-container/10', title: 'Transfer Masuk', subtitle: 'Dari Sari • Senin', amount: '+Rp 75.000', isPositive: true, status: 'Berhasil' },
];

const HistoryPage = () => (
  <div className="bg-background text-on-background min-h-screen flex">
    <SideNavBar />
    <main className="flex-1 ml-64 flex flex-col min-h-screen">
      <TopNavBar />
      <div className="p-block-padding flex flex-col gap-stack-gap max-w-7xl mx-auto w-full">
        <section className="mb-2">
          <h2 className="font-display-lg text-display-lg">Riwayat Transaksi</h2>
          <p className="font-body-md text-body-md text-secondary">Semua aktivitas keuangan Anda dalam satu tempat.</p>
        </section>

        <div className="bg-surface rounded-3xl p-8 premium-shadow">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex gap-2">
              {['Semua', 'Masuk', 'Keluar'].map((f) => (
                <button key={f} type="button" className="px-4 py-2 rounded-full text-sm font-bold bg-primary-container text-on-primary-container hover:brightness-95 transition-all active:scale-95">
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            {transactions.map((t, i) => (
              <div key={i} className="flex items-center justify-between p-2 hover:bg-surface-container-low rounded-2xl transition-colors cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${t.iconBg} rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform`}>
                    <img src={t.icon} alt={t.title} className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-body-lg text-body-lg font-bold">{t.title}</p>
                    <p className="text-secondary text-sm">{t.subtitle}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-headline-sm text-headline-sm ${t.isPositive ? 'text-[#10b981]' : 'text-on-background'}`}>{t.amount}</p>
                  <p className="text-[10px] text-secondary font-bold uppercase">{t.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default HistoryPage;
