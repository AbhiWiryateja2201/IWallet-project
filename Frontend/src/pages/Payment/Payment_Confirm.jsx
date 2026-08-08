export default function PaymentConfirm() {
  return (
    <div style={{width: '100%', height: '100%', paddingLeft: 256, position: 'relative', background: 'linear-gradient(0deg, #FEF7FF 0%, #FEF7FF 100%), white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
    <div style={{width: 1020, minHeight: 1024, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
        <div style={{alignSelf: 'stretch', height: 64, paddingLeft: 40, paddingRight: 40, background: 'rgba(255, 255, 255, 0.80)', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderBottom: '1px rgba(204, 195, 216, 0.30) solid', backdropFilter: 'blur(12px)', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#630ED4', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', lineHeight: 28, wordWrap: 'break-word'}}>Konfirmasi Pembayaran</div>
            </div>
            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'flex'}}>
                <div style={{paddingTop: 1.62, paddingBottom: 0.01, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{width: 16, height: 20, background: '#4A4455'}} />
                    <div style={{width: 8, height: 8, left: 12.02, top: -4, position: 'absolute', background: '#BA1A1A', borderRadius: 9999}} />
                </div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{width: 20, height: 20, background: '#4A4455'}} />
                </div>
                <div style={{paddingLeft: 16, borderLeft: '1px rgba(204, 195, 216, 0.30) solid', justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'flex'}}>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', display: 'flex'}}>
                            <div style={{textAlign: 'right', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#1D1A24', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', lineHeight: 16, letterSpacing: 0.12, wordWrap: 'break-word'}}>Alex Johnson</div>
                        </div>
                        <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', display: 'flex'}}>
                            <div style={{textAlign: 'right', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 10, fontFamily: 'Inter', fontWeight: '500', lineHeight: 15, wordWrap: 'break-word'}}>Premium Member</div>
                        </div>
                    </div>
                    <img style={{width: 40, height: 40, position: 'relative', borderRadius: 9999, border: '2px #7C3AED solid'}} src="https://placehold.co/40x40" />
                </div>
            </div>
        </div>
        <div style={{width: '100%', maxWidth: 1280, padding: 40, justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{flex: '1 1 0', alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', padding: 24, background: 'white', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.03)', borderRadius: 24, outline: '1px rgba(204, 195, 216, 0.10) solid', outlineOffset: '-1px', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
                    <div style={{width: 80, height: 80, background: '#F9F1FF', overflow: 'hidden', borderRadius: 16, outline: '1px rgba(204, 195, 216, 0.20) solid', outlineOffset: '-1px', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                        <img style={{flex: '1 1 0', alignSelf: 'stretch', position: 'relative'}} src="https://placehold.co/78x78" />
                    </div>
                    <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                        <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                            <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#630ED4', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', textTransform: 'uppercase', lineHeight: 15, letterSpacing: 0.50, wordWrap: 'break-word'}}>MERCHANT PARTNER</div>
                        </div>
                        <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                            <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#1D1A24', fontSize: 24, fontFamily: 'Inter', fontWeight: '600', lineHeight: 32, wordWrap: 'break-word'}}>The Daily Grind Coffee</div>
                        </div>
                        <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                <div style={{width: 12.83, height: 12.25, background: '#4A4455'}} />
                            </div>
                            <div style={{width: 189.44, height: 21, position: 'relative'}}>
                                <div style={{left: 0, top: -0.50, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>Merchant ID: </div>
                                <div style={{left: 88.61, top: 1, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 14, fontFamily: 'Liberation Mono', fontWeight: '700', lineHeight: 20, wordWrap: 'break-word'}}>MCH-99283-ID</div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: 128.66, height: 24, position: 'relative'}}>
                        <div style={{paddingLeft: 12, paddingRight: 12, paddingTop: 3.50, paddingBottom: 3.50, left: 0, top: 2, position: 'absolute', background: '#F3EBFA', borderRadius: 9999, justifyContent: 'flex-end', alignItems: 'flex-start', display: 'inline-flex'}}>
                            <div style={{textAlign: 'right', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#630ED4', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: 16, letterSpacing: 0.12, wordWrap: 'break-word'}}>Verified Merchant</div>
                        </div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', padding: 32, background: 'white', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.03)', borderRadius: 24, outline: '1px rgba(204, 195, 216, 0.10) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 15.50, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                            <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#1D1A24', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', lineHeight: 28, wordWrap: 'break-word'}}>Nominal Pembayaran</div>
                        </div>
                        <div style={{paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, background: '#F9F1FF', borderRadius: 16, justifyContent: 'flex-start', alignItems: 'center', gap: 7.99, display: 'flex'}}>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                <div style={{width: 19, height: 18, background: '#630ED4'}} />
                            </div>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column'}}><span style={{color: '#4A4455', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: 16, letterSpacing: 0.12, wordWrap: 'break-word'}}>Saldo: </span><span style={{color: '#1D1A24', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: 16, letterSpacing: 0.12, wordWrap: 'break-word'}}>Rp 1.250.000</span></div>
                            </div>
                        </div>
                    </div>
                    <div style={{alignSelf: 'stretch', paddingTop: 8.50, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                        <div style={{alignSelf: 'stretch', paddingTop: 32, paddingBottom: 32, paddingLeft: 80, paddingRight: 24, background: 'white', overflow: 'hidden', borderRadius: 16, outline: '2px rgba(204, 195, 216, 0.20) solid', outlineOffset: '-2px', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex'}}>
                            <div style={{flex: '1 1 0', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#1D1A24', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', lineHeight: 40, wordWrap: 'break-word'}}>150.000</div>
                            </div>
                        </div>
                        <div style={{height: 40, left: 24, top: 42.50, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                            <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'rgba(74, 68, 85, 0.50)', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', lineHeight: 40, wordWrap: 'break-word'}}>Rp</div>
                        </div>
                        <div style={{left: 832, top: 82.50, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                            <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                <div style={{width: 18, height: 18, background: '#630ED4'}} />
                            </div>
                        </div>
                    </div>
                    <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                            <div style={{width: 11.67, height: 11.67, background: '#4A4455'}} />
                        </div>
                        <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>Pastikan nominal pembayaran sudah sesuai dengan tagihan merchant.</div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
                    <div style={{flex: '1 1 0', padding: 24, background: 'white', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.03)', borderRadius: 24, outline: '1px rgba(204, 195, 216, 0.10) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
                            <div style={{width: 48, height: 48, background: '#FFDCC6', borderRadius: 12, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <div style={{width: 19.98, height: 20, background: '#7D3D00'}} />
                                </div>
                            </div>
                            <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                                    <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#1D1A24', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', lineHeight: 16, letterSpacing: 0.12, wordWrap: 'break-word'}}>Promo Cashback</div>
                                </div>
                                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                                    <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', lineHeight: 15, wordWrap: 'break-word'}}>2 Voucher tersedia</div>
                                </div>
                            </div>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                <div style={{width: 7.40, height: 12, background: '#4A4455'}} />
                            </div>
                        </div>
                    </div>
                    <div style={{flex: '1 1 0', padding: 24, background: 'white', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.03)', borderRadius: 24, outline: '1px rgba(204, 195, 216, 0.10) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
                            <div style={{width: 48, height: 48, background: '#EADDFF', borderRadius: 12, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <div style={{width: 22, height: 16, background: '#630ED4'}} />
                                </div>
                            </div>
                            <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                                    <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#1D1A24', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', lineHeight: 16, letterSpacing: 0.12, wordWrap: 'break-word'}}>Metode Bayar</div>
                                </div>
                                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                                    <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', lineHeight: 15, wordWrap: 'break-word'}}>IWallet Balance</div>
                                </div>
                            </div>
                            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                <div style={{width: 7.40, height: 12, background: '#4A4455'}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style={{width: 256, height: 1024, padding: 16, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRight: '1px rgba(204, 195, 216, 0.20) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
        <div style={{alignSelf: 'stretch', paddingBottom: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
            <div style={{alignSelf: 'stretch', paddingLeft: 8, paddingRight: 8, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                <div style={{width: 39.98, height: 40, background: 'linear-gradient(135deg, #7C3AED 0%, #630ED4 100%)', borderRadius: 12, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                    <img style={{flex: '1 1 0', alignSelf: 'stretch', position: 'relative', borderRadius: 12}} src="https://placehold.co/40x40" />
                </div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                        <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#630ED4', fontSize: 20, fontFamily: 'Inter', fontWeight: '900', lineHeight: 28, wordWrap: 'break-word'}}>IWallet</div>
                    </div>
                    <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                        <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', textTransform: 'uppercase', lineHeight: 15, letterSpacing: 1, wordWrap: 'break-word'}}>PREMIUM DIGITAL<br/>WALLET</div>
                    </div>
                </div>
            </div>
        </div>
        <div style={{alignSelf: 'stretch', flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
            <div style={{alignSelf: 'stretch', paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: '#7C3AED', borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{width: 18, height: 18, background: '#EDE0FF'}} />
                </div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#EDE0FF', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: 16, letterSpacing: 0.12, wordWrap: 'break-word'}}>Dashboard</div>
                </div>
            </div>
            <div style={{alignSelf: 'stretch', paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{width: 19, height: 18, background: '#4A4455'}} />
                </div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: 16, letterSpacing: 0.12, wordWrap: 'break-word'}}>Wallet</div>
                </div>
            </div>
            <div style={{alignSelf: 'stretch', paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{width: 18, height: 18, background: '#4A4455'}} />
                </div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: 16, letterSpacing: 0.12, wordWrap: 'break-word'}}>History</div>
                </div>
            </div>
            <div style={{alignSelf: 'stretch', paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{width: 16, height: 16, background: '#4A4455'}} />
                </div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: 16, letterSpacing: 0.12, wordWrap: 'break-word'}}>Profile</div>
                </div>
            </div>
        </div>
        <div style={{alignSelf: 'stretch', paddingTop: 16, borderTop: '1px rgba(204, 195, 216, 0.20) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
            <div style={{alignSelf: 'stretch', paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{width: 20.10, height: 20, background: '#4A4455'}} />
                </div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: 16, letterSpacing: 0.12, wordWrap: 'break-word'}}>Settings</div>
                </div>
            </div>
            <div style={{alignSelf: 'stretch', paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{width: 18, height: 18, background: '#BA1A1A'}} />
                </div>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#BA1A1A', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: 16, letterSpacing: 0.12, wordWrap: 'break-word'}}>Logout</div>
                </div>
            </div>
        </div>
    </div>
    <div style={{width: 296, height: 1024, padding: 16, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRight: '1px rgba(204, 195, 216, 0.20) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
        <div style={{alignSelf: 'stretch', flex: '1 1 0', padding: 32, background: 'white', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.03)', borderRadius: 24, outline: '1px rgba(204, 195, 216, 0.10) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
            <div style={{alignSelf: 'stretch', paddingBottom: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#1D1A24', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', lineHeight: 28, wordWrap: 'break-word'}}>Ringkasan<br/>Transaksi</div>
                </div>
            </div>
            <div style={{alignSelf: 'stretch', height: 357, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
                <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                            <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: 16, letterSpacing: 0.12, wordWrap: 'break-word'}}>Nominal<br/>Transaksi</div>
                        </div>
                        <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                            <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', lineHeight: 15, wordWrap: 'break-word'}}>Subtotal Tagihan</div>
                        </div>
                    </div>
                    <div style={{width: 66, height: 32, position: 'relative'}}>
                        <div style={{width: 70, height: 27, left: 0, top: 0, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#1D1A24', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', lineHeight: 16, letterSpacing: 0.12, wordWrap: 'break-word'}}>Rp 150.000</div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                            <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: 16, letterSpacing: 0.12, wordWrap: 'break-word'}}>Biaya Layanan</div>
                        </div>
                        <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                            <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', lineHeight: 15, wordWrap: 'break-word'}}>IWallet processing fee</div>
                        </div>
                    </div>
                    <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#1D1A24', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', lineHeight: 16, letterSpacing: 0.12, wordWrap: 'break-word'}}>Rp 1.500</div>
                </div>
                <div style={{width: 203, justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{width: 137, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                            <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#16A34A', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: 16, letterSpacing: 0.12, wordWrap: 'break-word'}}>Diskon Promo</div>
                        </div>
                        <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                            <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', lineHeight: 15, wordWrap: 'break-word'}}>Cashback Promo<br/>Kopi</div>
                        </div>
                    </div>
                    <div style={{height: 12, paddingRight: 21.65, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                        <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#16A34A', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', lineHeight: 16, letterSpacing: 0.12, wordWrap: 'break-word'}}>-Rp 5.000</div>
                    </div>
                </div>
                <div style={{alignSelf: 'stretch', paddingTop: 24, borderTop: '1px rgba(204, 195, 216, 0.50) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', height: 54, justifyContent: 'space-between', alignItems: 'flex-end', display: 'inline-flex'}}>
                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                            <div style={{width: 109, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                                <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#1D1A24', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', lineHeight: 28, wordWrap: 'break-word'}}>Total Bayar</div>
                            </div>
                            <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                                <div style={{width: 89, justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', lineHeight: 15, wordWrap: 'break-word'}}>Sudah termasuk pajak &amp; biaya</div>
                            </div>
                        </div>
                        <div style={{width: 100, height: 43, position: 'relative'}}>
                            <div style={{width: 106, height: 27, left: 2, top: 11, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#630ED4', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', lineHeight: 32, wordWrap: 'break-word'}}>Rp 146.500</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{alignSelf: 'stretch', paddingTop: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', paddingTop: 20, paddingBottom: 20, paddingRight: 14.64, position: 'relative', background: 'linear-gradient(149deg, #7C3AED 0%, #630ED4 100%)', borderRadius: 16, justifyContent: 'center', alignItems: 'center', gap: 26.64, display: 'inline-flex'}}>
                        <div style={{width: 197, height: 96, left: 0, top: 0, position: 'absolute', background: 'rgba(255, 255, 255, 0)', boxShadow: '0px 4px 6px -4px rgba(99, 14, 212, 0.20), 0px 10px 15px -3px rgba(99, 14, 212, 0.20)', borderRadius: 16}} />
                        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                            <div style={{width: 16, height: 20, background: 'white'}} />
                        </div>
                        <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', lineHeight: 28, wordWrap: 'break-word'}}>Bayar<br/>Sekarang</div>
                    </div>
                    <div style={{alignSelf: 'stretch', paddingTop: 16, paddingBottom: 16, borderRadius: 16, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 12, fontFamily: 'Inter', fontWeight: '500', lineHeight: 16, letterSpacing: 0.12, wordWrap: 'break-word'}}>Batalkan Transaksi</div>
                    </div>
                </div>
            </div>
        </div>
        <div style={{alignSelf: 'stretch', padding: 16, background: '#F9F1FF', borderRadius: 16, justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
            <div style={{width: 34.83, height: 40, background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 9999, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                    <div style={{width: 16, height: 20, background: '#630ED4'}} />
                </div>
            </div>
            <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#1D1A24', fontSize: 11, fontFamily: 'Inter', fontWeight: '700', lineHeight: 16.50, wordWrap: 'break-word'}}>Pembayaran Aman</div>
                </div>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#4A4455', fontSize: 10, fontFamily: 'Inter', fontWeight: '400', lineHeight: 15, wordWrap: 'break-word'}}>Enkripsi 256-bit AES tingkat<br/>bank.</div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}