#!/bin/bash
TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzZjUxOTFmZS0wZmEzLTQ3ODctYTc3ZC1iZDIyMGM1ZmEzMDAiLCJpYXQiOjE3ODYzOTIyNTcsImV4cCI6MTc4NjM5MzE1N30.UPg4V6IJ9spe4ZlFaSJ1B1YMTV1OKpPVNovY4pNoMXw"
# Ganti dengan UUID Merchant dan PIN kamu
BODY='{"merchantPublicId": "86b2249e-94f5-11f1-9084-005056c00001", "amount": 50000.00, "pin": "123456"}'

echo "Membangunkan THE ULTIMATE BOSS... Menembak 10 pembayaran @ 50.000 secara brutal!"
for i in {1..10}
do
    # Generate UUID acak baru setiap request agar lolos dari Idempotency Check
    KEY=$(uuidgen 2>/dev/null || echo $RANDOM$RANDOM$RANDOM)
    
    curl -s -X POST http://localhost:8080/api/payment/pay \
        -H "Authorization: Bearer $TOKEN" \
        -H "Idempotency-Key: $KEY" \
        -H "Content-Type: application/json" \
        -d "$BODY" &
done

wait
echo ""
echo "Serangan selesai! Silakan cek saldomu..."