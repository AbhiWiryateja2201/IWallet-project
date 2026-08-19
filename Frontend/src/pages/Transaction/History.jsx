import { useState, useEffect } from 'react';
import { getTransactionHistory } from '../../services/transactionService';
import SearchIcon from "../../assets/icons/dashboard/search.svg";
import AddCardIcon from "../../assets/icons/dashboard/add_card.svg";
import ShoppingCartIcon from "../../assets/icons/dashboard/shopping_cart.svg";

const ITEMS_PER_PAGE = 10;

const HistoryPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getTransactionHistory()
      .then(data => {
        setTransactions(data.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)));
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch transactions", err);
        setLoading(false);
      });
  }, []);

  const formatRp = (num) => new Intl.NumberFormat('id-ID').format(num);

  const filtered = transactions.filter(tx => {
    const title = tx.type === 'TOP_UP' ? 'Top Up Saldo' : tx.merchantName || 'Pembayaran';
    return title.toLowerCase().includes(searchQuery.toLowerCase()) || 
           tx.type.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-6 max-w-7xl mx-auto w-full">
      <section className="mb-2">
        <h2 className="font-display-lg text-display-lg">Riwayat Transaksi</h2>
        <p className="font-body-md text-body-md text-secondary">Semua aktivitas keuangan Anda dalam satu tempat.</p>
      </section>

      <div className="bg-surface rounded-3xl p-8 premium-shadow">
        
        <div className="mb-6 relative">
          <input 
            type="text" 
            placeholder="Cari merchant atau tipe transaksi..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-on-surface"
          />
          <img src={SearchIcon} alt="Search" className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 opacity-50" />
        </div>

        <div className="space-y-6">
          {loading ? (
            <div className="text-center py-8 opacity-70">
              <p className="font-bold text-secondary">Memuat riwayat...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-8 opacity-70">
              <p className="font-bold text-secondary">{searchQuery ? 'Data tidak ditemukan' : '(BELUM ADA RIWAYAT TRANSAKSI)'}</p>
            </div>
          ) : (
            paginated.map((tx, i) => {
              const isPositive = tx.type === 'TOP_UP';
              const icon = isPositive ? AddCardIcon : ShoppingCartIcon;
              const iconBg = isPositive ? 'bg-emerald-100' : 'bg-red-100';
              const title = tx.type === 'TOP_UP' ? 'Top Up Saldo' : tx.merchantName || 'Pembayaran';
              const prefix = isPositive ? '+' : '-';
              
              const dateObj = new Date(tx.createdAt);
              const dateStr = dateObj.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
              const timeStr = dateObj.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

              let statusColor = 'text-yellow-500';
              if(tx.status === 'SUCCESS') statusColor = 'text-[#10b981]';
              if(tx.status === 'FAILED') statusColor = 'text-[#ef4444]';

              return (
                <div key={tx.transactionId || i} className="flex items-center justify-between p-2 hover:bg-surface-container-low rounded-2xl transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${iconBg} rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform`}>
                      <img src={icon} alt={title} className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-body-lg text-body-lg font-bold">{title}</p>
                      <p className="text-secondary text-sm">{`${tx.type} • ${dateStr} • ${timeStr}`}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-headline-sm text-headline-sm ${isPositive ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>{`${prefix}Rp ${formatRp(tx.amount)}`}</p>
                    <p className={`text-[10px] font-bold uppercase ${statusColor}`}>{tx.status}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-between border-t border-outline-variant/30 pt-6">
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-xl bg-surface-container-low text-on-surface font-bold disabled:opacity-50 hover:bg-surface-container-highest transition-colors"
            >
              Sebelumnya
            </button>
            <span className="text-sm font-bold text-secondary">
              Halaman {currentPage} dari {totalPages}
            </span>
            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-xl bg-surface-container-low text-on-surface font-bold disabled:opacity-50 hover:bg-surface-container-highest transition-colors"
            >
              Selanjutnya
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
