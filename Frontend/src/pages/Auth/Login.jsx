import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, register } from "../../services/authService";

export default function Login() {
  const navigate = useNavigate();
  const [isLoginView, setIsLoginView] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    pin: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      if (isLoginView) {
        const loggedUser = await login({
          email: formData.email,
          password: formData.password,
        });
        setUser(loggedUser);
        setMessage(`Selamat datang, ${loggedUser.fullName}!`);
      } else {
        await register({
          fullName: formData.fullName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          password: formData.password,
          pin: formData.pin,
        });
        setMessage("Registrasi berhasil! Silakan login.");
        setIsLoginView(true);
        setFormData({ fullName: "", email: "", password: "", phoneNumber: "", pin: "" });
      }
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (user) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center p-6 font-['Inter',sans-serif]">
        <div className="w-full max-w-md bg-surface-container-lowest rounded-3xl overflow-hidden shadow-[0_4px_40px_rgba(0,0,0,0.06)] border border-outline-variant/20 p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-4xl">person</span>
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface">Dashboard</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">Selamat datang kembali!</p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="bg-surface-container rounded-2xl p-4">
              <p className="font-label-md text-label-md text-on-surface-variant">Nama</p>
              <p className="font-body-lg text-body-lg text-on-surface mt-1">{user.fullName}</p>
            </div>
            <div className="bg-surface-container rounded-2xl p-4">
              <p className="font-label-md text-label-md text-on-surface-variant">Email</p>
              <p className="font-body-lg text-body-lg text-on-surface mt-1">{user.email}</p>
            </div>
            <div className="bg-surface-container rounded-2xl p-4">
              <p className="font-label-md text-label-md text-on-surface-variant">Saldo</p>
              <p className="font-headline-md text-headline-md text-primary mt-1">Rp 1.250.000</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <button className="bg-surface-container rounded-2xl p-4 flex flex-col items-center gap-2 hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-primary">send</span>
              <span className="font-label-md text-label-md text-on-surface">Kirim</span>
            </button>
            <button className="bg-surface-container rounded-2xl p-4 flex flex-col items-center gap-2 hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-primary">call_received</span>
              <span className="font-label-md text-label-md text-on-surface">Terima</span>
            </button>
            <button className="bg-surface-container rounded-2xl p-4 flex flex-col items-center gap-2 hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-primary">history</span>
              <span className="font-label-md text-label-md text-on-surface">Riwayat</span>
            </button>
          </div>

          <button
            onClick={() => setUser(null)}
            className="w-full py-4 rounded-2xl border border-outline-variant/50 font-headline-sm text-headline-sm text-on-surface hover:bg-surface-container transition-all"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen flex items-center justify-center p-6 selection:bg-primary-container selection:text-white font-['Inter',sans-serif]">
      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[0%] -right-[5%] w-[30%] h-[30%] bg-tertiary/5 rounded-full blur-[80px]" />
      </div>

      {/* Main Container */}
      <main className="w-full max-w-[1100px] grid md:grid-cols-2 bg-surface-container-lowest rounded-3xl overflow-hidden shadow-[0_4px_40px_rgba(0,0,0,0.06)] relative z-10 border border-outline-variant/20">
        
        {/* Left Panel - Branding */}
        <div className="hidden md:flex flex-col justify-center items-center p-12 bg-surface-container-low border-r border-outline-variant/30">
          <div className="w-full max-w-sm">
            <div className="mb-10">
              <img
                alt="IWallet Logo"
                className="h-20 mb-6 drop-shadow-xl"
                src="/Logo_App.png"
              />
              <h1 className="font-display-lg text-display-lg text-on-surface mb-2">
                IWALLET 
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Kelola keuangan Anda dengan lebih cepat, aman, dan tanpa
                hambatan. Bergabunglah dengan ribuan pengguna IWallet hari ini.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    security
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface text-sm mb-1">
                    Keamanan Berlapis
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Data dan transaksi Anda dilindungi dengan aman
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    speed
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface text-sm mb-1">
                    Transaksi Instant
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Kirim dan terima uang dalam hitungan detik ke seluruh dunia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="flex flex-col justify-center p-8 md:p-16 lg:p-20 bg-surface-container-lowest">
          <div className="w-full max-w-sm mx-auto">
            {/* Mobile Logo */}
            <div className="md:hidden flex justify-center mb-10">
              <img
                alt="IWallet Logo"
                className="h-16"
                src="/Logo_App.png"
              />
            </div>

            {/* Header */}
            <header className="mb-10">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                {isLoginView ? "Masuk ke IWallet" : "Daftar IWallet"}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                {isLoginView
                  ? "Silakan masukkan detail akun Anda"
                  : "Buat akun baru untuk memulai"}
              </p>
            </header>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Registration Fields */}
              {!isLoginView && (
                <>
                  <div className="space-y-2">
                    <label className="font-label-md text-label-md text-on-surface-variant ml-1" htmlFor="fullName">
                      Nama Lengkap
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-4 flex items-center text-outline group-focus-within:text-primary transition-colors">
                        <span className="material-symbols-outlined">badge</span>
                      </div>
                      <input
                        className="w-full pl-12 pr-4 py-4 bg-surface-container border border-outline-variant/50 rounded-2xl font-body-md text-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-on-surface"
                        id="fullName"
                        name="fullName"
                        placeholder="Masukkan nama lengkap"
                        required
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-label-md text-label-md text-on-surface-variant ml-1" htmlFor="phoneNumber">
                      Nomor Ponsel
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-4 flex items-center text-outline group-focus-within:text-primary transition-colors">
                        <span className="material-symbols-outlined">phone</span>
                      </div>
                      <input
                        className="w-full pl-12 pr-4 py-4 bg-surface-container border border-outline-variant/50 rounded-2xl font-body-md text-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-on-surface"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="0812..."
                        required
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Email Field */}
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant ml-1" htmlFor="email">
                  Email
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-4 flex items-center text-outline group-focus-within:text-primary transition-colors">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <input
                    className="w-full pl-12 pr-4 py-4 bg-surface-container border border-outline-variant/50 rounded-2xl font-body-md text-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-on-surface"
                    id="email"
                    name="email"
                    placeholder="nama@email.com"
                    required
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="password">
                    Kata Sandi
                  </label>
                  {isLoginView && (
                    <a className="font-label-md text-label-md text-primary hover:underline decoration-primary/30 underline-offset-4" href="#">
                      Lupa Kata Sandi?
                    </a>
                  )}
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-4 flex items-center text-outline group-focus-within:text-primary transition-colors">
                    <span className="material-symbols-outlined">lock</span>
                  </div>
                  <input
                    className="w-full pl-12 pr-12 py-4 bg-surface-container border border-outline-variant/50 rounded-2xl font-body-md text-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-on-surface"
                    id="password"
                    name="password"
                    placeholder={isLoginView ? "Min. 8 karakter" : "Buat kata sandi"}
                    required
                    type={showPassword ? "text" : "password"}
                    minLength={8}
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    className="absolute inset-y-0 right-4 flex items-center text-outline hover:text-on-surface-variant transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                    type="button"
                  >
                    <span className="material-symbols-outlined">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              {/* PIN Field (Registration Only) */}
              {!isLoginView && (
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface-variant ml-1" htmlFor="pin">
                    PIN Transaksi (6 digit)
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-4 flex items-center text-outline group-focus-within:text-primary transition-colors">
                      <span className="material-symbols-outlined">pin</span>
                    </div>
                    <input
                      className="w-full pl-12 pr-12 py-4 bg-surface-container border border-outline-variant/50 rounded-2xl font-body-md text-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-on-surface"
                      id="pin"
                      name="pin"
                      placeholder="Masukkan 6 digit PIN"
                      required
                      type={showPin ? "text" : "password"}
                      maxLength={6}
                      pattern="[0-9]{6}"
                      inputMode="numeric"
                      value={formData.pin}
                      onChange={handleChange}
                    />
                    <button
                      className="absolute inset-y-0 right-4 flex items-center text-outline hover:text-on-surface-variant transition-colors"
                      onClick={() => setShowPin(!showPin)}
                      type="button"
                    >
                      <span className="material-symbols-outlined">
                        {showPin ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {/* Remember Me (Login Only) */}
              {isLoginView && (
                <div className="flex items-center gap-2 px-1">
                  <input
                    className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20 bg-surface"
                    id="remember"
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  <label className="font-label-md text-label-md text-on-surface-variant cursor-pointer" htmlFor="remember">
                    Tetap masuk di perangkat ini
                  </label>
                </div>
              )}

              {/* Submit Button */}
              <button
                className="w-full primary-gradient text-white py-4 rounded-2xl font-headline-sm text-headline-sm shadow-lg shadow-primary/20 active:scale-[0.98] transition-all transform flex items-center justify-center gap-2 group disabled:opacity-70"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    {isLoginView ? "Masuk" : "Daftar"}
                    <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </>
                )}
              </button>
            </form>

            {/* Message */}
            {message && (
              <div className={`mt-6 p-4 rounded-2xl ${message.startsWith("Error") ? "bg-error-container text-on-error-container" : "bg-primary/10 text-primary"}`}>
                <p className="font-body-md text-body-md text-center">{message}</p>
              </div>
            )}

            {/* Toggle Login/Register */}
            <div className="mt-10 pt-10 border-t border-outline-variant/30 text-center">
              <p className="font-body-md text-body-md text-on-surface-variant">
                {isLoginView ? "Belum punya akun IWallet?" : "Sudah punya akun?"}{" "}
                <button
                  className="font-headline-sm text-label-md text-primary ml-1 hover:underline underline-offset-4 font-bold"
                  onClick={() => navigate("/register")}
                >
                  {isLoginView ? "Daftar Sekarang" : "Masuk"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-6 w-full text-center pointer-events-none z-10">
        <p className="font-label-sm text-label-sm text-outline opacity-50 px-4">
          © 2024 IWallet Digital. Semua hak cipta dilindungi. Berlisensi oleh
          OJK & Bank Indonesia.
        </p>
      </footer>
    </div>
  );
}