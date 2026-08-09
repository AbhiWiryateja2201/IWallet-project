import { useNavigate } from 'react-router-dom';
import DashboardIcon from "../../assets/icons/dashboard/dashboard.svg";
import PaymentsIcon from "../../assets/icons/dashboard/payments.svg";
import HistoryIcon from "../../assets/icons/dashboard/history.svg";
import PersonIcon from "../../assets/icons/dashboard/person.svg";
import LogoutIcon from "../../assets/icons/dashboard/logout.svg";
import SearchIcon from "../../assets/icons/dashboard/search.svg";
import NotificationsIcon from "../../assets/icons/dashboard/notifications.svg";

const navItems = [
  { icon: DashboardIcon, label: 'Dashboard', path: '/dashboard' },
  { icon: PaymentsIcon, label: 'Bayar', path: '/payment' },
  { icon: HistoryIcon, label: 'History', path: '/transaction' },
  { icon: PersonIcon, label: 'Profile', path: '/profile', active: true },
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

const fields = [
  { label: 'Nama Lengkap', value: 'Budi Santoso' },
  { label: 'Email', value: 'budi.santoso@email.com' },
  { label: 'Nomor Ponsel', value: '+62 812-3456-7890' },
  { label: 'Alamat', value: 'Jl. Merdeka No. 45, Jakarta' },
  { label: 'Tanggal Lahir', value: '15 Agustus 1995' },
  { label: 'Tipe Akun', value: 'Verified Member' },
];

const ProfilePage = () => (
  <div className="bg-background text-on-background min-h-screen flex">
    <SideNavBar />
    <main className="flex-1 ml-64 flex flex-col min-h-screen">
      <TopNavBar />
      <div className="p-block-padding flex flex-col gap-stack-gap max-w-7xl mx-auto w-full">
        <section className="mb-2">
          <h2 className="font-display-lg text-display-lg">Profil Saya</h2>
          <p className="font-body-md text-body-md text-secondary">Kelola informasi pribadi akun Anda.</p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-stack-gap items-start">
          <div className="bg-surface rounded-3xl p-8 premium-shadow flex flex-col items-center text-center">
            <img className="w-24 h-24 rounded-full object-cover border-4 border-primary-container mb-4" alt="Professional portrait of Budi Santoso" src="/Profile.png" />
            <h4 className="font-headline-sm text-headline-sm">Budi Santoso</h4>
            <p className="text-secondary text-sm">Verified Member</p>
            <span className="mt-4 px-4 py-1.5 rounded-full bg-primary-container/10 text-primary text-xs font-bold">ID: IWL-88901</span>
            <button type="button" className="w-full mt-8 py-3 rounded-2xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold shadow-lg shadow-primary/20 active:scale-[0.98] transition-all">
              Edit Profil
            </button>
          </div>

          <div className="lg:col-span-2 bg-surface rounded-3xl p-8 premium-shadow">
            <h4 className="font-headline-md text-headline-md mb-6">Informasi Pribadi</h4>
            <div className="grid sm:grid-cols-2 gap-6">
              {fields.map((f) => (
                <div key={f.label} className="p-5 rounded-2xl bg-surface-container-low">
                  <p className="text-xs font-bold uppercase tracking-wider text-secondary mb-1">{f.label}</p>
                  <p className="font-body-lg font-bold">{f.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default ProfilePage;
