import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { topUpBalance } from '../../services/topUpService';
import AddCircleIcon from "../../assets/icons/dashboard/add_circle.svg";

const TopUpPage = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('BCA Virtual Account');
  const amounts = ['50.000', '100.000', '250.000', '500.000', '1.000.000'];
  const methods = ['BCA Virtual Account', 'Mandiri Virtual Account', 'OVO', 'GoPay', 'DANA', 'QRIS'];
  const [loading, setLoading] = useState(false);

  const handleTopUp = async () => {
    if (!amount) { alert("Masukkan nominal top up!"); return; }
    const cleanAmount = amount.replace(/\./g, '');
    const numAmount = parseInt(cleanAmount, 10);
    if (isNaN(numAmount) || numAmount <= 0) { alert("Nominal tidak valid!"); return; }
    setLoading(true);
    try {
      const response = await topUpBalance(numAmount);
      navigate('/topup/success', { state: { amount: numAmount, method: method, transactionData: response } });
    } catch (error) { alert(error.message); }
    finally { setLoading(false); }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-6 max-w-7xl mx-auto w-full">
      <section className="mb-2">
        <h2 className="font-display-lg text-display-lg">Top Up Saldo</h2>
        <p className="font-body-md text-body-md text-secondary">Tambahkan saldo ke dompet digital Anda.</p>
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="bg-surface rounded-3xl p-8 premium-shadow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary-container/10 rounded-2xl flex items-center justify-center">
              <img src={AddCircleIcon} alt="Top Up" className="w-6 h-6" />
            </div>
            <h4 className="font-headline-sm text-headline-sm">Nominal Top Up</h4>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {amounts.map((a) => (
              <button key={a} type="button" onClick={() => setAmount(a)} className={`py-4 rounded-2xl font-bold border transition-all active:scale-95 ${amount === a ? 'bg-primary-container text-on-primary-container border-primary' : 'bg-surface-container-low border-outline-variant/30 text-on-surface hover:bg-surface-container-highest'}`}>
                Rp {a}
              </button>
            ))}
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-4 flex items-center text-secondary font-bold">Rp</span>
            <input className="w-full pl-12 pr-4 py-4 bg-surface-container border border-outline-variant/50 rounded-xl font-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Masukkan nominal lainnya" value={amount} onChange={(e) => setAmount(e.target.value)} />
          </div>
        </div>
        <div className="bg-surface rounded-3xl p-8 premium-shadow">
          <h4 className="font-headline-sm text-headline-sm mb-6">Metode Pembayaran</h4>
          <div className="space-y-3">
            {methods.map((m) => (
              <button key={m} type="button" onClick={() => setMethod(m)} className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl border transition-all active:scale-[0.98] ${method === m ? 'bg-primary-container/10 border-primary' : 'bg-surface-container-low border-outline-variant/30 hover:bg-surface-container-highest'}`}>
                <span className="font-label-md font-bold">{m}</span>
                <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${method === m ? 'border-primary' : 'border-outline-variant'}`}>
                  {method === m && <span className="w-3 h-3 rounded-full bg-primary" />}
                </span>
              </button>
            ))}
          </div>
          <button type="button" onClick={handleTopUp} disabled={loading} className="w-full mt-8 py-4 rounded-2xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold shadow-lg shadow-primary/20 active:scale-[0.98] transition-all disabled:opacity-70">
            {loading ? 'Memproses...' : 'Lanjutkan Top Up'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopUpPage;
