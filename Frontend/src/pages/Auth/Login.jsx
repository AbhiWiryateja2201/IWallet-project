import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import LockIcon from "../../assets/icons/login/Lock.svg";
import ArrowIcon from "../../assets/icons/login/panah.svg";
import DefenceIcon from "../../assets/icons/login/defence.svg";
import KilatIcon from "../../assets/icons/login/kilat.svg";
import MailIcon from "../../assets/icons/login/mail.svg";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      await login({
        email: formData.email,
        password: formData.password,
      });
      navigate("/dashboard");
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background min-h-screen flex items-center justify-center p-6 selection:bg-primary-container selection:text-white font-['Inter',sans-serif]">
      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[0%] -right-[5%] w-[30%] h-[30%] bg-tertiary/5 rounded-full blur-[80px]" />
      </div>

      {/* Main Container */}
      <main className="w-full max-w-5xl grid md:grid-cols-2 bg-surface-container-lowest rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(243,232,255,1)] relative z-10 border border-outline-variant/20">
        
        {/* Left Panel - Branding */}
        <div className="hidden md:flex flex-col justify-center items-center p-16 primary-gradient border-r border-outline-variant/30">
          <div className="w-full max-w-sm">
            <div className="mb-10">
              <div className="w-16 h-16 bg-white shadow rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                <img
                  alt="IWallet Logo"
                  className="w-12 h-12 object-contain"
                  src="/Logo_App.png"
                />
              </div>
              <h1 className="text-[32px] leading-[40px] font-bold text-white mb-2">
                Dompet Digital
                <br />
                Simplified
              </h1>
              <p className="text-[16px] leading-[26px] text-on-primary-container opacity-90">
                Kelola keuangan Anda dengan lebih cepat, aman, dan tanpa
                hambatan. Bergabunglah dengan ribuan pengguna IWallet hari ini.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="relative w-10 h-10 rounded-full bg-primary-container/40 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <div className="absolute w-7 h-7 rounded-full bg-white flex items-center justify-center">
                    <img src={DefenceIcon} alt="keamanan" className="w-5 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-[16px] leading-[24px] font-semibold text-white mb-1">
                    Keamanan Berlapis
                  </h3>
                  <p className="text-[14px] leading-[20px] text-on-primary-container opacity-80">
                    Data dan transaksi Anda dilindungi dengan enkripsi tingkat bank.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="relative w-10 h-10 rounded-full bg-primary-container/40 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <div className="absolute w-7 h-7 rounded-full bg-white flex items-center justify-center">
                    <img src={KilatIcon} alt="transaksi" className="w-5 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-[16px] leading-[24px] font-semibold text-white mb-1">
                    Transaksi Instant
                  </h3>
                  <p className="text-[14px] leading-[20px] text-on-primary-container opacity-80">
                    Kirim dan terima uang dalam hitungan detik ke seluruh dunia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="flex flex-col justify-center p-8 md:p-16 bg-surface-container-lowest">
          <div className="w-full max-w-xs mx-auto">
            {/* Mobile Logo */}
            <div className="md:hidden flex justify-center mb-10">
              <div className="w-16 h-16 bg-primary-container rounded-2xl flex items-center justify-center overflow-hidden">
                <img alt="IWallet Logo" className="w-12 h-12 object-contain" src="/Logo_App.png" />
              </div>
            </div>

            {/* Header */}
            <header className="mb-10">
              <h2 className="text-[24px] leading-[32px] font-semibold text-on-surface">
                Masuk ke IWallet
              </h2>
              <p className="text-[14px] leading-[20px] text-on-surface-variant mt-1">
                Silakan masukkan detail akun Anda
              </p>
            </header>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-[12px] leading-[16px] tracking-[0.01em] font-medium text-on-surface-variant ml-1" htmlFor="email">
                  Email atau Nomor Ponsel
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-4 flex items-center text-outline group-focus-within:text-primary transition-colors">
                    <img src={MailIcon} alt="" className="w-5 h-5" />
                  </div>
                  <input
                    className="w-full max-w-full pl-12 pr-4 py-3 bg-surface-container border border-outline-variant/50 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-on-surface"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex items-center">
                  <label className="text-[12px] leading-[16px] tracking-[0.01em] font-medium text-on-surface-variant" htmlFor="password">
                    Kata Sandi
                  </label>
                  <a className="ml-auto text-[12px] leading-[16px] font-medium text-primary tracking-[0.12px] hover:underline decoration-primary/30 underline-offset-4 cursor-pointer">
                    Lupa Kata Sandi?
                  </a>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-4 flex items-center text-outline group-focus-within:text-primary transition-colors">
                    <img src={LockIcon} alt="lock" className="w-4 h-5 opacity-70" />
                  </div>
                  <input
                    className="w-full max-w-full pl-12 pr-4 py-3 bg-surface-container border border-outline-variant/50 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-on-surface"
                    id="password"
                    name="password"
                    placeholder="Min. 8 karakter"
                    required
                    type="password"
                    minLength={8}
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2 px-1">
                <input
                  className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20 bg-surface"
                  id="remember"
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <label className="text-[12px] leading-[16px] font-medium text-on-surface-variant cursor-pointer" htmlFor="remember">
                  Tetap masuk di perangkat ini
                </label>
              </div>

              {/* Submit Button */}
              <button
                className="w-full primary-gradient text-white py-4 rounded-xl text-base shadow-lg shadow-primary/20 active:scale-[0.98] transition-all transform flex items-center justify-center gap-2 group disabled:opacity-70"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Masuk
                    <img src={ArrowIcon} alt="arrow" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Message */}
            {message && (
              <div className="mt-6 p-4 rounded-xl bg-error-container text-on-error-container">
                <p className="text-sm text-center">{message}</p>
              </div>
            )}

            {/* Register Link */}
            <div className="mt-10 pt-10 border-t border-outline-variant/30 text-center">
              <p className="font-body-md text-body-md text-on-surface-variant">
                Belum punya akun IWallet?{" "}
                <button
                  className="text-[14px] leading-[20px] font-semibold text-primary ml-1 hover:underline underline-offset-4"
                  onClick={() => navigate("/register")}
                >
                  Daftar Sekarang
                </button>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-6 w-full text-center pointer-events-none z-10">
        <p className="font-label-sm text-label-sm text-outline opacity-50 px-4">
          © 2024 IWallet Digital. Berlisensi oleh OJK & Bank Indonesia.
        </p>
      </footer>
    </div>
  );
}
