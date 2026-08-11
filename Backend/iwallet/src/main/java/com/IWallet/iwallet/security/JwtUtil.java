package com.IWallet.iwallet.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.function.Function;

@Component // Menandakan ini adalah komponen utility yang dapat disuntikkan oleh Spring (Dependency Injection)
public class JwtUtil {

    private static final long EXPIRATION_MS = 900000L;

    @Value("${jwt.secret}")
    private String secret;

    private SecretKey signingKey;

    @PostConstruct // Anotasi Spring: method ini dieksekusi otomatis setelah bean selesai dibuat dan di-inject
    void init() {
        this.signingKey = Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));
    }

    public String generateToken(String publicId) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + EXPIRATION_MS);

        return Jwts.builder()
                .subject(publicId)
                .issuedAt(now)
                .expiration(expiryDate)
                .signWith(signingKey)
                .compact();
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    public String extractPublicId(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public boolean validateToken(String token) {
        try {
            extractAllClaims(token);
            return true;
        } catch (JwtException | IllegalArgumentException ex) {
            return false;
        }
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parser()
                .verifyWith(signingKey)
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }
}

/*
 ┃ @Component:
 ┃ Membuat JwtUtil menjadi bean Spring sehingga bisa digunakan di mana saja
 ┃ tanpa perlu melakukan "new JwtUtil()".
 ┃
 ┃ @PostConstruct:
 ┃ Berfungsi untuk menginisialisasi sesuatu setelah Spring selesai menyuntikkan
 ┃ dependensi (seperti variabel 'secret' dari application.yml). Di sini kita
 ┃ menggunakannya untuk mengubah secret key menjadi bentuk objek SecretKey
 ┃ (HMAC SHA) yang siap dipakai untuk menandatangani (sign) JWT.
 ┃
 ┃ Fungsi File Ini:
 ┃ JwtUtil adalah mesin pembuat dan pengecek tiket (Token JWT).
 ┃ - generateToken(): Membuat token baru dengan publicId pengguna dan batas kadaluarsa.
 ┃ - validateToken(): Memastikan token tersebut masih berlaku dan tidak dipalsukan
 ┃   (dicocokkan dengan rahasia sistem).
 ┃ - extractPublicId(): Mengambil publicId dari dalam token untuk identifikasi pengguna.
 */