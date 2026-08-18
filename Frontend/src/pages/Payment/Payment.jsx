import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import DashboardIcon from "../../assets/icons/dashboard/dashboard.svg";
import PaymentsIcon from "../../assets/icons/dashboard/payments.svg";
import HistoryIcon from "../../assets/icons/dashboard/history.svg";
import PersonIcon from "../../assets/icons/dashboard/person.svg";
import LogoutIcon from "../../assets/icons/dashboard/logout.svg";
import SearchIcon from "../../assets/icons/dashboard/search.svg";
import NotificationsIcon from "../../assets/icons/dashboard/notifications.svg";

const cameraFeed = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRQgfGV5isjklFJHvDIR89vETpdJU9dOJ507RvfY4HDl54QRtaKWkHkoz68zrD_GD54WD7CF0dTcu1hrnoLQkV3KFeVeFPG5R2C_ummmJM6RSLrDcW6vBIQVCfJpUfbbRsLjjut7ZOmp6s2t4gNw_CRZKKMZMgHde7P0NmBIj3jjbq9KKGmGbFHFb2Q0eCo5P7uPPQlNF3KwL8h4We0H5BOTh2Two_JrDpylrK8nEnQnyvVPOhjgPR';
const avatar = '/Profile.png';

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
        <a className="flex items-center gap-3 text-secondary dark:text-secondary-fixed-dim px-4 py-3 mx-2 hover:bg-surface-container-highest dark:hover:bg-inverse-surface rounded-xl transition-all duration-200 ease-in-out cursor-pointer" onClick={() => navigate("/dashboard")}>
          <img src={DashboardIcon} alt="Dashboard" className="w-6 h-6" />
          <span className="font-label-md text-label-md">Dashboard</span>
        </a>
        <a className="flex items-center gap-3 bg-primary-container text-on-primary-container rounded-xl px-4 py-3 mx-2 transition-all duration-200 ease-in-out cursor-pointer" onClick={() => navigate("/payment")}>
          <img src={PaymentsIcon} alt="Bayar" className="w-6 h-6" />
          <span className="font-label-md text-label-md">Bayar</span>
        </a>
        <a className="flex items-center gap-3 text-secondary dark:text-secondary-fixed-dim px-4 py-3 mx-2 hover:bg-surface-container-highest dark:hover:bg-inverse-surface rounded-xl transition-all duration-200 ease-in-out cursor-pointer" onClick={() => navigate("/transaction")}>
          <img src={HistoryIcon} alt="History" className="w-6 h-6" />
          <span className="font-label-md text-label-md">History</span>
        </a>
        <a className="flex items-center gap-3 text-secondary dark:text-secondary-fixed-dim px-4 py-3 mx-2 hover:bg-surface-container-highest dark:hover:bg-inverse-surface rounded-xl transition-all duration-200 ease-in-out cursor-pointer" onClick={() => navigate("/profile")}>
          <img src={PersonIcon} alt="Profile" className="w-6 h-6" />
          <span className="font-label-md text-label-md">Profile</span>
        </a>
        <div className="pt-4 mt-4 border-t border-outline-variant/30">
          <a className="flex items-center gap-3 text-error px-4 py-3 mx-2 hover:bg-error-container/10 rounded-xl transition-all duration-200 ease-in-out cursor-pointer" onClick={() => navigate("/login")}>
            <img src={LogoutIcon} alt="Logout" className="w-6 h-6" />
            <span className="font-label-md text-label-md">Logout</span>
          </a>
        </div>
      </nav>
    </aside>
  );
};

const TopNavBar = () => (
  <header className="w-full h-16 sticky top-0 bg-surface/80 dark:bg-surface-container/80 backdrop-blur-md shadow-sm flex justify-between items-center px-4 md:px-6 z-40">
    <div className="flex items-center bg-surface-container-low dark:bg-surface-container-highest px-4 py-2 rounded-full w-full max-w-xs sm:max-w-sm lg:w-96">
      <img src={SearchIcon} alt="search" className="w-4 h-4 text-outline mr-2" />
      <input className="bg-transparent border-none focus:ring-0 text-body-md font-body-md w-full placeholder:text-outline-variant" placeholder="Cari transaksi atau fitur..." type="text" />
    </div>
    <div className="flex items-center gap-2 sm:gap-4">
      <button className="w-10 h-10 flex items-center justify-center text-on-secondary-container dark:text-outline-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors rounded-full active:scale-95 transition-transform">
        <img src={NotificationsIcon} alt="notifications" className="w-6 h-6" />
      </button>
      <div className="hidden md:flex items-center gap-3 pl-4 border-l border-outline-variant/30">
        <div className="text-right">
          <p className="font-label-md text-label-md font-bold">Budi Santoso</p>
          <p className="text-[10px] text-secondary">Verified Member</p>
        </div>
        <img className="w-10 h-10 rounded-full object-cover border-2 border-primary-container" alt="Professional portrait of Budi Santoso" src={avatar} />
      </div>
    </div>
  </header>
);

