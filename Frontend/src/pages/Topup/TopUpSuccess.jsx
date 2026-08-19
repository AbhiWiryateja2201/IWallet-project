import { useNavigate, useLocation } from 'react-router-dom';

export default function TopUpSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const amount = location.state?.amount || 0;
  const method = location.state?.method || 'Transfer Bank / Virtual Account';
  const transactionId = location.state?.transactionData?.transactionId || `TUP-${Math.floor(Math.random() * 1000000)}-IWL`;

  return (
    <div className="flex-1 flex flex-col items-center px-4 py-10">
      <div className="w-full max-w-[512px]">
        <div className="bg-surface rounded-t-3xl premium-shadow p-8 flex flex-col gap-8">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-4 shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined text-white text-[40px]">check</span>
            </div>
            <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface mb-1">Top Up Berhasil</h2>
            <p className="text-center font-body-sm text-body-sm text-secondary">Saldo dompet digital Anda telah bertambah</p>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-6 flex flex-col items-center border border-outline-variant/20">
            <p className="font-label-sm text-label-sm font-medium text-secondary mb-1">Total Top Up</p>
            <p className="font-display-sm text-[32px] leading-10 font-extrabold text-primary">
              Rp {new Intl.NumberFormat('id-ID').format(amount)}
            </p>
          </div>
          <div className="pt-4 flex flex-col gap-5">
            <div>
              <p className="font-label-sm text-[10px] font-semibold uppercase tracking-wider text-secondary mb-1">Metode</p>
              <p className="font-body-sm text-sm font-semibold">{method}</p>
            </div>
            <div>
              <p className="font-label-sm text-[10px] font-semibold uppercase tracking-wider text-secondary mb-1">ID Transaksi</p>
              <div className="flex items-center justify-between bg-surface-container-lowest rounded-lg px-3 py-2 ring-1 ring-outline-variant/30">
                <span className="text-xs font-mono text-secondary">{transactionId}</span>
                <span className="material-symbols-outlined text-primary text-sm cursor-pointer hover:opacity-70">content_copy</span>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-outline-variant/30 text-center">
            <p className="font-body-sm text-[10px] italic font-semibold text-outline">Terima kasih telah menggunakan IWallet untuk transaksi harian Anda.</p>
          </div>
        </div>
        <div className="mt-4">
          <button type="button" onClick={() => navigate('/dashboard')} className="w-full py-4 rounded-2xl bg-primary text-on-primary font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:brightness-110 active:scale-[0.98] transition-all">
            <span className="material-symbols-outlined">home</span>
            Kembali ke Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}
