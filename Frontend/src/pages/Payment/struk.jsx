import { useNavigate, useLocation } from 'react-router-dom'

export default function Struk() {
  const navigate = useNavigate()
  const location = useLocation()
  const qrData = location.state?.qrData || {}
  const successData = location.state?.successData?.data || {}
  const merchantName = qrData.merchantName
  const amount = qrData.amount
  const transactionId = successData.publicId || `TRX-${Date.now()}`
  const formatRp = (num) => new Intl.NumberFormat('id-ID').format(num)
  const dateStr = new Date().toLocaleString('id-ID', { dateStyle: 'long', timeStyle: 'short' }).replace('.', ':') + ' WIB'

  return (
    <div className="flex-1 flex flex-col items-center px-4 py-10">
      <div className="w-full max-w-[512px]">
        <div className="bg-white rounded-t-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-8 flex flex-col gap-8">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-white text-[40px]">check</span>
            </div>
            <h2 className="text-2xl font-semibold text-on-background mb-1">Pembayaran Berhasil</h2>
            <p className="text-center text-sm text-secondary">Transaksi Anda telah diproses dengan aman</p>
          </div>
          <div className="flex items-center justify-between py-4 border-b border-outline-variant">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-surface-variant flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">storefront</span>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-secondary">Merchant</p>
                <p className="text-lg font-semibold truncate">{merchantName}</p>
              </div>
            </div>
            <div className="text-right shrink-0 ml-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-secondary mb-1">Status</p>
              <span className="inline-flex px-3 py-1 rounded-full text-primary text-xs font-bold bg-primary/10">Success</span>
            </div>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-6 flex flex-col items-center">
            <p className="text-xs font-medium text-secondary mb-1">Total Pembayaran</p>
            <p className="text-[32px] leading-10 font-extrabold text-primary">Rp {formatRp(amount)}</p>
          </div>
          <div className="pt-4 flex flex-col gap-5">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-secondary mb-1">Tanggal &amp; Waktu</p>
              <p className="text-sm font-semibold">{dateStr}</p>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-secondary mb-1">Metode Pembayaran</p>
                <p className="text-sm font-semibold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">account_balance_wallet</span>
                  IWallet Balance
                </p>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-secondary mb-1">ID Transaksi</p>
              <div className="flex items-center justify-between bg-surface rounded-lg px-3 py-2 ring-1 ring-outline-variant/30">
                <span className="text-xs font-mono text-secondary">{transactionId}</span>
                <span className="material-symbols-outlined text-primary text-sm cursor-pointer hover:opacity-70">content_copy</span>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-outline-variant text-center">
            <p className="text-[10px] italic font-semibold text-outline">Terima kasih telah menggunakan IWallet untuk transaksi harian Anda.</p>
          </div>
        </div>
        <div className="mt-4">
          <button type="button" onClick={() => navigate('/transaction')} className="w-full py-4 rounded-2xl bg-primary text-white font-bold flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all">
            <span className="material-symbols-outlined">check_circle</span>
            Selesai
          </button>
        </div>
      </div>
    </div>
  )
}
