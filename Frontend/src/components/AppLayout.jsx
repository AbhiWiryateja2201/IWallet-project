import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import SideNavBar from './SideNavBar';
import TopNavBar from './TopNavBar';
import DashboardIcon from '../assets/icons/dashboard/dashboard.svg';
import PaymentsIcon from '../assets/icons/dashboard/payments.svg';
import HistoryIcon from '../assets/icons/dashboard/history.svg';
import PersonIcon from '../assets/icons/dashboard/person.svg';

const bottomNavItems = [
  { icon: DashboardIcon, label: 'Dashboard', path: '/dashboard' },
  { icon: PaymentsIcon, label: 'Bayar', path: '/payment' },
  { icon: HistoryIcon, label: 'Riwayat', path: '/transaction' },
  { icon: PersonIcon, label: 'Profil', path: '/profile' },
];

const AppLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="bg-background text-on-background min-h-screen flex overflow-x-hidden">
      <SideNavBar activePath={location.pathname} />
      <main className="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 pb-20 lg:pb-0">
        <TopNavBar />
        <Outlet />
      </main>
      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-surface/95 backdrop-blur-xl border-t border-outline-variant/30 flex justify-around py-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))]">
        {bottomNavItems.map((item) => (
          <a key={item.label} className={`flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-xl cursor-pointer ${location.pathname.startsWith(item.path) ? 'text-primary' : 'text-secondary'}`} onClick={() => navigate(item.path)}>
            <img src={item.icon} alt={item.label} className="w-6 h-6" />
            <span className="text-[10px] font-medium">{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default AppLayout;
