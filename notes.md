Aim:
ACID
Database Locking (via @Transactional annotations)

Characteristics:
Domain-Driven Design
Layered Architecture

Watchout for:
Concurrency/Race Condition (Double spending)
    sol: pessimistic locking
Precision loss
Idempotency
IDOR/Enumeration/Data exploitation

Notes/To Implement:
SQL analysis
    change repository.delete(user) --> soft delete, change STATUS ONLY to INACTIVE or DELETED

    change amount and balance to java.math. BigDecimal

    add 
        @Column(name = "idempotency_key", unique = true, nullable = false)
    in Transactions.java

Tell Abhi:
    Frontend Sync: Beritahu rekan tim frontend-mu (Abhi) bahwa dia wajib men-generate uuid() baru setiap kali merender halaman Top Up atau Pembayaran, dan menyisipkannya di payload request (misal: "idempotencyKey": "uuid-v4-string")
