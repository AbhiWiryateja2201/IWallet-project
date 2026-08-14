import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardIcon from "../../assets/icons/dashboard/dashboard.svg";
import PaymentsIcon from "../../assets/icons/dashboard/payments.svg";
import HistoryIcon from "../../assets/icons/dashboard/history.svg";
import PersonIcon from "../../assets/icons/dashboard/person.svg";
import LogoutIcon from "../../assets/icons/dashboard/logout.svg";
import SearchIcon from "../../assets/icons/dashboard/search.svg";
import NotificationsIcon from "../../assets/icons/dashboard/notifications.svg";
import AddCircleIcon from "../../assets/icons/dashboard/add_circle.svg";
import ProfileImage from "../../assets/image/profile.png";

const navItems = [
  { icon: DashboardIcon, label: 'Dashboard', path: '/dashboard' },
  { icon: PaymentsIcon, label: 'Bayar', path: '/payment' },
  { icon: HistoryIcon, label: 'History', path: '/transaction' },
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
          <a key={item.label} className="flex items-center gap-3 text-secondary dark:text-secondary-fixed-dim px-4 py-3 mx-2 hover:bg-surface-container-highest dark:hover:bg-inverse-surface rounded-xl transition-all duration-200 ease-in-out cursor-pointer" onClick={() => navigate(item.path)}>
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

const TopUpPage = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('BCA Virtual Account');
  const amounts = ['50.000', '100.000', '250.000', '500.000', '1.000.000'];
  const methods = ['BCA Virtual Account', 'Mandiri Virtual Account', 'OVO', 'GoPay', 'DANA', 'QRIS'];

  return (
    <div className="bg-background text-on-background min-h-screen flex">
      <SideNavBar />
      <main className="flex-1 ml-64 flex flex-col min-h-screen">
        <TopNavBar />
        <div className="p-block-padding flex flex-col gap-stack-gap max-w-7xl mx-auto w-full">
          <section className="mb-2">
            <h2 className="font-display-lg text-display-lg">Top Up Saldo</h2>
            <p className="font-body-md text-body-md text-secondary">Tambahkan saldo ke dompet digital Anda.</p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-gap items-start">
            <div className="bg-surface rounded-3xl p-8 premium-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-container/10 rounded-2xl flex items-center justify-center">
                  <img src={AddCircleIcon} alt="Top Up" className="w-6 h-6" />
                </div>
                <h4 className="font-headline-sm text-headline-sm">Nominal Top Up</h4>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {amounts.map((a) => (
                  <button
                    key={a}
                    type="button"
                    onClick={() => setAmount(a)}
                    className={`py-4 rounded-2xl font-bold border transition-all active:scale-95 ${
                      amount === a
                        ? 'bg-primary-container text-on-primary-container border-primary'
                        : 'bg-surface-container-low border-outline-variant/30 text-on-surface hover:bg-surface-container-highest'
                    }`}
                  >
                    Rp {a}
                  </button>
                ))}
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-4 flex items-center text-secondary font-bold">Rp</span>
                <input
                  className="w-full pl-12 pr-4 py-4 bg-surface-container border border-outline-variant/50 rounded-xl font-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                  placeholder="Masukkan nominal lainnya"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>

            <div className="bg-surface rounded-3xl p-8 premium-shadow">
              <h4 className="font-headline-sm text-headline-sm mb-6">Metode Pembayaran</h4>
              <div className="space-y-3">
                {methods.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMethod(m)}
                    className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl border transition-all active:scale-[0.98] ${
                      method === m
                        ? 'bg-primary-container/10 border-primary'
                        : 'bg-surface-container-low border-outline-variant/30 hover:bg-surface-container-highest'
                    }`}
                  >
                    <span className="font-label-md font-bold">{m}</span>
                    <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${method === m ? 'border-primary' : 'border-outline-variant'}`}>
                      {method === m && <span className="w-3 h-3 rounded-full bg-primary" />}
                    </span>
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => navigate('/topup')}
                className="w-full mt-8 py-4 rounded-2xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold shadow-lg shadow-primary/20 active:scale-[0.98] transition-all"
              >
                Lanjutkan Top Up
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TopUpPage;
