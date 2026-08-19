import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { API_BASE_URL } from '../../config/api'

export default function PaymentConfirm() {
  const navigate = useNavigate()
  const location = useLocation()
  const [saldo, setSaldo] = useState(0)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      fetch(`${API_BASE_URL}/api/wallet/balance`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(res => res.json())
      .then(data => setSaldo(data.balance || 0))
      .catch(console.error)
    }
  }, [])

  const qrData = location.state?.qrData || {}
  const merchantId = qrData.merchantId
  const merchantName = qrData.merchantName
  const nominalTransaksi = qrData.amount
  const totalPay = nominalTransaksi
  const formatRp = (num) => new Intl.NumberFormat('id-ID').format(num)

  return (
    <div className="flex-1">
      <div className="max-w-7xl mx-auto w-full px-4 py-6 md:px-8 md:py-10">
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <section className="bg-white rounded-3xl p-5 md:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] ring-1 ring-[#CCC3D8]/10 flex items-center gap-4 md:gap-6">
              <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-2xl bg-[#F9F1FF] ring-1 ring-[#CCC3D8]/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#630ED4] text-3xl md:text-4xl">storefront</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.5px] text-[#630ED4]">Merchant Partner</p>
                <h2 className="text-xl md:text-2xl font-semibold truncate">{merchantName}</h2>
                <p className="text-sm text-[#4A4455] flex items-center gap-2 mt-0.5">
                  <span className="material-symbols-outlined text-base">pin_drop</span>
                  Merchant ID:
                  <span className="font-mono font-bold text-[#4A4455]">{merchantId}</span>
                </p>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F3EBFA] text-[#630ED4] text-xs font-medium shrink-0">
                <span className="material-symbols-outlined text-sm">verified</span>
                Verified Merchant
              </span>
            </section>

            <section className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] ring-1 ring-[#CCC3D8]/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <h3 className="text-lg md:text-xl font-semibold">Nominal Pembayaran</h3>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#F9F1FF] text-xs font-medium text-[#4A4455] self-start sm:self-auto">
                  <span className="material-symbols-outlined text-[#630ED4]">account_balance_wallet</span>
                  Saldo:
                  <span className="font-medium text-[#1D1A24]">Rp {formatRp(saldo)}</span>
                </span>
              </div>
              <div className="mt-6 flex items-baseline gap-2 px-4 md:px-6 py-8 rounded-2xl ring-2 ring-[#CCC3D8]/20">
                <span className="text-3xl md:text-4xl font-bold text-[#4A4455]/50">Rp</span>
                <span className="text-4xl md:text-5xl font-bold">{formatRp(nominalTransaksi)}</span>
              </div>
              <p className="mt-5 flex items-center gap-2 text-sm text-[#4A4455]">
                <span className="material-symbols-outlined text-base">info</span>
                Pastikan nominal pembayaran sudah sesuai dengan tagihan merchant.
              </p>
            </section>

            <div className="grid sm:grid-cols-1 gap-6">
              <div className="bg-white rounded-3xl p-5 md:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] ring-1 ring-[#CCC3D8]/10 flex items-center gap-4 text-left">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#EADDFF] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#630ED4]">account_balance_wallet</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold tracking-wide">Metode Bayar</p>
                  <p className="text-[10px] text-[#4A4455]">IWallet Balance</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-1 lg:sticky lg:top-24">
            <section className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] ring-1 ring-[#CCC3D8]/10">
              <h3 className="text-xl font-semibold mb-6">Ringkasan<br />Transaksi</h3>
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-start gap-3">
                  <div>
                    <p className="text-xs font-medium text-[#4A4455]">Nominal Transaksi</p>
                    <p className="text-[10px] text-[#4A4455]">Subtotal Tagihan</p>
                  </div>
                  <span className="text-xs font-bold shrink-0">Rp {formatRp(nominalTransaksi)}</span>
                </div>
                <div className="pt-6 border-t border-[#CCC3D8]/50 flex justify-between items-end gap-3">
                  <div><p className="text-base font-semibold">Total Bayar</p></div>
                  <span className="text-lg font-semibold text-[#630ED4] shrink-0">Rp {formatRp(totalPay)}</span>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-4">
                <button type="button" onClick={() => navigate('/payment/pin', { state: { qrData } })} className="w-full py-5 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#630ED4] text-white text-xl font-semibold flex items-center justify-center gap-3 shadow-[0_10px_15px_-3px_rgba(99,14,212,0.25)] hover:brightness-110 active:scale-[0.98] transition-all duration-200">
                  <span className="material-symbols-outlined text-2xl">lock</span>
                  Bayar Sekarang
                </button>
                <button type="button" onClick={() => navigate('/payment')} className="w-full py-4 rounded-2xl text-[#4A4455] text-xs font-medium hover:bg-[#F9F1FF] transition-colors">
                  Batalkan Transaksi
                </button>
              </div>
              <div className="mt-6 p-4 rounded-2xl bg-[#F9F1FF] flex items-center gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#630ED4]">verified_user</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold text-[#1D1A24]">Pembayaran Aman</p>
                  <p className="text-[10px] text-[#4A4455]">Enkripsi 256-bit AES tingkat bank.</p>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  )
}
