import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/authService";
import ProfileIcon from "../../assets/icons/register/Profile.svg";
import MailIcon from "../../assets/icons/register/mail.svg";
import CallIcon from "../../assets/icons/register/call.svg";
import LockIcon from "../../assets/icons/register/Lock.svg";
import EyeIcon from "../../assets/icons/register/Eye.svg";
import EyeOffIcon from "../../assets/icons/register/EyeOff.svg";
import HelpIcon from "../../assets/icons/register/help.svg";
import VerifiedUserIcon from "../../assets/icons/register/verified_user.svg";
import BoltIcon from "../../assets/icons/register/bolt.svg";
import RedeemIcon from "../../assets/icons/register/redeem.svg";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    pin: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!termsAccepted) {
      setMessage("Error: Anda harus menyetujui Syarat & Ketentuan");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("Error: Konfirmasi kata sandi tidak cocok");
      return;
    }

    if (formData.password.length < 8) {
      setMessage("Error: Kata sandi minimal 8 karakter");
      return;
    }

    if (formData.pin.length !== 6) {
      setMessage("Error: PIN harus 6 digit");
      return;
    }

    setLoading(true);
    try {
      await register({
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        pin: formData.pin,
      });
      setMessage("Registrasi berhasil! Mengalihkan ke halaman login...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen overflow-hidden bg-background selection:bg-primary-fixed selection:text-on-primary-fixed font-['Inter',sans-serif]">
      {/* Left Column - Branding */}
      <section className="hidden lg:flex lg:w-1/2 primary-gradient relative flex-col justify-between p-6 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-white/10 rounded-full -mr-64 -mt-64 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-primary-container/20 rounded-full -ml-32 -mb-32 blur-3xl" />

        {/* Nav */}
        <nav className="relative z-10 flex items-center gap-3">
          <img
            src="/Logo_App.png"
            alt="IWallet Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-[32px] leading-[40px] tracking-[-0.02em] font-bold text-white">IWallet</span>
        </nav>

        {/* Content */}
        <div className="relative z-10 max-w-lg mb-24">
          <h1 className="text-[32px] leading-[40px] tracking-[-0.02em] font-bold text-white mb-6">
            Bergabung dengan Masa Depan Keuangan
          </h1>
          <p className="text-[16px] leading-[24px] text-on-primary-container mb-10 opacity-90">
            Kelola uangmu dengan lebih cerdas, aman, dan tanpa batas. Platform
            finansial modern untuk gaya hidup digitalmu.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 glass-panel p-4 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-white">
                <img src={VerifiedUserIcon} alt="" className="w-5 h-5" />
              </div>
              <p className="text-[20px] leading-[28px] font-semibold text-white">
                Keamanan Tingkat Bank
              </p>
            </div>
            <div className="flex items-center gap-4 glass-panel p-4 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-white">
                <img src={BoltIcon} alt="" className="w-5 h-5" />
              </div>
              <p className="text-[20px] leading-[28px] font-semibold text-white">
                Transfer Real-time
              </p>
            </div>
            <div className="flex items-center gap-4 glass-panel p-4 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-white">
                <img src={RedeemIcon} alt="" className="w-5 h-5" />
              </div>
              <p className="text-[20px] leading-[28px] font-semibold text-white">
                Bebas Biaya Admin
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-xs font-bold text-secondary opacity-60 flex justify-center gap-4">
          <span>© 2026 IWallet Inc. All rights reserved.</span>
        </div>
      </section>

      {/* Right Column - Form */}
      <section className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 bg-surface">
        <div className="max-w-md w-full">
          {/* Mobile Branding */}
          <div className="flex lg:hidden items-center gap-3 mb-10">
            <img
              alt="IWallet Logo"
              className="w-8 h-8 object-contain"
              src="/Logo_App.png"
            />
            <span className="text-[24px] font-bold text-primary tracking-tight">
              IWallet
            </span>
          </div>

          {/* Header */}
          <div className="mb-10">
            <h2 className="text-[24px] leading-[32px] tracking-[-0.01em] font-semibold text-on-surface mb-2">
              Buat Akun Baru
            </h2>
            <p className="text-[14px] leading-[20px] text-on-surface-variant">
              Silakan isi data diri Anda untuk mendaftar.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Nama Lengkap */}
            <div className="space-y-2">
              <label className="text-[12px] leading-[16px] tracking-[0.01em] font-medium text-on-surface-variant ml-1">
                Nama Lengkap
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline group-focus-within:text-primary transition-colors">
                  <img src={ProfileIcon} alt="nama" className="w-4 h-4" />
                </div>
                <input
                  className="w-full pl-12 pr-4 py-3 bg-surface-container-low border-none rounded-xl text-[14px] leading-[20px] text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  name="fullName"
                  placeholder="Masukkan nama lengkap"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-[12px] leading-[16px] tracking-[0.01em] font-medium text-on-surface-variant ml-1">
                Email
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline group-focus-within:text-primary transition-colors">
                  <img src={MailIcon} alt="email" className="w-4 h-4" />
                </div>
                <input
                  className="w-full pl-12 pr-4 py-3 bg-surface-container-low border-none rounded-xl text-[14px] leading-[20px] text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  name="email"
                  placeholder="contoh@email.com"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Nomor Telepon */}
            <div className="space-y-2">
              <label className="text-[12px] leading-[16px] tracking-[0.01em] font-medium text-on-surface-variant ml-1">
                Nomor Telepon
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline group-focus-within:text-primary transition-colors">
                  <img src={CallIcon} alt="telepon" className="w-4 h-4" />
                </div>
                <input
                  className="w-full pl-12 pr-4 py-3 bg-surface-container-low border-none rounded-xl text-[14px] leading-[20px] text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  name="phoneNumber"
                  placeholder="0812xxxx"
                  type="tel"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Kata Sandi */}
            <div className="space-y-2">
              <label className="text-[12px] leading-[16px] tracking-[0.01em] font-medium text-on-surface-variant ml-1">
                Kata Sandi
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline group-focus-within:text-primary transition-colors">
                  <img src={LockIcon} alt="kata sandi" className="w-4 h-5" />
                </div>
                <input
                  className="w-full pl-12 pr-12 py-3 bg-surface-container-low border-none rounded-xl text-[14px] leading-[20px] text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  name="password"
                  placeholder="Minimal 8 karakter"
                  type={showPassword ? "text" : "password"}
                  minLength={8}
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-outline hover:text-primary transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                >
                  <img
                    src={showPassword ? EyeIcon : EyeOffIcon}
                    alt={showPassword ? "sembunyikan" : "tampilkan"}
                    className="w-4 h-4"
                  />
                </button>
              </div>
              <p className="text-[10px] leading-[12px] text-on-secondary-container mt-1 ml-1 flex items-center gap-1">
                <img src={HelpIcon} alt="info" className="w-3.5 h-3.5" />
                Minimal 8 karakter dengan kombinasi huruf dan angka
              </p>
            </div>

            {/* Konfirmasi Kata Sandi */}
            <div className="space-y-2">
              <label className="text-[12px] leading-[16px] tracking-[0.01em] font-medium text-on-surface-variant ml-1">
                Konfirmasi Kata Sandi
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline group-focus-within:text-primary transition-colors">
                  <img src={LockIcon} alt="kata sandi" className="w-4 h-5" />
                </div>
                <input
                  className="w-full pl-12 pr-12 py-3 bg-surface-container-low border-none rounded-xl text-[14px] leading-[20px] text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  name="confirmPassword"
                  placeholder="Ulangi kata sandi"
                  type={showConfirmPassword ? "text" : "password"}
                  minLength={8}
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <button
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-outline hover:text-primary transition-colors"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  type="button"
                >
                  <img
                    src={showConfirmPassword ? EyeIcon : EyeOffIcon}
                    alt={showConfirmPassword ? "sembunyikan" : "tampilkan"}
                    className="w-4 h-4"
                  />
                </button>
              </div>
            </div>

            {/* PIN Transaksi */}
            <div className="space-y-2">
              <label className="text-[12px] leading-[16px] tracking-[0.01em] font-medium text-on-surface-variant ml-1">
                PIN Transaksi (6 digit)
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline group-focus-within:text-primary transition-colors">
                  <img src={LockIcon} alt="pin" className="w-4 h-5" />
                </div>
                <input
                  className="w-full pl-12 pr-12 py-3 bg-surface-container-low border-none rounded-xl text-[14px] leading-[20px] text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  name="pin"
                  placeholder="Masukkan 6 digit PIN"
                  type={showPin ? "text" : "password"}
                  maxLength={6}
                  pattern="[0-9]{6}"
                  inputMode="numeric"
                  required
                  value={formData.pin}
                  onChange={handleChange}
                />
                <button
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-outline hover:text-primary transition-colors"
                  onClick={() => setShowPin(!showPin)}
                  type="button"
                >
                  <img
                    src={showPin ? EyeIcon : EyeOffIcon}
                    alt={showPin ? "sembunyikan" : "tampilkan"}
                    className="w-4 h-4"
                  />
                </button>
              </div>
            </div>

            {/* T&C Checkbox */}
            <div className="flex items-start gap-3 py-2">
              <div className="pt-0.5">
                <input
                  className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/20 transition-all cursor-pointer"
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
              </div>
              <label className="text-[14px] leading-[20px] text-on-surface-variant cursor-pointer select-none">
                Saya setuju dengan{" "}
                <a className="text-primary font-semibold hover:underline" href="#">
                  Syarat & Ketentuan
                </a>{" "}
                serta{" "}
                <a className="text-primary font-semibold hover:underline" href="#">
                  Kebijakan Privasi
                </a>{" "}
                IWallet.
              </label>
            </div>

            {/* Error/Success Message */}
            {message && (
              <div
                className={`p-4 rounded-xl text-center text-[14px] leading-[20px] ${
                  message.startsWith("Error")
                    ? "bg-error-container text-on-error-container"
                    : "bg-primary/10 text-primary"
                }`}
              >
                {message.replace(/^Error:\s*/, "")}
              </div>
            )}

            {/* CTA Button */}
            <button
              className="w-full primary-gradient py-4 rounded-xl text-white text-[20px] leading-[28px] font-semibold shadow-lg hover:shadow-primary/20 hover:scale-[1.01] active:scale-[0.98] transition-all duration-200 mt-4 disabled:opacity-70"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block" />
              ) : (
                "Daftar Sekarang"
              )}
            </button>

            {/* Secondary Link */}
            <p className="text-center text-[14px] leading-[20px] text-on-secondary-fixed-variant mt-8">
              Sudah punya akun?{" "}
              <a
                className="text-primary font-bold hover:underline cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Masuk
              </a>
            </p>
          </form>

          {/* Footer Links (Mobile) */}
          <div className="lg:hidden flex justify-center gap-3 mt-12 opacity-60 text-[12px] leading-[16px]">
            <a className="hover:text-primary transition-colors" href="#">
              Privacy Policy
            </a>
            <span className="text-outline-variant">•</span>
            <a className="hover:text-primary transition-colors" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}