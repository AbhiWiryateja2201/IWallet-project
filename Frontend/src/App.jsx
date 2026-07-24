import { useState } from 'react';
import { register, login } from './services/authService';

function App() {
  const [isLoginView, setIsLoginView] = useState(true);
  const [formData, setFormData] = useState({ fullName: '', email: '', password: '', phoneNumber: '', pin: '' });
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      if (isLoginView) {
        const loggedUser = await login({ email: formData.email, password: formData.password });
        setUser(loggedUser);
        setMessage(`Selamat datang, ${loggedUser.fullName}!`);
      } else {
        await register(formData);
        setMessage('Registrasi berhasil! Silakan login.');
        setIsLoginView(true);
      }
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Aplikasi IWallet</h2>
      
      {user ? (
        <div>
          <h3>Dashboard</h3>
          <p>Selamat Datang, <strong>{user.fullName}</strong></p>
          <p>Email: {user.email}</p>
          <button onClick={() => setUser(null)}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3>{isLoginView ? 'Login' : 'Registrasi Akun Baru'}</h3>
          
          {!isLoginView && (
            <>
              <input type="text" name="fullName" placeholder="Nama Lengkap" onChange={handleChange} required style={{ display: 'block', margin: '10px 0', width: '100%' }} />
              <input type="text" name="phoneNumber" placeholder="Nomor Telepon" onChange={handleChange} required style={{ display: 'block', margin: '10px 0', width: '100%' }} />
              <input type="password" name="pin" placeholder="PIN Transaksi (6 digit)" onChange={handleChange} required style={{ display: 'block', margin: '10px 0', width: '100%' }} />
            </>
          )}

          <input type="email" name="email" placeholder="Email" onChange={handleChange} required style={{ display: 'block', margin: '10px 0', width: '100%' }} />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required style={{ display: 'block', margin: '10px 0', width: '100%' }} />

          <button type="submit" style={{ width: '100%', padding: '10px', marginTop: '10px' }}>
            {isLoginView ? 'Login' : 'Daftar'}
          </button>

          <p style={{ cursor: 'pointer', color: 'blue', marginTop: '15px' }} onClick={() => setIsLoginView(!isLoginView)}>
            {isLoginView ? 'Belum punya akun? Registrasi di sini' : 'Sudah punya akun? Login di sini'}
          </p>
        </form>
      )}

      {message && <p style={{ marginTop: '15px', color: message.startsWith('Error') ? 'red' : 'green' }}>{message}</p>}
    </div>
  );
}

export default App;