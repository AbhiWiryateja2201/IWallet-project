import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

const cameraFeed = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRQgfGV5isjklFJHvDIR89vETpdJU9dOJ507RvfY4HDl54QRtaKWkHkoz68zrD_GD54WD7CF0dTcu1hrnoLQkV3KFeVeFPG5R2C_ummmJM6RSLrDcW6vBIQVCfJpUfbbRsLjjut7ZOmp6s2t4gNw_CRZKKMZMgHde7P0NmBIj3jjbq9KKGmGbFHFb2Q0eCo5P7uPPQlNF3KwL8h4We0H5BOTh2Two_JrDpylrK8nEnQnyvVPOhjgPR';

export default function Payment() {
  const navigate = useNavigate();
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
      if (data.merchantId && data.merchantName && typeof data.amount === 'number') {
        navigate('/payment/confirm', { state: { qrData: data } });
      } else {
        alert("Format QR tidak dikenali. Silakan pindai QR IWallet yang valid.");
      }
    } catch (e) {
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
      setTimeout(async () => {
        try {
          await html5QrCodeRef.current.start(
            { facingMode: cameraFacing },
            { fps: 10, qrbox: { width: 250, height: 250 } },
            (decodedText) => {
              html5QrCodeRef.current.stop().then(() => {
                setIsScanning(false);
                handleScanSuccess(decodedText);
              }).catch(console.error);
            },
            (error) => {}
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
  );
}
