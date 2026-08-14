import { useNavigate } from 'react-router-dom'
import DashboardIcon from "../../assets/icons/dashboard/dashboard.svg"
import PaymentsIcon from "../../assets/icons/dashboard/payments.svg"
import HistoryIcon from "../../assets/icons/dashboard/history.svg"
import PersonIcon from "../../assets/icons/dashboard/person.svg"
import LogoutIcon from "../../assets/icons/dashboard/logout.svg"
import SearchIcon from "../../assets/icons/dashboard/search.svg"
import NotificationsIcon from "../../assets/icons/dashboard/notifications.svg"
import cameraFeed from '../../assets/image/Payment/camera_feed.jpg'
import ProfileImage from '../../assets/image/profile.png'

const navItems = [
  { icon: DashboardIcon, label: 'Dashboard', path: '/dashboard' },
  { icon: PaymentsIcon, label: 'Bayar', path: '/payment', active: true },
  { icon: HistoryIcon, label: 'History', path: '/transaction' },
  { icon: PersonIcon, label: 'Profile', path: '/profile' },
]

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

const TopNavBar = () => (
  <header className="w-full h-16 sticky top-0 bg-surface/80 dark:bg-surface-container/80 backdrop-blur-md shadow-sm flex justify-between items-center px-container-margin z-40">
    <div className="flex items-center bg-surface-container-low dark:bg-surface-container-highest px-4 py-2 rounded-full w-96">
      <img src={SearchIcon} alt="search" className="w-4 h-4 text-outline mr-2" />
      <input className="bg-transparent border-none focus:ring-0 text-body-md font-body-md w-full placeholder:text-outline-variant" placeholder="Cari transaksi atau fitur..." type="text" />
    </div>
    <div className="flex items-center gap-4">
      <button className="w-10 h-10 flex items-center justify-center text-on-secondary-container dark:text-outline-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors rounded-full active:scale-95 transition-transform">
        <img src={NotificationsIcon} alt="notifications" className="w-6 h-6" />
      </button>
      <div className="flex items-center gap-3 pl-4 border-l border-outline-variant/30">
        <div className="text-right">
          <p className="font-label-md text-label-md font-bold">Budi Santoso</p>
          <p className="text-[10px] text-secondary">Verified Member</p>
        </div>
        <img className="w-10 h-10 rounded-full object-cover border-2 border-primary-container" alt="Professional portrait of Budi Santoso" src={ProfileImage} />
      </div>
    </div>
  </header>
);

export default function Payment() {
  const navigate = useNavigate()

  return (
    <div className="bg-background text-on-background min-h-screen flex overflow-x-hidden">
      <SideNavBar />
      <main className="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 pb-20 lg:pb-0">
        <TopNavBar />

        <div className="flex-1">
          <div className="max-w-7xl mx-auto w-full px-4 py-6 md:px-8 md:py-10">
            <div className="mb-6">
              <h1 className="text-2xl sm:text-[32px] leading-[40px] tracking-[-0.02em] font-bold text-primary">Bayar - IWallet (Desktop)</h1>
              <p className="text-secondary text-sm sm:text-base mt-1">Pindai kode QR untuk pembayaran instan dan aman.</p>
            </div>

            <div className="grid lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-8 bg-white p-5 md:p-6 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] ring-1 ring-[#CCC3D8]/10 flex flex-col gap-4">
                <div className="relative overflow-hidden aspect-video rounded-xl bg-black/90 flex items-center justify-center">
                  <img className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 opacity-50" alt="Camera feed showing QR code" src={cameraFeed} />
                  <div className="animate-scan w-full h-0.5 bg-[#630ED4] absolute top-0 left-0 z-10" />
                  <div className="relative z-10 border-2 border-[#630ED4]/60 w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-2xl flex items-center justify-center">
                    <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-[#630ED4] rounded-tl-lg" />
                    <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-[#630ED4] rounded-tr-lg" />
                    <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-[#630ED4] rounded-bl-lg" />
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-[#630ED4] rounded-br-lg" />
                    <span className="material-symbols-outlined text-white/40 text-4xl sm:text-6xl animate-pulse">qr_code_2</span>
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-10">
                    <button type="button" className="bg-black/40 hover:bg-black/60 backdrop-blur-md text-white p-3 rounded-full transition-all active:scale-95" aria-label="Balik kamera">
                      <span className="material-symbols-outlined">flip_camera_ios</span>
                    </button>
                    <button type="button" className="bg-gradient-to-br from-[#7C3AED] to-[#630ED4] hover:brightness-110 active:scale-95 text-white p-3 rounded-full shadow-lg transition-all" aria-label="Ambil foto">
                      <span className="material-symbols-outlined">photo_camera</span>
                    </button>
                    <button type="button" className="bg-black/40 hover:bg-black/60 backdrop-blur-md text-white p-3 rounded-full transition-all active:scale-95" aria-label="Lampu kilat">
                      <span className="material-symbols-outlined">flash_on</span>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-1 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#630ED4]">info</span>
                    <p className="text-sm text-[#4A4455]">Posisikan kode QR di dalam bingkai.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] uppercase tracking-wider text-[#4A4455] font-bold">Live Feed</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-4 lg:sticky lg:top-24">
                <button type="button" className="bg-white p-6 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] ring-1 ring-[#CCC3D8]/10 text-left hover:-translate-y-0.5 hover:shadow-lg hover:ring-[#7C3AED]/40 transition-all duration-200 group">
                  <div className="h-12 w-12 bg-[#630ED4]/10 rounded-full flex items-center justify-center text-[#630ED4] mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">cloud_upload</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Upload QR from Gallery</h3>
                  <p className="text-sm text-[#4A4455]">Gunakan gambar QR yang sudah tersimpan di file Anda.</p>
                </button>

                <div className="bg-white p-6 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] ring-1 ring-[#CCC3D8]/10 flex flex-col gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Manual ID Input</h3>
                    <p className="text-sm text-[#4A4455]">Masukkan ID Merchant atau Nomor VA secara manual.</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] tracking-[0.01em] font-bold text-[#4A4455]">ID MERCHANT / VA</label>
                    <div className="relative">
                      <input
                        className="w-full bg-[#F9F1FF] border border-[#CCC3D8]/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#630ED4] focus:border-transparent outline-none transition-all font-mono tracking-widest text-sm"
                        placeholder="e.g. 1234567890"
                        type="text"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#630ED4] material-symbols-outlined">edit</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => navigate('/payment/confirm')}
                    className="w-full py-3 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#630ED4] text-white font-bold hover:brightness-110 active:scale-[0.98] transition-all"
                  >
                    Proceed Payment
                  </button>
                </div>

                <div className="p-6 rounded-3xl bg-[#630ED4]/5 border border-[#630ED4]/10">
                  <h4 className="text-[12px] tracking-[0.01em] font-bold text-[#630ED4] mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">verified_user</span>
                    KEAMANAN TRANSAKSI
                  </h4>
                  <p className="text-[12px] leading-relaxed text-[#4A4455]">
                    Pastikan nama merchant sesuai sebelum memasukkan PIN Anda. Semua transaksi IWallet dilindungi oleh enkripsi 256-bit.
                  </p>
                </div>
              </div>
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
  )
}
