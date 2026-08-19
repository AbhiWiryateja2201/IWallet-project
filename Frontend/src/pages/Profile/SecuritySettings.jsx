import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { changePin, changePassword, deleteAccount } from '../../services/accountService';

const SecuritySettings = () => {
  const navigate = useNavigate();

  // States for Change PIN
  const [pinData, setPinData] = useState({ oldPin: '', newPin: '', confirmPin: '' });
  const [pinLoading, setPinLoading] = useState(false);
  const [pinMessage, setPinMessage] = useState(null);

  // States for Change Password
  const [pwdData, setPwdData] = useState({ oldPassword: '', newPassword: '', confirmPassword: '' });
  const [pwdLoading, setPwdLoading] = useState(false);
  const [pwdMessage, setPwdMessage] = useState(null);

  // States for Delete Account
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);

  const handlePinSubmit = async (e) => {
    e.preventDefault();
    if (pinData.newPin !== pinData.confirmPin) {
      setPinMessage({ type: 'error', text: 'Konfirmasi PIN baru tidak cocok' });
      return;
    }
    if (pinData.newPin.length !== 6) {
      setPinMessage({ type: 'error', text: 'PIN harus 6 digit' });
      return;
    }
    setPinLoading(true);
    setPinMessage(null);
    try {
      const res = await changePin(pinData.oldPin, pinData.newPin);
      setPinMessage({ type: 'success', text: res.message || 'PIN berhasil diubah' });
      setPinData({ oldPin: '', newPin: '', confirmPin: '' });
    } catch (err) {
      setPinMessage({ type: 'error', text: err.message });
    } finally {
      setPinLoading(false);
    }
  };

  const handlePwdSubmit = async (e) => {
    e.preventDefault();
    if (pwdData.newPassword !== pwdData.confirmPassword) {
      setPwdMessage({ type: 'error', text: 'Konfirmasi password baru tidak cocok' });
      return;
    }
    if (pwdData.newPassword.length < 6) {
      setPwdMessage({ type: 'error', text: 'Password minimal 6 karakter' });
      return;
    }
    setPwdLoading(true);
    setPwdMessage(null);
    try {
      const res = await changePassword(pwdData.oldPassword, pwdData.newPassword);
      setPwdMessage({ type: 'success', text: res.message || 'Password berhasil diubah' });
      setPwdData({ oldPassword: '', newPassword: '', confirmPassword: '' });
    } catch (err) {
      setPwdMessage({ type: 'error', text: err.message });
    } finally {
      setPwdLoading(false);
    }
  };

  const handleDeleteSubmit = async (e) => {
    e.preventDefault();
    if (!deletePassword) {
      setDeleteMessage({ type: 'error', text: 'Password diperlukan' });
      return;
    }
    setDeleteLoading(true);
    setDeleteMessage(null);
    try {
      await deleteAccount(deletePassword);
      localStorage.clear();
      navigate('/login');
    } catch (err) {
      setDeleteMessage({ type: 'error', text: err.message });
      setDeleteLoading(false);
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-6 max-w-7xl mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="font-display-lg text-display-lg">Pengaturan Keamanan</h1>
          <p className="font-body-md text-body-md text-secondary">Kelola keamanan akun Anda</p>
        </div>
        <button 
          onClick={() => navigate('/profile')}
          className="text-primary font-bold hover:underline"
        >
          Kembali ke Profil
        </button>
      </div>

      {/* Change PIN Section */}
      <div className="bg-surface rounded-3xl p-8 premium-shadow">
        <h2 className="font-headline-sm text-headline-sm mb-6">Ubah PIN</h2>
        {pinMessage && (
          <div className={`p-4 rounded-xl mb-4 text-sm font-bold ${pinMessage.type === 'error' ? 'bg-error/10 text-error' : 'bg-emerald-100 text-emerald-700'}`}>
            {pinMessage.text}
          </div>
        )}
        <form onSubmit={handlePinSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-bold text-secondary mb-1">PIN Lama</label>
            <input 
              type="password" maxLength="6" required
              className="w-full p-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary outline-none font-body-lg"
              value={pinData.oldPin} onChange={e => setPinData({...pinData, oldPin: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-secondary mb-1">PIN Baru (6 Digit)</label>
            <input 
              type="password" maxLength="6" required
              className="w-full p-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary outline-none font-body-lg"
              value={pinData.newPin} onChange={e => setPinData({...pinData, newPin: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-secondary mb-1">Konfirmasi PIN Baru</label>
            <input 
              type="password" maxLength="6" required
              className="w-full p-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary outline-none font-body-lg"
              value={pinData.confirmPin} onChange={e => setPinData({...pinData, confirmPin: e.target.value})}
            />
          </div>
          <button type="submit" disabled={pinLoading} className="w-full py-4 rounded-xl bg-primary text-on-primary font-bold shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-[0.98] transition-all mt-2">
            {pinLoading ? 'Menyimpan...' : 'Simpan PIN'}
          </button>
        </form>
      </div>

      {/* Change Password Section */}
      <div className="bg-surface rounded-3xl p-8 premium-shadow">
        <h2 className="font-headline-sm text-headline-sm mb-6">Ubah Password</h2>
        {pwdMessage && (
          <div className={`p-4 rounded-xl mb-4 text-sm font-bold ${pwdMessage.type === 'error' ? 'bg-error/10 text-error' : 'bg-emerald-100 text-emerald-700'}`}>
            {pwdMessage.text}
          </div>
        )}
        <form onSubmit={handlePwdSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-bold text-secondary mb-1">Password Lama</label>
            <input 
              type="password" required
              className="w-full p-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary outline-none font-body-lg"
              value={pwdData.oldPassword} onChange={e => setPwdData({...pwdData, oldPassword: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-secondary mb-1">Password Baru (Min. 6 Karakter)</label>
            <input 
              type="password" required minLength="6"
              className="w-full p-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary outline-none font-body-lg"
              value={pwdData.newPassword} onChange={e => setPwdData({...pwdData, newPassword: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-secondary mb-1">Konfirmasi Password Baru</label>
            <input 
              type="password" required minLength="6"
              className="w-full p-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary outline-none font-body-lg"
              value={pwdData.confirmPassword} onChange={e => setPwdData({...pwdData, confirmPassword: e.target.value})}
            />
          </div>
          <button type="submit" disabled={pwdLoading} className="w-full py-4 rounded-xl bg-primary text-on-primary font-bold shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-[0.98] transition-all mt-2">
            {pwdLoading ? 'Menyimpan...' : 'Simpan Password'}
          </button>
        </form>
      </div>

      {/* Delete Account Section */}
      <div className="bg-surface rounded-3xl p-8 premium-shadow">
        <h2 className="font-headline-sm text-headline-sm mb-6 text-error">Hapus Akun</h2>
        <p className="text-secondary mb-6 text-sm">Peringatan: Menghapus akun bersifat permanen dan semua data Anda akan hilang. Pastikan Anda telah menarik seluruh saldo sebelum melanjutkan.</p>
        <button 
          onClick={() => setShowDeleteModal(true)}
          className="w-full py-4 rounded-xl bg-error text-on-error font-bold shadow-lg active:scale-[0.98] transition-all"
        >
          Hapus Akun Permanen
        </button>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-surface rounded-3xl p-8 max-w-md w-full">
            <h2 className="font-headline-sm text-headline-sm mb-4 text-error">Konfirmasi Hapus Akun</h2>
            <p className="text-secondary mb-6 text-sm">Masukkan password Anda untuk mengonfirmasi penghapusan akun.</p>
            {deleteMessage && (
              <div className="p-4 rounded-xl mb-4 text-sm font-bold bg-error/10 text-error">
                {deleteMessage.text}
              </div>
            )}
            <form onSubmit={handleDeleteSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-bold text-secondary mb-1">Password</label>
                <input 
                  type="password" required
                  className="w-full p-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-error outline-none font-body-lg"
                  value={deletePassword} onChange={e => setDeletePassword(e.target.value)}
                />
              </div>
              <div className="flex gap-4 mt-4">
                <button 
                  type="button" 
                  onClick={() => setShowDeleteModal(false)}
                  disabled={deleteLoading}
                  className="w-full py-4 rounded-xl bg-surface-container-high text-on-surface font-bold hover:bg-surface-container-highest transition-colors"
                >
                  Batal
                </button>
                <button 
                  type="submit"
                  disabled={deleteLoading}
                  className="w-full py-4 rounded-xl bg-error text-on-error font-bold shadow-lg active:scale-[0.98] transition-all"
                >
                  {deleteLoading ? 'Menghapus...' : 'Ya, Hapus'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default SecuritySettings;