export default function Payment() {
  const navigate = useNavigate();
  const [merchantId, setMerchantId] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [cameraFacing, setCameraFacing] = useState("environment");
  const html5QrCodeRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!html5QrCodeRef.current) {
      html5QrCodeRef.current = new Html5Qrcode("qr-reader");
    }
    
    return () => {
      if (html5QrCodeRef.current?.isScanning) {
        html5QrCodeRef.current.stop().catch(console.error);
      }
    };
  }, []);

  const handleScanSuccess = (decodedText) => {
    try {
      const data = JSON.parse(decodedText);
      // Validate that all required fields are present
      if (data.merchantId && data.merchantName && typeof data.amount === 'number') {
        navigate('/payment/confirm', { state: { qrData: data } });
      } else {
        alert("Format QR tidak dikenali. Silakan pindai QR IWallet yang valid.");
      }
    } catch (e) {
      // If it's not valid JSON, reject it
      alert("Format QR tidak dikenali. Silakan pindai QR IWallet yang valid.");
    }
  };

  const startScan = async () => {
    if (html5QrCodeRef.current?.isScanning) {
      await html5QrCodeRef.current.stop();
      setIsScanning(false);
      return;
    }
    
    try {
      setIsScanning(true);
      // Wait for React to update the DOM so the qr-reader div is no longer display: none
      setTimeout(async () => {
        try {
          await html5QrCodeRef.current.start(
            { facingMode: cameraFacing },
            {
              fps: 10,
              qrbox: { width: 250, height: 250 }
            },
            (decodedText) => {
              html5QrCodeRef.current.stop().then(() => {
                setIsScanning(false);
                handleScanSuccess(decodedText);
              }).catch(console.error);
            },
            (error) => {
              // Ignore frequent scan errors
            }
          );
        } catch (err) {
          console.error(err);
          setIsScanning(false);
          alert("Gagal mengakses kamera.");
        }
      }, 100);
    } catch (err) {
      console.error(err);
      setIsScanning(false);
    }
  };

  const flipCamera = async () => {
    if (!isScanning) return;
    const newFacing = cameraFacing === "environment" ? "user" : "environment";
    setCameraFacing(newFacing);
    // Restart with new facing mode
    if (html5QrCodeRef.current?.isScanning) {
      await html5QrCodeRef.current.stop();
      setTimeout(async () => {
        try {
          await html5QrCodeRef.current.start(
            { facingMode: newFacing },
            { fps: 10, qrbox: { width: 250, height: 250 } },
            (decodedText) => {
              html5QrCodeRef.current.stop().then(() => {
                setIsScanning(false);
                handleScanSuccess(decodedText);
              }).catch(console.error);
            },
            () => {}
          );
        } catch (err) { console.error(err); }
      }, 300);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    try {
      if (!html5QrCodeRef.current) {
        html5QrCodeRef.current = new Html5Qrcode("qr-reader");
      }
      const decodedText = await html5QrCodeRef.current.scanFile(file, true);
      handleScanSuccess(decodedText);
    } catch (err) {
      alert("Tidak dapat membaca QR dari gambar ini.");
    }
    e.target.value = '';
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex font-['Inter',sans-serif]">
      <SideNavBar />
      <main className="flex-1 lg:ml-64 flex flex-col min-h-screen pb-20 lg:pb-0">
        <TopNavBar />
        
        <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-6 max-w-7xl mx-auto w-full">
          <div className="mb-2">
            <h1 className="font-display-sm text-display-sm text-on-background mb-1">Bayar - IWallet</h1>
            <p className="font-body-md text-body-md text-secondary">Pindai kode QR untuk pembayaran instan dan aman.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-8 bg-surface p-5 md:p-6 rounded-3xl premium-shadow flex flex-col gap-4">
              <div className="relative overflow-hidden aspect-video rounded-2xl bg-black/90 flex items-center justify-center">
                {!isScanning && (
                  <img className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 opacity-50" alt="Camera feed showing QR code" src={cameraFeed} />
                )}
                
                <div id="qr-reader" className="absolute inset-0 w-full h-full [&>video]:w-full [&>video]:h-full [&>video]:object-cover" style={{ display: isScanning ? 'block' : 'none', opacity: isScanning ? 1 : 0 }}></div>
                
                {isScanning && <div className="animate-scan w-full h-0.5 bg-primary absolute top-0 left-0 z-10 pointer-events-none" />}
                
                <div className="relative z-10 border-2 border-primary/60 w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-2xl flex items-center justify-center pointer-events-none">
                  <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-lg" />
                  <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-lg" />
                  <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-lg" />
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-lg" />
                  <span className={`material-symbols-outlined text-white/40 text-4xl sm:text-6xl ${isScanning ? 'animate-pulse' : ''}`}>qr_code_2</span>
                </div>
                
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-20">
                  <button type="button" onClick={flipCamera} className="bg-black/40 hover:bg-black/60 backdrop-blur-md text-white p-3 rounded-full transition-all active:scale-95" aria-label="Balik kamera">
                    <span className="material-symbols-outlined">flip_camera_ios</span>
                  </button>
                  <button type="button" onClick={startScan} className={`${isScanning ? 'bg-error text-white' : 'bg-primary text-on-primary'} hover:brightness-90 active:scale-95 p-3 rounded-full shadow-lg transition-all`} aria-label={isScanning ? "Berhenti" : "Ambil foto"}>
                    <span className="material-symbols-outlined">{isScanning ? 'stop_circle' : 'photo_camera'}</span>
                  </button>
                  <button type="button" className="bg-black/40 hover:bg-black/60 backdrop-blur-md text-white p-3 rounded-full transition-all active:scale-95" aria-label="Lampu kilat">
                    <span className="material-symbols-outlined">flash_on</span>
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-1 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">info</span>
                  <p className="font-body-sm text-body-sm text-secondary">Posisikan kode QR di dalam bingkai.</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Live Feed</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4 lg:sticky lg:top-24">
              <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleFileUpload} />
              <button type="button" onClick={() => fileInputRef.current?.click()} className="bg-surface p-6 w-full rounded-3xl premium-shadow text-left hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 group border border-outline-variant/20">
                <div className="h-12 w-12 bg-primary-container rounded-full flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">cloud_upload</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm mb-1">Upload QR from Gallery</h3>
                <p className="font-body-sm text-body-sm text-secondary">Gunakan gambar QR yang sudah tersimpan di file Anda.</p>
              </button>

              <div className="bg-surface p-6 rounded-3xl premium-shadow flex flex-col gap-4 border border-outline-variant/20">
                <div>
                  <h3 className="font-headline-sm text-headline-sm mb-1">Manual ID Input</h3>
                  <p className="font-body-sm text-body-sm text-secondary">Masukkan ID Merchant atau Nomor VA secara manual.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm font-bold text-secondary">ID MERCHANT / VA</label>
                  <div className="relative">
                    <input
                      className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-mono tracking-widest text-sm text-on-surface"
                      placeholder="e.g. 1234567890"
                      type="text"
                      value={merchantId}
                      onChange={(e) => setMerchantId(e.target.value)}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-primary material-symbols-outlined">edit</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    // Try parsing manual ID as JSON just in case they pasted the whole JSON
                    try {
                      const data = JSON.parse(merchantId);
                      if (data.merchantId) {
                        navigate('/payment/confirm', { state: { qrData: data } });
                        return;
                      }
                    } catch(e) {}
                    // Otherwise pass just the ID
                    navigate('/payment/confirm', { state: { qrData: { merchantId } } });
                  }}
                  className="w-full py-3 rounded-xl bg-primary text-on-primary font-bold shadow-md shadow-primary/20 hover:shadow-lg hover:scale-[1.01] active:scale-[0.98] transition-all"
                >
                  Proceed Payment
                </button>
              </div>

              <div className="p-6 rounded-3xl bg-primary-container/30 border border-primary/10">
                <h4 className="font-label-sm text-label-sm font-bold text-primary mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">verified_user</span>
                  KEAMANAN TRANSAKSI
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Pastikan nama merchant sesuai sebelum memasukkan PIN Anda. Semua transaksi IWallet dilindungi oleh enkripsi 256-bit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-surface/95 backdrop-blur-xl border-t border-outline-variant/30 flex justify-around py-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))]">
        {[
          { icon: DashboardIcon, label: 'Dashboard', path: '/dashboard' },
          { icon: PaymentsIcon, label: 'Bayar', path: '/payment', active: true },
          { icon: HistoryIcon, label: 'Riwayat', path: '/transaction' },
          { icon: PersonIcon, label: 'Profil', path: '/profile' },
        ].map((item) => (
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
}
