import { useNavigate } from 'react-router-dom';
import DashboardIcon from '../assets/icons/dashboard/dashboard.svg';
import PaymentsIcon from '../assets/icons/dashboard/payments.svg';
import HistoryIcon from '../assets/icons/dashboard/history.svg';
import PersonIcon from '../assets/icons/dashboard/person.svg';
import LogoutIcon from '../assets/icons/dashboard/logout.svg';

const SideNavBar = ({ activePath }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const navItems = [
    { label: 'Dashboard', path: '/dashboard', icon: DashboardIcon },
    { label: 'Bayar', path: '/payment', icon: PaymentsIcon },
    { label: 'Riwayat', path: '/transaction', icon: HistoryIcon },
    { label: 'Profil', path: '/profile', icon: PersonIcon },
  ];

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
        {navItems.map(item => {
          const isActive = activePath === item.path || activePath.startsWith(item.path + '/');
          return (
            <a key={item.label} className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-xl transition-all duration-200 ease-in-out cursor-pointer ${isActive ? 'bg-primary-container text-on-primary-container' : 'text-secondary dark:text-secondary-fixed-dim hover:bg-surface-container-highest dark:hover:bg-inverse-surface'}`} onClick={() => navigate(item.path)}>
              <img src={item.icon} alt={item.label} className="w-6 h-6" />
              <span className="font-label-md text-label-md">{item.label}</span>
            </a>
          );
        })}
        <div className="pt-4 mt-4 border-t border-outline-variant/30">
          <a className="flex items-center gap-3 text-error px-4 py-3 mx-2 hover:bg-error-container/10 rounded-xl transition-all duration-200 ease-in-out cursor-pointer" onClick={handleLogout}>
            <img src={LogoutIcon} alt="Logout" className="w-6 h-6" />
            <span className="font-label-md text-label-md">Logout</span>
          </a>
        </div>
      </nav>
    </aside>
  );
};

export default SideNavBar;
