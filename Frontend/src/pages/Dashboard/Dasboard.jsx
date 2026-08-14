import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardIcon from "../../assets/icons/dashboard/dashboard.svg";
import PaymentsIcon from "../../assets/icons/dashboard/payments.svg";
import PaymentsWhiteIcon from "../../assets/icons/dashboard/payments_white.svg";
import HistoryIcon from "../../assets/icons/dashboard/history.svg";
import HistoryWhiteIcon from "../../assets/icons/dashboard/history_white.svg";
import PersonIcon from "../../assets/icons/dashboard/person.svg";
import LogoutIcon from "../../assets/icons/dashboard/logout.svg";
import SearchIcon from "../../assets/icons/dashboard/search.svg";
import NotificationsIcon from "../../assets/icons/dashboard/notifications.svg";
import VisibilityIcon from "../../assets/icons/dashboard/visibility.svg";
import VisibilityOffIcon from "../../assets/icons/dashboard/visibility_off.svg";
import AddCircleIcon from "../../assets/icons/dashboard/add_circle.svg";
import CallReceivedIcon from "../../assets/icons/dashboard/call_received.svg";
import ElectricBoltIcon from "../../assets/icons/dashboard/electric_bolt.svg";
import AddCardIcon from "../../assets/icons/dashboard/add_card.svg";
import ShoppingCartIcon from "../../assets/icons/dashboard/shopping_cart.svg";
import ArrowUpwardIcon from "../../assets/icons/dashboard/arrow_upward.svg";
import ProfileImage from "../../assets/image/profile.png";

const SideNavBar = () => {
  const navigate = useNavigate();
  return (
  <aside className="hidden lg:flex fixed left-0 top-0 h-full w-64 bg-surface dark:bg-surface-container-low flex-col py-6 md:py-8 gap-6 z-50 border-r border-outline-variant/30 shadow-md">
    <div className="px-6 mb-8">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center">
          <img
            src="/Logo_App.png"
            alt="IWallet Logo"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div>
          <h1 className="font-headline-sm text-headline-sm font-black text-primary dark:text-primary-fixed">IWallet</h1>
          <p className="font-label-md text-label-md text-secondary opacity-70">Premium Finance</p>
        </div>
      </div>
    </div>
    <nav className="flex-1 px-2 space-y-1">
      <a className="flex items-center gap-3 bg-primary-container text-on-primary-container rounded-xl px-4 py-3 mx-2 transition-all duration-200 ease-in-out cursor-pointer" onClick={() => navigate("/dashboard")}>
        <img src={DashboardIcon} alt="Dashboard" className="w-6 h-6" />
        <span className="font-label-md text-label-md">Dashboard</span>
      </a>
      <a className="flex items-center gap-3 text-secondary dark:text-secondary-fixed-dim px-4 py-3 mx-2 hover:bg-surface-container-highest dark:hover:bg-inverse-surface rounded-xl transition-all duration-200 ease-in-out cursor-pointer" onClick={() => navigate("/payment")}>
        <img src={PaymentsIcon} alt="Bayar" className="w-6 h-6" />
        <span className="font-label-md text-label-md">Bayar</span>
      </a>
      <a className="flex items-center gap-3 text-secondary dark:text-secondary-fixed-dim px-4 py-3 mx-2 hover:bg-surface-container-highest dark:hover:bg-inverse-surface rounded-xl transition-all duration-200 ease-in-out cursor-pointer" onClick={() => navigate("/transaction")}>
        <img src={HistoryIcon} alt="History" className="w-6 h-6" />
        <span className="font-label-md text-label-md">History</span>
      </a>
      <a className="flex items-center gap-3 text-secondary dark:text-secondary-fixed-dim px-4 py-3 mx-2 hover:bg-surface-container-highest dark:hover:bg-inverse-surface rounded-xl transition-all duration-200 ease-in-out cursor-pointer" onClick={() => navigate("/profile")}>
        <img src={PersonIcon} alt="Profile" className="w-6 h-6" />
        <span className="font-label-md text-label-md">Profile</span>
      </a>
      <div className="pt-4 mt-4 border-t border-outline-variant/30">
        <a className="flex items-center gap-3 text-error px-4 py-3 mx-2 hover:bg-error-container/10 rounded-xl transition-all duration-200 ease-in-out cursor-pointer" onClick={() => navigate("/login")}>
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
      <input
        className="bg-transparent border-none focus:ring-0 text-body-md font-body-md w-full placeholder:text-outline-variant"
        placeholder="Cari transaksi atau fitur..."
        type="text"
      />
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
        <img
          className="w-10 h-10 rounded-full object-cover border-2 border-primary-container"
          alt="Professional portrait of Budi Santoso"
          src={ProfileImage}
        />
      </div>
    </div>
  </header>
);

const BalanceCard = () => {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-container rounded-3xl p-6 md:p-8 text-on-primary shadow-lg group lg:col-span-3">
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="font-label-md text-label-md uppercase tracking-widest opacity-80 mb-1">Saldo Anda</p>
            <div className="flex items-center gap-3">
              <h3 className="font-display-lg text-3xl sm:text-4xl md:text-[40px] leading-none font-black">
                {visible ? 'Rp 1.250.000' : 'Rp ••••••••'}
              </h3>
              <button className="bg-transparent border-none p-0 cursor-pointer transition-opacity opacity-80 hover:opacity-100" onClick={() => setVisible(!visible)}>
                <img src={visible ? VisibilityIcon : VisibilityOffIcon} alt={visible ? "sembunyikan saldo" : "tampilkan saldo"} className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-2 sm:gap-4">
          <button onClick={() => navigate("/topup")} className="flex-1 bg-white text-primary font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-xl active:scale-95 transition-all whitespace-nowrap">
            <img src={AddCircleIcon} alt="Top Up" className="w-6 h-6 shrink-0" />
            Top Up
          </button>
          <button onClick={() => navigate("/payment")} className="flex-1 bg-white/20 backdrop-blur-md text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 border border-white/20 hover:bg-white/30 active:scale-95 transition-all whitespace-nowrap">
            <img src={PaymentsWhiteIcon} alt="Bayar" className="w-6 h-6 shrink-0" />
            Bayar
          </button>
          <button onClick={() => navigate("/transaction")} className="flex-1 bg-white/20 backdrop-blur-md text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 border border-white/20 hover:bg-white/30 active:scale-95 transition-all whitespace-nowrap">
            <img src={HistoryWhiteIcon} alt="Riwayat" className="w-6 h-6 shrink-0" />
            Riwayat
          </button>
        </div>
      </div>
    </div>
  );
};

