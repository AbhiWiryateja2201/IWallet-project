-- Active: 1782337206480@@localhost@3306@db_iwallet
select * from users;
select * from merchants;
show tables;

INSERT INTO merchants (public_id, merchant_name, qr_code) SELECT UUID(), 'Toko Dummy', 'QR123' FROM DUAL WHERE NOT EXISTS (SELECT 1 FROM merchants);
SELECT public_id FROM merchants LIMIT 1;