import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBalance } from '../../services/walletService';
import { getTransactionHistory } from '../../services/transactionService';

import VisibilityIcon from "../../assets/icons/dashboard/visibility.svg";
import VisibilityOffIcon from "../../assets/icons/dashboard/visibility_off.svg";
import AddCircleIcon from "../../assets/icons/dashboard/add_circle.svg";
import PaymentsWhiteIcon from "../../assets/icons/dashboard/payments_white.svg";
import HistoryWhiteIcon from "../../assets/icons/dashboard/history_white.svg";
import CallReceivedIcon from "../../assets/icons/dashboard/call_received.svg";
import ElectricBoltIcon from "../../assets/icons/dashboard/electric_bolt.svg";
import AddCardIcon from "../../assets/icons/dashboard/add_card.svg";
import ShoppingCartIcon from "../../assets/icons/dashboard/shopping_cart.svg";
import ArrowUpwardIcon from "../../assets/icons/dashboard/arrow_upward.svg";
import ProfileImage from "../../assets/image/profile.png";

const BalanceCard = () => {
  const [visible, setVisible] = useState(true);
  const [balance, setBalance] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    getBalance()
      .then(data => setBalance(data.balance))
      .catch(err => console.error("Failed to fetch balance", err));
  }, []);

  const formatRp = (num) => new Intl.NumberFormat('id-ID').format(num);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-container rounded-3xl p-6 md:p-8 text-on-primary shadow-lg group lg:col-span-3">
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="font-label-md text-label-md uppercase tracking-widest opacity-80 mb-1">Saldo Anda</p>
            <div className="flex items-center gap-3">
              <h3 className="font-display-lg text-3xl sm:text-4xl md:text-[40px] leading-none font-black">
                {visible ? "Rp " + formatRp(balance) : 'Rp *********'}
              </h3>
              <button className="bg-transparent border-none p-0 cursor-pointer transition-opacity opacity-80 hover:opacity-100" onClick={() => setVisible(!visible)}>
                <img src={visible ? VisibilityIcon : VisibilityOffIcon} alt={visible ? "sembunyikan saldo" : "tampilkan saldo"} className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-2 sm:gap-4 justify-center max-w-lg mx-auto">
          <button onClick={() => navigate("/topup")} className="flex-1 bg-white text-primary font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-xl active:scale-95 transition-all whitespace-nowrap">
            <img src={AddCircleIcon} alt="Top Up" className="w-6 h-6 shrink-0" />
            Top Up
          </button>
          <button onClick={() => navigate("/payment")} className="flex-1 bg-white/20 backdrop-blur-md text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 border border-white/20 hover:bg-white/30 active:scale-95 transition-all whitespace-nowrap">
            <img src={PaymentsWhiteIcon} alt="Bayar" className="w-6 h-6 shrink-0" />
            Bayar
          </button>
          
        </div>
      </div>
    </div>
  );
};

const TransactionItem = ({ icon, iconBg, title, subtitle, amount, isPositive, status }) => (
  <div className="flex items-center justify-between p-2 hover:bg-surface-container-low rounded-2xl transition-colors cursor-pointer group">
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 ${iconBg} rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform`}>
        <img src={icon} alt={title} className="w-6 h-6" />
      </div>
      <div>
        <p className="font-body-lg text-body-lg font-bold">{title}</p>
        <p className="text-secondary text-sm">{subtitle}</p>
      </div>
    </div>
    <div className="text-right">
      <p className={`font-headline-sm text-headline-sm ${isPositive ? 'text-[#10b981]' : 'text-on-background'}`}>{amount}</p>
      <p className="text-[10px] text-secondary font-bold uppercase">{status}</p>
    </div>
  </div>
);

const TransactionsList = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTransactionHistory()
      .then(data => {
        setTransactions(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch transactions", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (loading || transactions.length === 0) return;
    const el = sectionRef.current;
    if (!el) return;
    const items = el.querySelectorAll('.transaction-item');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );
    items.forEach((item, i) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = 'all 0.4s ease-out ' + (i * 0.1) + 's';
      observer.observe(item);
    });
    return () => observer.disconnect();
  }, [loading, transactions]);

  const formatRp = (num) => new Intl.NumberFormat('id-ID').format(num);

  return (
    <div className="bg-surface rounded-3xl p-8 premium-shadow">
      <div className="flex justify-between items-center mb-8">
        <h4 className="font-headline-md text-headline-md">Ringkasan Aktivitas</h4>
        <a className="text-primary font-bold text-sm hover:underline cursor-pointer" onClick={() => navigate("/transaction")}>Lihat Semua</a>
      </div>
      <div className="space-y-6" ref={sectionRef}>
        {loading ? (
          <div className="text-center py-8 opacity-70">
            <p className="font-bold text-secondary">Memuat riwayat...</p>
          </div>
        ) : transactions.length === 0 ? (
          <div className="text-center py-8 opacity-70">
            <p className="font-bold text-secondary">(BELUM ADA RIWAYAT TRANSAKSI)</p>
          </div>
        ) : (
          transactions.slice(0, 5).map((tx, idx) => {
            const isPositive = tx.type === 'TOP_UP';
            const icon = isPositive ? AddCardIcon : ShoppingCartIcon;
            const iconBg = isPositive ? 'bg-primary-container/10' : 'bg-secondary-container';
            const title = tx.type === 'TOP_UP' ? 'Top Up Saldo' : tx.merchantName || 'Pembayaran';
            const prefix = isPositive ? '+' : '-';
            
            // Format date nicely
            const dateObj = new Date(tx.createdAt);
            const dateStr = dateObj.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
            
            return (
              <div key={tx.transactionId || idx} className="transaction-item">
                <TransactionItem 
                  icon={icon} 
                  iconBg={iconBg} 
                  title={title} 
                  subtitle={tx.type + " - " + dateStr} 
                  amount={prefix + "Rp " + formatRp(tx.amount)} 
                  isPositive={isPositive} 
                  status={tx.status} 
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const firstName = user.fullName ? user.fullName.split(' ')[0] : "Budi";

  return (
    <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-6 max-w-7xl mx-auto w-full">
      <section className="mb-2">
        <h2 className="font-display-lg text-display-lg">Halo, {firstName}</h2>
        <p className="font-body-md text-body-md text-secondary">Selamat datang kembali! Mari kelola keuanganmu hari ini.</p>
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <BalanceCard />
      </div>
      <div className="mt-4"><TransactionsList /></div>
    </div>
  );
};

export default Dashboard;
