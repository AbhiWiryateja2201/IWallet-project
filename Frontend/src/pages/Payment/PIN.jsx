import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'Dashboard', icon: 'dashboard', to: '/dashboard' },
  { label: 'Wallet', icon: 'account_balance_wallet', to: '/payment', active: true },
  { label: 'History', icon: 'history', to: '/transaction' },
  { label: 'Profile', icon: 'person', to: '/profile' },
]

const STATS = [
  { label: 'Total Balance', value: '$42,920.00', valueClass: 'text-[#630ED4]' },
  { label: 'Monthly Spend', value: '$3,450.00', valueClass: 'text-[#7D3D00]' },
  { label: 'Active Cards', value: '3 Units', valueClass: 'text-[#1D1A24]' },
]

export default function PaymentPin() {
  const navigate = useNavigate()
  const [pin, setPin] = useState('')

  const handleDigit = (digit) => {
    if (pin.length < 6) setPin((prev) => prev + digit)
  }

  const handleBackspace = () => setPin((prev) => prev.slice(0, -1))

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#FEF7FF]">
      <aside className="hidden lg:flex lg:w-64 lg:shrink-0 lg:h-screen lg:sticky lg:top-0 flex-col gap-4 p-4 bg-[#F9F1FF] border-r border-[#CCC3D8]/20">
        <div className="px-2 mb-2">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 bg-[#630ED4] rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-white">account_balance_wallet</span>
            </div>
            <span className="text-[20px] leading-7 font-black text-[#630ED4]">IWallet</span>
          </div>
          <p className="text-[10px] leading-3 font-semibold text-[#4A4455] opacity-70">Premium Digital Wallet</p>
        </div>

        <nav className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => navigate(item.to)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all active:scale-95 ${
                item.active
                  ? 'bg-[#630ED4] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] text-white font-bold'
                  : 'text-[#4A4455] hover:bg-[#EDE0FF] font-normal'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              <span className="text-base leading-6">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-2">
          <button
            type="button"
            onClick={() => navigate('/topup')}
            className="w-full py-3 bg-[#7C3AED] text-[#EDE0FF] font-bold text-base rounded-xl hover:bg-[#7C3AED]/90 transition-colors active:scale-95"
          >
            Add Funds
          </button>
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#4A4455] hover:bg-[#EDE0FF] transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
            <span className="text-base leading-6">Logout</span>
          </button>
        </div>
      </aside>

      <div className="flex-1 min-w-0 flex flex-col">
        <header className="sticky top-0 z-30 flex items-center justify-between gap-4 h-16 px-5 md:px-8 bg-white/80 backdrop-blur-xl border-b border-[#CCC3D8]/30 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="lg:hidden w-8 h-8 rounded-lg bg-[#630ED4] flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[18px]">account_balance_wallet</span>
            </span>
            <h1 className="text-2xl md:text-[32px] leading-8 md:leading-10 font-bold text-[#630ED4]">Verifikasi PIN</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#4A4455] text-[18px]">search</span>
              <input
                className="w-64 bg-white border border-[#CCC3D8]/30 rounded-full pl-10 pr-4 py-2.5 text-base focus:ring-2 focus:ring-[#630ED4] transition-all"
                placeholder="Search transactions..."
                type="text"
              />
            </div>
            <button className="p-2 text-[#4A4455] hover:text-[#630ED4] transition-colors" type="button">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2 text-[#4A4455] hover:text-[#630ED4] transition-colors" type="button">
              <span className="material-symbols-outlined">help</span>
            </button>
            <div className="w-10 h-10 rounded-full bg-[#630ED4] flex items-center justify-center text-white border-2 border-[#630ED4]/20">
              <span className="material-symbols-outlined text-[18px]">person</span>
            </div>
          </div>
        </header>

        <main className="flex-1 relative p-5 md:p-8">
          <div className="pointer-events-none absolute -top-20 right-0 w-96 h-96 bg-[#630ED4]/5 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-10 w-80 h-80 bg-[#7D3D00]/5 rounded-full blur-3xl" />

          <div className="relative max-w-screen-xl mx-auto flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-white rounded-3xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] p-6 flex flex-col justify-between gap-8">
                  <span className="text-xs font-medium tracking-[0.12px] text-[#4A4455]">{stat.label}</span>
                  <span className={`text-3xl leading-10 font-bold ${stat.valueClass}`}>{stat.value}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-3xl shadow-[0px_1px_2px_rgba(0,0,0,0.05)] h-64 flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-[#CCC3D8]">bar_chart</span>
            </div>
          </div>
        </main>
      </div>

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-[#DFD7E6]/20 backdrop-blur-sm" onClick={() => navigate('/payment')} />
        <div className="relative w-full max-w-md bg-white/85 backdrop-blur-md rounded-[32px] outline outline-1 outline-white/50 shadow-[0_20px_50px_rgba(99,14,212,0.15)] p-8 flex flex-col items-center">
          <div className="w-16 h-16 bg-[#7C3AED]/10 rounded-2xl flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-[#630ED4] text-3xl">lock</span>
          </div>

          <h2 className="text-2xl leading-8 font-semibold text-[#1D1A24] mb-2">Masukkan PIN Anda</h2>
          <p className="text-sm leading-5 text-center text-[#4A4455] mb-8">
            Konfirmasi pembayaran Anda dengan memasukkan 6 digit PIN keamanan.
          </p>

          <div className="flex items-center gap-4 mb-10">
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className={`w-4 h-4 rounded-full ${i < pin.length ? 'bg-[#630ED4]' : 'border-2 border-[#630ED4]/30'}`}
              />
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3 w-full max-w-[240px] mb-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => handleDigit(String(n))}
                className="w-14 h-14 rounded-full flex items-center justify-center text-xl leading-7 font-bold text-[#4A4455] hover:bg-[#F9F1FF] active:scale-95 transition-all"
              >
                {n}
              </button>
            ))}
            <span className="w-14 h-14" />
            <button
              type="button"
              onClick={() => handleDigit('0')}
              className="w-14 h-14 rounded-full flex items-center justify-center text-xl leading-7 font-bold text-[#4A4455] hover:bg-[#F9F1FF] active:scale-95 transition-all"
            >
              0
            </button>
            <button
              type="button"
              onClick={handleBackspace}
              className="w-14 h-14 rounded-full flex items-center justify-center text-[#4A4455] hover:bg-[#F9F1FF] active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-2xl">backspace</span>
            </button>
          </div>

          <button type="button" className="text-base font-bold text-[#630ED4] mb-8 hover:underline">
            Lupa PIN?
          </button>

          <div className="flex gap-4 w-full">
            <button
              type="button"
              onClick={() => navigate('/payment')}
              className="flex-1 py-4 bg-[#E1E3E4] text-[#626566] font-bold text-base rounded-2xl hover:bg-[#E1E3E4]/70 active:scale-95 transition-all"
            >
              Cancel
            </button>
            <button
              type="button"
              disabled={pin.length < 6}
              onClick={() => navigate('/payment/confirm')}
              className="flex-1 py-4 bg-[#630ED4] text-white font-bold text-base rounded-2xl shadow-[0_10px_20px_rgba(99,14,212,0.20)] disabled:opacity-50 disabled:shadow-none active:scale-95 transition-all"
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
