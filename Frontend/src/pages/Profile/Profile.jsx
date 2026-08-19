import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUserProfile } from '../../services/userService';
import ProfileImage from "../../assets/image/profile.png";

const ProfilePage = () => {
  const navigate = useNavigate();
  const localUser = JSON.parse(localStorage.getItem('user') || '{}');
  const [user, setUser] = useState(localUser);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile();
        setUser(prev => ({ ...prev, ...data }));
        localStorage.setItem('user', JSON.stringify({ ...localUser, ...data }));
      } catch (error) {
        console.error('Failed to load profile from API', error);
      }
    };
    fetchProfile();
  }, []);

  const fields = [
    { label: 'Nama Lengkap', value: user.fullName || '-' },
    { label: 'Email', value: user.email || '-' },
    { label: 'Nomor Ponsel', value: user.phoneNumber || user.phone || '-' },    { label: 'Tipe Akun', value: user.status === 'ACTIVE' ? 'Verified Member' : 'Member' },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-6 max-w-7xl mx-auto w-full">
      <section className="mb-2">
        <h2 className="font-display-lg text-display-lg">Profil Saya</h2>
        <p className="font-body-md text-body-md text-secondary">Kelola informasi pribadi akun Anda.</p>
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="bg-surface rounded-3xl p-8 premium-shadow flex flex-col items-center text-center">
          <img className="w-24 h-24 rounded-full object-cover border-4 border-primary-container mb-4" alt="Profile" src={ProfileImage} />
          <h4 className="font-headline-sm text-headline-sm">{user.fullName || "User"}</h4>
          <p className="text-secondary text-sm">Verified Member</p>
          <span className="mt-4 px-4 py-1.5 rounded-full bg-primary-container/10 text-primary text-xs font-bold">ID: {user.publicId || 'IWL-XXXXX'}</span>
          <button onClick={() => navigate('/profile/edit')} type="button" className="w-full mt-6 py-3 rounded-2xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
            Edit Profil
          </button>
          <button onClick={() => navigate('/profile/security')} type="button" className="w-full mt-3 py-3 rounded-2xl bg-surface-container-low text-on-surface font-bold border border-outline-variant/30 hover:bg-surface-container-highest active:scale-[0.98] transition-all">
            Keamanan Akun
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
  );
};

export default ProfilePage;
