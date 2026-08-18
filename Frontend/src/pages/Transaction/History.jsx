import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTransactionHistory } from '../../services/transactionService';
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
import ProfileImage from "../../assets/image/profile.png";

const navItems = [
  { icon: DashboardIcon, label: 'Dashboard', path: '/dashboard' },
  { icon: PaymentsIcon, label: 'Bayar', path: '/payment' },
  { icon: HistoryIcon, label: 'History', path: '/transaction', active: true },
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

const TopNavBar = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const userName = user.fullName || "Budi Santoso";
  
  return (
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
          <p className="font-label-md text-label-md font-bold">{userName}</p>
          <p className="text-[10px] text-secondary">Verified Member</p>
        </div>
        <img className="w-10 h-10 rounded-full object-cover border-2 border-primary-container" alt={`Professional portrait of ${userName}`} src={ProfileImage} />
      </div>
    </div>
  </header>
  );
};



const HistoryPage = () => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTransactionHistory()
      .then(data => {
        setTransactions(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch transactions", err);
        setLoading(false);
      });
  }, []);

  const formatRp = (num) => new Intl.NumberFormat('id-ID').format(num);

  return (
  <div className="bg-background text-on-background min-h-screen flex overflow-x-hidden">
    <SideNavBar />
    <main className="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 pb-20 lg:pb-0">
      <TopNavBar />
      <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-6 max-w-7xl mx-auto w-full">
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
            {loading ? (
              <div className="text-center py-8 opacity-70">
                <p className="font-bold text-secondary">Memuat riwayat...</p>
              </div>
            ) : transactions.length === 0 ? (
              <div className="text-center py-8 opacity-70">
                <p className="font-bold text-secondary">(BELUM ADA RIWAYAT TRANSAKSI)</p>
              </div>
            ) : (
              transactions.map((tx, i) => {
                const isPositive = tx.type === 'TOP_UP';
                const icon = isPositive ? AddCardIcon : ShoppingCartIcon;
                const iconBg = isPositive ? 'bg-primary-container/10' : 'bg-secondary-container';
                const title = tx.type === 'TOP_UP' ? 'Top Up Saldo' : tx.merchantName || 'Pembayaran';
                const prefix = isPositive ? '+' : '-';
                
                const dateObj = new Date(tx.createdAt);
                const dateStr = dateObj.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });

                return (
                  <div key={tx.transactionId || i} className="flex items-center justify-between p-2 hover:bg-surface-container-low rounded-2xl transition-colors cursor-pointer group" onClick={() => navigate('/payment/struk')}>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${iconBg} rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform`}>
                        <img src={icon} alt={title} className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-body-lg text-body-lg font-bold">{title}</p>
                        <p className="text-secondary text-sm">{`${tx.type} • ${dateStr}`}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-headline-sm text-headline-sm ${isPositive ? 'text-[#10b981]' : 'text-on-background'}`}>{`${prefix}Rp ${formatRp(tx.amount)}`}</p>
                      <p className="text-[10px] text-secondary font-bold uppercase">{tx.status}</p>
                    </div>
                  </div>
                );
              })
            )}
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
  );
};

export default HistoryPage;