const TransactionItem = ({ icon, iconBg, title, subtitle, amount, isPositive, status }) => (
  <div className="flex items-center justify-between p-2 hover:bg-surface-container-low rounded-2xl transition-colors cursor-pointer group">
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 ${iconBg} rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform`}>
        <img src={icon} alt={title} className="w-6 h-6" />
      </div>
      <div>
        <p className="font-body-lg text-body-lg font-bold">{title}</p>
        <p className="text-secondary text-sm">{subtitle}</p>
      </div>
    </div>
    <div className="text-right">
      <p className={`font-headline-sm text-headline-sm ${isPositive ? 'text-[#10b981]' : 'text-on-background'}`}>{amount}</p>
      <p className="text-[10px] text-secondary font-bold uppercase">{status}</p>
    </div>
  </div>
);

const TransactionsList = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const items = el.querySelectorAll('.transaction-item');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );
    items.forEach((item, i) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = `all 0.4s ease-out ${i * 0.1}s`;
      observer.observe(item);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="lg:col-span-2 bg-surface rounded-3xl p-8 premium-shadow">
      <div className="flex justify-between items-center mb-8">
        <h4 className="font-headline-md text-headline-md">Ringkasan Aktivitas</h4>
        <a className="text-primary font-bold text-sm hover:underline cursor-pointer" onClick={() => navigate("/transaction")}>Lihat Semua</a>
      </div>
      <div className="space-y-6" ref={sectionRef}>
        <div className="transaction-item">
          <TransactionItem icon={CallReceivedIcon} iconBg="bg-primary-container/10" title="Transfer Masuk" subtitle="Dari Andi • 10:45 AM" amount="+Rp 200.000" isPositive={true} status="Berhasil" />
        </div>
        <div className="transaction-item">
          <TransactionItem icon={ElectricBoltIcon} iconBg="bg-secondary-container" title="PLN Token Listrik" subtitle="Pembayaran • 09:12 AM" amount="-Rp 50.500" isPositive={false} status="Berhasil" />
        </div>
        <div className="transaction-item">
          <TransactionItem icon={AddCardIcon} iconBg="bg-primary-container/10" title="Top Up via BCA" subtitle="Virtual Account • Kemarin" amount="+Rp 500.000" isPositive={true} status="Berhasil" />
        </div>
        <div className="transaction-item">
          <TransactionItem icon={ShoppingCartIcon} iconBg="bg-secondary-container" title="Indomaret Belanja Harian" subtitle="Merchant Payment • Kemarin" amount="-Rp 125.000" isPositive={false} status="Berhasil" />
        </div>
      </div>
    </div>
  );
};

const MonthlySpending = () => (
  <div className="bg-surface rounded-3xl p-6 premium-shadow">
    <h4 className="font-headline-sm text-headline-sm mb-4">Pengeluaran Bulan Ini</h4>
    <div className="flex items-end gap-2 mb-2">
      <span className="text-3xl font-black">Rp 2.450.000</span>
      <span className="text-error text-xs font-bold mb-1 flex items-center">
        <img src={ArrowUpwardIcon} alt="naik" className="w-3.5 h-3.5" /> 12%
      </span>
    </div>
    <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
      <div className="bg-primary h-full w-[65%]"></div>
    </div>
    <p className="text-[10px] text-secondary mt-2">65% dari budget bulanan kamu terpakai.</p>
  </div>
);

const IWalletDashboard = () => (
  <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-6 max-w-7xl mx-auto w-full">
    <section className="mb-2">
      <h2 className="font-display-lg text-display-lg">Halo, Budi</h2>
      <p className="font-body-md text-body-md text-secondary">Selamat datang kembali! Mari kelola keuanganmu hari ini.</p>
    </section>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <BalanceCard />
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
      <TransactionsList />
      <div className="space-y-6 min-w-0">
        <MonthlySpending />
      </div>
    </div>
  </div>
);

const IWallet = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-background text-on-background min-h-screen flex overflow-x-hidden">
      <SideNavBar />
      <main className="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 pb-20 lg:pb-0">
        <TopNavBar />
        <IWalletDashboard />
      </main>
      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-surface/95 backdrop-blur-xl border-t border-outline-variant/30 flex justify-around py-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))]">
        {[
          { icon: DashboardIcon, label: 'Dashboard', path: '/dashboard', active: true },
          { icon: PaymentsIcon, label: 'Bayar', path: '/payment' },
          { icon: HistoryIcon, label: 'Riwayat', path: '/transaction' },
          { icon: PersonIcon, label: 'Profil', path: '/profile' },
        ].map((item) => (
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

export default IWallet;