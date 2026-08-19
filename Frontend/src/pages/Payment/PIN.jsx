import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { API_BASE_URL } from '../../config/api'

const keypad = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

function PinInput({ pin }) {
  return (
    <div className="flex items-center gap-3 md:gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className={`w-4 h-4 rounded-full border-2 border-[#630ED4]/30 transition-colors ${i < pin.length ? 'bg-[#630ED4] border-[#630ED4]' : 'bg-transparent'}`} />
      ))}
    </div>
  )
}

export default function PaymentPin() {
  const [pin, setPin] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const qrData = location.state?.qrData || {}

  const press = (digit) => { if (pin.length >= 6) return; setPin((prev) => prev + digit) }
  const backspace = () => setPin((prev) => prev.slice(0, -1))

  const handleVerify = async () => {
    setIsLoading(true)
    const token = localStorage.getItem('token')
    if (!token) { setIsLoading(false); return navigate('/login') }
    try {
      const res = await fetch(`${API_BASE_URL}/api/payment/pay`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`, 'Idempotency-Key': crypto.randomUUID() },
        body: JSON.stringify({ merchantPublicId: qrData.merchantId, amount: qrData.amount, pin: pin })
      })
      const data = await res.json()
      if (res.ok) { navigate('/payment/struk', { state: { successData: data, qrData } }) }
      else { alert(data.message || 'Pembayaran gagal'); setPin('') }
    } catch (e) { alert('Terjadi kesalahan jaringan'); setPin('') }
    finally { setIsLoading(false) }
  }

  return (
    <div className="relative flex-1 overflow-hidden flex items-center justify-center p-4 md:p-6">
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 max-w-[90vw] max-h-[90vw] rounded-full bg-[#630ED4]/5 blur-3xl right-8 top-6" />
      <div className="absolute w-64 h-64 sm:w-80 sm:h-80 max-w-[70vw] max-h-[70vw] rounded-full bg-[#7D3D00]/5 blur-3xl left-8 bottom-8" />
      <div className="hidden md:block w-full max-w-4xl absolute inset-x-0 mx-auto top-10 px-6 opacity-25 blur-[2px] pointer-events-none select-none">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[{ label: 'Total Balance', value: '$42,920.00', colorClass: 'text-[#630ED4]' }, { label: 'Monthly Spend', value: '$3,450.00', colorClass: 'text-[#7D3D00]' }, { label: 'Active Cards', value: '3 Units', colorClass: 'text-[#1D1A24]' }].map((card) => (
            <div key={card.label} className="bg-white rounded-3xl p-6 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
              <p className="text-xs font-medium text-[#4A4455]">{card.label}</p>
              <p className={`mt-4 text-3xl font-bold ${card.colorClass}`}>{card.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 h-64 bg-white rounded-3xl shadow-[0_1px_2px_rgba(0,0,0,0.05)]" />
      </div>
      <div className="relative z-10 w-full max-w-md bg-white/85 backdrop-blur-xl rounded-4xl shadow-[0_20px_50px_rgba(99,14,212,0.15)] ring-1 ring-white/50 p-6 sm:p-8 flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-[#7C3AED]/10 flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-[#630ED4] text-3xl">pin</span>
        </div>
        <h2 className="text-2xl font-semibold">Masukkan PIN Anda</h2>
        <p className="mt-2 text-center text-sm text-[#4A4455] max-w-70">Konfirmasi pembayaran Anda dengan memasukkan 6 digit PIN keamanan.</p>
        <div className="mt-6 mb-8"><PinInput pin={pin} /></div>
        <div className="grid grid-cols-3 gap-x-3 gap-y-2 w-full max-w-56">
          {keypad.map((digit) => (<button key={digit} type="button" onClick={() => press(digit)} className="w-14 h-14 mx-auto rounded-full flex items-center justify-center text-xl font-bold text-[#4A4455] hover:bg-[#F9F1FF] active:scale-90 transition-all duration-150">{digit}</button>))}
          <button type="button" className="w-14 h-14 mx-auto rounded-full flex items-center justify-center text-xl font-bold text-[#4A4455] hover:bg-[#F9F1FF] active:scale-90 transition-all duration-150" aria-label="Empty" tabIndex={-1} />
          <button type="button" onClick={() => press('0')} className="w-14 h-14 mx-auto rounded-full flex items-center justify-center text-xl font-bold text-[#4A4455] hover:bg-[#F9F1FF] active:scale-90 transition-all duration-150">0</button>
          <button type="button" onClick={backspace} className="w-14 h-14 mx-auto rounded-full flex items-center justify-center text-[#4A4455] hover:bg-[#F9F1FF] active:scale-90 transition-all duration-150" aria-label="Hapus digit"><span className="material-symbols-outlined">backspace</span></button>
        </div>
        <div className="mt-6 w-full grid grid-cols-2 gap-4">
          <button type="button" onClick={() => navigate('/payment/confirm', { state: { qrData } })} className="py-4 rounded-2xl bg-white text-[#626566] font-bold text-base ring-1 ring-[#CCC3D8]/40 hover:bg-[#F9F1FF] active:scale-[0.98] transition-all">Cancel</button>
          <button type="button" disabled={pin.length < 6 || isLoading} onClick={handleVerify} className="py-4 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#630ED4] text-white font-bold text-base shadow-[0_10px_20px_rgba(99,14,212,0.20)] hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2">
            {isLoading ? <span className="material-symbols-outlined animate-spin">refresh</span> : 'Verify'}
          </button>
        </div>
      </div>
    </div>
  )
}
