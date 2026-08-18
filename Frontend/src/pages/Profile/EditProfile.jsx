import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardIcon from "../../assets/icons/dashboard/dashboard.svg";
import PaymentsIcon from "../../assets/icons/dashboard/payments.svg";
import HistoryIcon from "../../assets/icons/dashboard/history.svg";
import PersonIcon from "../../assets/icons/dashboard/person.svg";
import LogoutIcon from "../../assets/icons/dashboard/logout.svg";
import SearchIcon from "../../assets/icons/dashboard/search.svg";
import NotificationsIcon from "../../assets/icons/dashboard/notifications.svg";
import ProfileImage from "../../assets/image/profile.png";

const navItems = [
  { icon: DashboardIcon, label: 'Dashboard', path: '/dashboard' },
  { icon: PaymentsIcon, label: 'Bayar', path: '/payment' },
  { icon: HistoryIcon, label: 'History', path: '/transaction' },
  { icon: PersonIcon, label: 'Profile', path: '/profile', active: true },
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
  <header className="w-full h-16 sticky top-0 bg-surface/80 dark:bg-surface-container/80 backdrop-blur-md shadow-sm flex justify-end items-center px-container-margin z-40">
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

const EditProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user') || '{}'));

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem('user', JSON.stringify(user));
    alert("Profil berhasil diperbarui!");
    navigate('/profile');
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex overflow-x-hidden">
      <SideNavBar />
      <main className="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 pb-20 lg:pb-0">
        <TopNavBar />
        <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-6 max-w-7xl mx-auto w-full">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h2 className="font-display-lg text-display-lg">Edit Profil</h2>
              <p className="font-body-md text-body-md text-secondary">Perbarui informasi data diri Anda.</p>
            </div>
            <button onClick={() => navigate('/profile')} className="px-4 py-2 rounded-full bg-surface-container-low text-secondary font-bold hover:brightness-95 active:scale-95 transition-all">
              Kembali
            </button>
          </div>

          <div className="bg-surface rounded-3xl p-8 premium-shadow max-w-3xl mx-auto w-full">
            <div className="flex flex-col items-center mb-8">
              <img className="w-24 h-24 rounded-full object-cover border-4 border-primary-container mb-4 cursor-pointer hover:opacity-80 transition-opacity" alt="Profile" src={ProfileImage} />
              <p className="text-xs font-bold text-primary cursor-pointer hover:underline">Ubah Foto Profil</p>
            </div>
            
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-secondary mb-1">Nama Lengkap</label>
                <input type="text" name="fullName" value={user.fullName || ''} onChange={handleChange} className="w-full p-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary outline-none font-body-lg" />
              </div>
              <div>
                <label className="block text-xs font-bold text-secondary mb-1">Email</label>
                <input type="email" name="email" value={user.email || ''} onChange={handleChange} className="w-full p-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary outline-none font-body-lg" />
              </div>
              <div>
                <label className="block text-xs font-bold text-secondary mb-1">Nomor Ponsel</label>
                <input type="text" name="phone" value={user.phone || ''} onChange={handleChange} className="w-full p-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary outline-none font-body-lg" />
              </div>
              <div>
                <label className="block text-xs font-bold text-secondary mb-1">Alamat</label>
                <textarea name="address" value={user.address || ''} onChange={handleChange} rows="3" className="w-full p-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary outline-none font-body-lg resize-none"></textarea>
              </div>
              <div>
                <label className="block text-xs font-bold text-secondary mb-1">Tanggal Lahir</label>
                <input type="text" name="dob" value={user.dob || ''} onChange={handleChange} placeholder="Misal: 15 Agustus 1995" className="w-full p-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary outline-none font-body-lg" />
              </div>
              
              <button type="button" onClick={handleSave} className="w-full mt-6 py-4 rounded-xl bg-primary text-on-primary font-bold shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-[0.98] transition-all">
                Simpan Perubahan
              </button>
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

export default EditProfilePage;
