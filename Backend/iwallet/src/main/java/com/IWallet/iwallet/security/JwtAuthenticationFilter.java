package com.IWallet.iwallet.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Collections;

@Component // Mendaftarkan kelas ini sebagai komponen Spring agar bisa di-inject (Dependency Injection)
@RequiredArgsConstructor // Lombok: Membuat constructor otomatis untuk variabel final (jwtUtil)
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        String authHeader = request.getHeader("Authorization");

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);

            try {
                if (jwtUtil.validateToken(token)) {
                    if (SecurityContextHolder.getContext().getAuthentication() == null) {
                        String publicId = jwtUtil.extractPublicId(token);

                        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                                publicId,
                                null,
                                Collections.emptyList());
                        authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                        SecurityContextHolder.getContext().setAuthentication(authentication);
                    }
                } else {
                    throw new RuntimeException("Invalid or expired token");
                }
            } catch (Exception ex) {
                SecurityContextHolder.clearContext();
                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                response.setContentType("application/json");
                response.getWriter().write("{\"status\": \"error\", \"message\": \"Token expired or invalid\"}");
                return;
            }
        }

        filterChain.doFilter(request, response);
    }
}

/*
 ┃ @Component:
 ┃ Menjadikan filter ini sebagai objek yang dikelola oleh Spring, sehingga kita
 ┃ bisa meng-inject kelas lain ke dalamnya (seperti JwtUtil).
 ┃
 ┃ OncePerRequestFilter:
 ┃ Filter (satpam) ini memastikan bahwa pengecekan token JWT hanya dilakukan
 ┃ satu kali saja untuk setiap request yang masuk ke server.
 ┃
 ┃ Cara Kerja:
 ┃ Filter ini akan mengambil header "Authorization" dari request. Jika formatnya
 ┃ benar ("Bearer <token>"), ia akan memvalidasi token tersebut menggunakan JwtUtil.
 ┃ Jika token valid, filter akan mengekstrak "publicId" dan membuat semacam "KTP virtual"
 ┃ (UsernamePasswordAuthenticationToken) lalu menyimpannya di SecurityContextHolder
 ┃ agar dikenali sebagai pengguna yang sah oleh sistem.
 */