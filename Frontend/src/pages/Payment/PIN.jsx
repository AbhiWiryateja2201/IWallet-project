import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import DashboardIcon from "../../assets/icons/dashboard/dashboard.svg"
import PaymentsIcon from "../../assets/icons/dashboard/payments.svg"
import HistoryIcon from "../../assets/icons/dashboard/history.svg"
import PersonIcon from "../../assets/icons/dashboard/person.svg"
import LogoutIcon from "../../assets/icons/dashboard/logout.svg"
import SearchIcon from "../../assets/icons/dashboard/search.svg"
import NotificationsIcon from "../../assets/icons/dashboard/notifications.svg"
import ProfileImage from '../../assets/image/profile.png'

const navItems = [
  { icon: DashboardIcon, label: 'Dashboard', path: '/dashboard' },
  { icon: PaymentsIcon, label: 'Bayar', path: '/payment', active: true },
  { icon: HistoryIcon, label: 'History', path: '/transaction' },
  { icon: PersonIcon, label: 'Profile', path: '/profile' },
]

const keypad = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

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

const TopNavBar = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const userName = user.fullName || "Budi Santoso";
  return (
  <header className="w-full h-16 sticky top-0 bg-surface/80 dark:bg-surface-container/80 backdrop-blur-md shadow-sm flex justify-end items-center px-container-margin z-40">
    <div className="flex items-center gap-4">
      <button className="w-10 h-10 flex items-center justify-center text-on-secondary-container dark:text-outline-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors rounded-full active:scale-95 transition-transform">
        <img src={NotificationsIcon} alt="notifications" className="w-6 h-6" />
      </button>
      <div className="flex items-center gap-3 pl-4 border-l border-outline-variant/30">
        <div className="text-right">
          <p className="font-label-md text-label-md font-bold">{userName}</p>
          <p className="text-[10px] text-secondary">Verified Member</p>
        </div>
        <img className="w-10 h-10 rounded-full object-cover border-2 border-primary-container" alt={`Professional portrait of ${userName}`} src={ProfileImage} />
      </div>
    </div>
  </header>
  );
};

function PinInput({ pin }) {
  return (
    <div className="flex items-center gap-3 md:gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <span
          key={i}
          className={`w-4 h-4 rounded-full border-2 border-[#630ED4]/30 transition-colors ${
            i < pin.length ? 'bg-[#630ED4] border-[#630ED4]' : 'bg-transparent'
          }`}
        />
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

  const press = (digit) => {
    if (pin.length >= 6) return
    setPin((prev) => prev + digit)
  }

  const backspace = () => setPin((prev) => prev.slice(0, -1))

  const handleVerify = async () => {
    setIsLoading(true)
    const token = localStorage.getItem('token')
    if (!token) {
      setIsLoading(false)
      return navigate('/login')
    }
    
    try {
      const res = await fetch('http://localhost:8080/api/payment/pay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'Idempotency-Key': crypto.randomUUID()
        },
        body: JSON.stringify({
          merchantPublicId: qrData.merchantId,
          amount: qrData.amount,
          pin: pin
        })
      })
      const data = await res.json()
      
      if (res.ok) {
        navigate('/payment/struk', { state: { successData: data, qrData } })
      } else {
        alert(data.message || 'Pembayaran gagal')
        setPin('')
      }
    } catch (e) {
      alert('Terjadi kesalahan jaringan')
      setPin('')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-background text-on-background min-h-screen flex overflow-x-hidden">
      <SideNavBar />
      <main className="flex-1 lg:ml-64 flex flex-col min-h-screen min-w-0 pb-20 lg:pb-0">
        <TopNavBar />

        <div className="relative flex-1 overflow-hidden flex items-center justify-center p-4 md:p-6">
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 max-w-[90vw] max-h-[90vw] rounded-full bg-[#630ED4]/5 blur-3xl right-8 top-6" />
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 max-w-[70vw] max-h-[70vw] rounded-full bg-[#7D3D00]/5 blur-3xl left-8 bottom-8" />

          <div className="hidden md:block w-full max-w-4xl absolute inset-x-0 mx-auto top-10 px-6 opacity-25 blur-[2px] pointer-events-none select-none">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { label: 'Total Balance', value: '$42,920.00', colorClass: 'text-[#630ED4]' },
                { label: 'Monthly Spend', value: '$3,450.00', colorClass: 'text-[#7D3D00]' },
                { label: 'Active Cards', value: '3 Units', colorClass: 'text-[#1D1A24]' },
              ].map((card) => (
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
            <p className="mt-2 text-center text-sm text-[#4A4455] max-w-70">
              Konfirmasi pembayaran Anda dengan memasukkan 6 digit PIN keamanan.
            </p>

            <div className="mt-6 mb-8">
              <PinInput pin={pin} />
            </div>

            <div className="grid grid-cols-3 gap-x-3 gap-y-2 w-full max-w-56">
              {keypad.map((digit) => (
                <button
                  key={digit}
                  type="button"
                  onClick={() => press(digit)}
                  className="w-14 h-14 mx-auto rounded-full flex items-center justify-center text-xl font-bold text-[#4A4455] hover:bg-[#F9F1FF] active:scale-90 transition-all duration-150"
                >
                  {digit}
                </button>
              ))}
              <button type="button" className="w-14 h-14 mx-auto rounded-full flex items-center justify-center text-xl font-bold text-[#4A4455] hover:bg-[#F9F1FF] active:scale-90 transition-all duration-150" aria-label="Empty" tabIndex={-1} />
              <button
                type="button"
                onClick={() => press('0')}
                className="w-14 h-14 mx-auto rounded-full flex items-center justify-center text-xl font-bold text-[#4A4455] hover:bg-[#F9F1FF] active:scale-90 transition-all duration-150"
              >
                0
              </button>
              <button
                type="button"
                onClick={backspace}
                className="w-14 h-14 mx-auto rounded-full flex items-center justify-center text-[#4A4455] hover:bg-[#F9F1FF] active:scale-90 transition-all duration-150"
                aria-label="Hapus digit"
              >
                <span className="material-symbols-outlined">backspace</span>
              </button>
            </div>

            <button type="button" className="mt-4 text-[#630ED4] text-base font-bold hover:underline">
              Lupa PIN?
            </button>

            <div className="mt-6 w-full grid grid-cols-2 gap-4">
              <button type="button" onClick={() => navigate('/payment/confirm', { state: { qrData } })} className="py-4 rounded-2xl bg-white text-[#626566] font-bold text-base ring-1 ring-[#CCC3D8]/40 hover:bg-[#F9F1FF] active:scale-[0.98] transition-all">
                Cancel
              </button>
              <button
                type="button"
                disabled={pin.length < 6 || isLoading}
                onClick={handleVerify}
                className="py-4 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#630ED4] text-white font-bold text-base shadow-[0_10px_20px_rgba(99,14,212,0.20)] hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2"
              >
                {isLoading ? <span className="material-symbols-outlined animate-spin">refresh</span> : 'Verify'}
              </button>
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
