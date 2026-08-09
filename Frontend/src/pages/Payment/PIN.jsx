import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const navItems = [
  { icon: 'dashboard', label: 'Dashboard', path: '/dashboard' },
  { icon: 'account_balance_wallet', label: 'Wallet', path: '/payment', active: true },
  { icon: 'history', label: 'History', path: '/transaction' },
  { icon: 'person', label: 'Profile', path: '/profile' },
]

const keypad = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

function Sidebar({ items, onNavigate }) {
  return (
    <>
      <div className="px-2 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#630ED4] flex items-center justify-center shadow-lg shadow-[#630ED4]/30">
            <span className="material-symbols-outlined text-white text-2xl">wallet</span>
          </div>
          <div>
            <p className="text-xl font-black text-[#630ED4] leading-none">IWallet</p>
            <p className="text-[10px] font-semibold text-[#4A4455] opacity-70 mt-1">Premium Digital Wallet</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 flex flex-col gap-1.5">
        {items.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={() => onNavigate(item.path)}
            className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-left transition-all duration-200 ${
              item.active
                ? 'bg-[#630ED4] text-white font-bold shadow-md shadow-[#630ED4]/20'
                : 'text-[#4A4455] hover:bg-[#F9F1FF] active:scale-95'
            }`}
          >
            <span className="material-symbols-outlined text-xl">{item.icon}</span>
            <span className="text-sm tracking-[0.01em] font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="flex flex-col gap-1.5">
        <button type="button" onClick={() => onNavigate('/topup')} className="w-full py-3 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#630ED4] text-[#EDE0FF] text-sm font-bold shadow-md shadow-[#630ED4]/20 hover:brightness-110 active:scale-[0.98] transition-all">
          Add Funds
        </button>
        <button type="button" onClick={() => onNavigate('/login')} className="flex items-center gap-3 px-3.5 py-3 rounded-xl text-[#4A4455] hover:bg-[#F9F1FF] transition-all duration-200 active:scale-95">
          <span className="material-symbols-outlined text-xl">logout</span>
          <span className="text-sm tracking-[0.01em] font-medium">Logout</span>
        </button>
      </div>
    </>
  )
}

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
  const navigate = useNavigate()

  const press = (digit) => {
    if (pin.length >= 6) return
    setPin((prev) => prev + digit)
  }

  const backspace = () => setPin((prev) => prev.slice(0, -1))

  return (
    <div className="min-h-screen bg-[#FEF7FF] text-[#1D1A24]">
      <div className="flex min-h-screen">
        <aside className="hidden lg:flex flex-col w-64 shrink-0 h-screen sticky top-0 bg-[#F9F1FF] border-r border-[#CCC3D8]/20 p-4 gap-4">
          <Sidebar items={navItems} onNavigate={navigate} />
        </aside>

        <div className="flex-1 flex flex-col min-w-0">
          <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-xl border-b border-[#CCC3D8]/30">
            <div className="flex items-center justify-between h-16 pl-4 md:pl-6 pr-4 md:pr-6 gap-3">
              <h1 className="text-2xl md:text-3xl font-bold text-[#630ED4]">Verifikasi PIN</h1>
              <div className="flex items-center gap-3 md:gap-6">
                <div className="hidden md:flex items-center gap-2 pl-4 pr-5 py-2.5 rounded-full bg-white border border-[#CCC3D8]/30">
                  <span className="material-symbols-outlined text-[#4A4455]">search</span>
                  <span className="text-[#6B7280] text-sm">Search transactions...</span>
                </div>
                <button type="button" className="p-1 text-[#4A4455] hover:text-[#630ED4] transition-colors">
                  <span className="material-symbols-outlined">notifications</span>
                </button>
                <button type="button" className="p-1 text-[#4A4455] hover:text-[#630ED4] transition-colors">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
                <div className="w-10 h-10 shrink-0 rounded-full ring-2 ring-[#630ED4]/20 overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://placehold.co/40x40" alt="User avatar" />
                </div>
              </div>
            </div>
          </header>

          <main className="relative flex-1 overflow-hidden flex items-center justify-center p-4 md:p-6">
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
                <button type="button" onClick={() => navigate('/payment/confirm')} className="py-4 rounded-2xl bg-[#E1E3E4] text-[#626566] font-bold text-base hover:bg-[#D6D8D9] active:scale-[0.98] transition-all">
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={pin.length < 6}
                  className="py-4 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#630ED4] text-white font-bold text-base shadow-[0_10px_20px_rgba(99,14,212,0.20)] hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none"
                >
                  Verify
                </button>
              </div>
            </div>
          </main>

          <nav className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-xl border-t border-[#CCC3D8]/30 flex justify-around py-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))]">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-xl ${
                  item.active ? 'text-[#630ED4]' : 'text-[#4A4455]'
                }`}
              >
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
