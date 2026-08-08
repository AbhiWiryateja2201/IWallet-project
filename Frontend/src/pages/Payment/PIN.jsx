export default function PaymentPin() {
  return (
    <div style={{width: '100%', height: '100%', position: 'relative', background: 'linear-gradient(0deg, #FEF7FF 0%, #FEF7FF 100%), white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', display: 'inline-flex'}}>
    <div style={{width: 256, height: 1008, padding: 16, left: 0, top: 0, position: 'absolute', background: '#F9F1FF', borderRight: '1px rgba(204, 195, 216, 0.20) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
        <div style={{alignSelf: 'stretch', paddingBottom: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
            <div style={{alignSelf: 'stretch', paddingLeft: 8, paddingRight: 8, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                <div style={{width: 40, height: 40, background: '#630ED4', borderRadius: 12, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                    <img style={{flex: '1 1 0', alignSelf: 'stretch', position: 'relative', borderRadius: 12}} src="https://placehold.co/40x40" />
                </div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                        <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#630ED4', fontSize: 20, fontFamily: 'Inter', fontWeight: '900', lineHeight: 28, wordWrap: 'break-word'}}>IWallet</div>
                    </div>
                    <div style={{alignSelf: 'stretch', opacity: 0.70, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                        <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 10, fontFamily: 'Inter', fontWeight: '600', lineHeight: 12, wordWrap: 'break-word'}}>Premium Digital Wallet</div>
                    </div>
                </div>
            </div>
        </div>
        <div style={{alignSelf: 'stretch', flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
            <div style={{alignSelf: 'stretch', padding: 12, borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{width: 18, height: 18, background: '#4A4455'}} />
                </div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Dashboard</div>
                </div>
            </div>
            <div style={{alignSelf: 'stretch', padding: 12, background: '#630ED4', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{width: 19, height: 18, background: 'white'}} />
                </div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Wallet</div>
                </div>
            </div>
            <div style={{alignSelf: 'stretch', padding: 12, borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{width: 18, height: 18, background: '#4A4455'}} />
                </div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>History</div>
                </div>
            </div>
            <div style={{alignSelf: 'stretch', padding: 12, borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{width: 16, height: 16, background: '#4A4455'}} />
                </div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Profile</div>
                </div>
            </div>
        </div>
        <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
            <div style={{alignSelf: 'stretch', paddingTop: 12, paddingBottom: 12, background: '#7C3AED', borderRadius: 12, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#EDE0FF', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Add Funds</div>
            </div>
            <div style={{alignSelf: 'stretch', padding: 12, borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{width: 18, height: 18, background: '#4A4455'}} />
                </div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Logout</div>
                </div>
            </div>
        </div>
    </div>
    <div style={{alignSelf: 'stretch', height: 64, paddingLeft: 256, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
        <div style={{alignSelf: 'stretch', height: 64, paddingLeft: 20, paddingRight: 20, background: 'rgba(255, 255, 255, 0.80)', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderBottom: '1px rgba(204, 195, 216, 0.30) solid', backdropFilter: 'blur(12px)', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#630ED4', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', lineHeight: 40, wordWrap: 'break-word'}}>Verifikasi PIN</div>
            </div>
            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'flex'}}>
                <div style={{position: 'relative', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                    <div style={{width: 256, paddingTop: 10, paddingBottom: 10, paddingLeft: 40, paddingRight: 16, background: 'white', overflow: 'hidden', borderRadius: 9999, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <div style={{alignSelf: 'stretch', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                            <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#6B7280', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Search transactions...</div>
                        </div>
                    </div>
                    <div style={{width: 18, height: 18, left: 15, top: 11, position: 'absolute', background: '#4A4455'}} />
                </div>
                <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <div style={{width: 16, height: 20, background: '#4A4455'}} />
                    </div>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <div style={{width: 20, height: 20, background: '#4A4455'}} />
                    </div>
                    <div style={{width: 40, height: 40, overflow: 'hidden', borderRadius: 9999, outline: '2px rgba(99, 14, 212, 0.20) solid', outlineOffset: '-2px', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <img style={{alignSelf: 'stretch', flex: '1 1 0', position: 'relative'}} src="https://placehold.co/36x36" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style={{width: 1052, minHeight: 944, paddingTop: 24, paddingBottom: 472, paddingLeft: 24, paddingRight: 24, position: 'relative', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
        <div style={{width: 384, height: 384, left: 588, top: 80, position: 'absolute', background: 'rgba(99, 14, 212, 0.05)', boxShadow: '64px 64px 64px ', borderRadius: 9999, filter: 'blur(32px)'}} />
        <div style={{width: 320, height: 320, left: 80, top: 544, position: 'absolute', background: 'rgba(125, 61, 0, 0.05)', boxShadow: '64px 64px 64px ', borderRadius: 9999, filter: 'blur(32px)'}} />
        <div style={{alignSelf: 'stretch', opacity: 0.30, boxShadow: '4px 4px 4px ', filter: 'blur(2px)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
            <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
                <div style={{width: 318.66, height: 160, padding: 24, background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 24, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                        <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: 16, letterSpacing: 0.12, wordWrap: 'break-word'}}>Total Balance</div>
                    </div>
                    <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                        <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#630ED4', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', lineHeight: 40, wordWrap: 'break-word'}}>$42,920.00</div>
                    </div>
                </div>
                <div style={{width: 318.67, height: 160, padding: 24, background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 24, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                        <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: 16, letterSpacing: 0.12, wordWrap: 'break-word'}}>Monthly Spend</div>
                    </div>
                    <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                        <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#7D3D00', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', lineHeight: 40, wordWrap: 'break-word'}}>$3,450.00</div>
                    </div>
                </div>
                <div style={{width: 318.66, height: 160, padding: 24, background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 24, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                        <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: 16, letterSpacing: 0.12, wordWrap: 'break-word'}}>Active Cards</div>
                    </div>
                    <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                        <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#1D1A24', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', lineHeight: 40, wordWrap: 'break-word'}}>3 Units</div>
                    </div>
                </div>
            </div>
            <div style={{alignSelf: 'stretch', height: 256, background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 24}} />
        </div>
        <div style={{width: 1052, height: 944, left: 0, top: 0, position: 'absolute', background: 'rgba(223, 215, 230, 0.20)', backdropFilter: 'blur(6px)', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
            <div style={{width: 448, maxWidth: 448, padding: 32, background: 'rgba(255, 255, 255, 0.85)', boxShadow: '0px 20px 50px rgba(99, 14, 212, 0.15)', borderRadius: 32, outline: '1px rgba(255, 255, 255, 0.50) solid', outlineOffset: '-1px', backdropFilter: 'blur(8px)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{width: 64, height: 88, paddingBottom: 24, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{width: 64, height: 64, background: 'rgba(124, 58, 237, 0.10)', borderRadius: 16, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                            <div style={{width: 24, height: 31.50, background: '#630ED4'}} />
                        </div>
                    </div>
                </div>
                <div style={{paddingBottom: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#1D1A24', fontSize: 24, fontFamily: 'Inter', fontWeight: '600', lineHeight: 32, wordWrap: 'break-word'}}>Masukkan PIN Anda</div>
                </div>
                <div style={{paddingBottom: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{paddingLeft: 14.45, paddingRight: 14.45, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                        <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>Konfirmasi pembayaran Anda dengan memasukkan 6<br/>digit PIN keamanan.</div>
                    </div>
                </div>
                <div style={{paddingBottom: 40, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                        <div style={{width: 16, height: 16, borderRadius: 9999, border: '2px rgba(99, 14, 212, 0.30) solid'}} />
                        <div style={{width: 16, height: 16, borderRadius: 9999, border: '2px rgba(99, 14, 212, 0.30) solid'}} />
                        <div style={{width: 16, height: 16, borderRadius: 9999, border: '2px rgba(99, 14, 212, 0.30) solid'}} />
                        <div style={{width: 16, height: 16, borderRadius: 9999, border: '2px rgba(99, 14, 212, 0.30) solid'}} />
                        <div style={{width: 16, height: 16, borderRadius: 9999, border: '2px rgba(99, 14, 212, 0.30) solid'}} />
                        <div style={{width: 16, height: 16, borderRadius: 9999, border: '2px rgba(99, 14, 212, 0.30) solid'}} />
                    </div>
                </div>
                <div style={{width: 300, maxWidth: 300, paddingBottom: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{width: '100%', maxWidth: 300, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <div style={{width: 56, height: 56, borderRadius: 9999, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', lineHeight: 28, wordWrap: 'break-word'}}>1</div>
                        </div>
                        <div style={{width: 56, height: 56, borderRadius: 9999, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', lineHeight: 28, wordWrap: 'break-word'}}>2</div>
                        </div>
                        <div style={{width: 56, height: 56, borderRadius: 9999, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', lineHeight: 28, wordWrap: 'break-word'}}>3</div>
                        </div>
                        <div style={{width: 56, height: 56, borderRadius: 9999, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', lineHeight: 28, wordWrap: 'break-word'}}>4</div>
                        </div>
                        <div style={{width: 56, height: 56, borderRadius: 9999, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', lineHeight: 28, wordWrap: 'break-word'}}>5</div>
                        </div>
                        <div style={{width: 56, height: 56, borderRadius: 9999, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', lineHeight: 28, wordWrap: 'break-word'}}>6</div>
                        </div>
                        <div style={{width: 56, height: 56, borderRadius: 9999, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', lineHeight: 28, wordWrap: 'break-word'}}>7</div>
                        </div>
                        <div style={{width: 56, height: 56, borderRadius: 9999, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', lineHeight: 28, wordWrap: 'break-word'}}>8</div>
                        </div>
                        <div style={{width: 56, height: 56, borderRadius: 9999, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', lineHeight: 28, wordWrap: 'break-word'}}>9</div>
                        </div>
                        <div style={{width: 56, height: 56, borderRadius: 9999, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', lineHeight: 28, wordWrap: 'break-word'}}>0</div>
                        </div>
                        <div style={{width: 56, height: 56, borderRadius: 9999, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                                <div style={{width: 20, height: 16, background: '#4A4455'}} />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#630ED4', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Lupa PIN?</div>
                </div>
                <div style={{alignSelf: 'stretch', paddingTop: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                        <div style={{flex: '1 1 0', paddingLeft: 24, paddingRight: 24, paddingTop: 16, paddingBottom: 16, background: '#E1E3E4', borderRadius: 16, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#626566', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Cancel</div>
                        </div>
                        <div style={{flex: '1 1 0', paddingLeft: 24, paddingRight: 24, paddingTop: 16, paddingBottom: 16, opacity: 0.50, background: '#630ED4', boxShadow: '0px 10px 20px rgba(99, 14, 212, 0.20)', borderRadius: 16, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Verify</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}