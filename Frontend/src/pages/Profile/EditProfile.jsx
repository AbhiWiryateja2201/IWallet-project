import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateUserProfile } from '../../services/userService';
import ProfileImage from "../../assets/image/profile.png";

const EditProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user') || '{}'));

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

    const handleSave = async () => {
    try {
      const response = await updateUserProfile(user);
      localStorage.setItem('user', JSON.stringify({ ...user, ...response }));
      alert("Profil berhasil diperbarui!");
      navigate('/profile');
    } catch (err) {
      alert(err.message || "Terjadi kesalahan saat menyimpan profil");
    }
  };

  return (
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
          
          
          <button type="button" onClick={handleSave} className="w-full mt-6 py-4 rounded-xl bg-primary text-on-primary font-bold shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-[0.98] transition-all">
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
