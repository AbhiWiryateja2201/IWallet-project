package com.IWallet.iwallet.security;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration // Memberitahu Spring bahwa ini adalah kelas konfigurasi yang mendefinisikan bean
@EnableWebSecurity // Mengaktifkan fitur keamanan web Spring Security secara custom
@RequiredArgsConstructor // Lombok: Membuat constructor otomatis untuk injeksi JwtAuthenticationFilter
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .csrf(csrf -> csrf.disable())
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            .httpBasic(AbstractHttpConfigurer::disable)
            .formLogin(AbstractHttpConfigurer::disable)
            .logout(AbstractHttpConfigurer::disable)
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/auth/**").permitAll()
                        .anyRequest().authenticated())
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:5173", "http://127.0.0.1:5173"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    public org.springframework.security.core.userdetails.UserDetailsService userDetailsService() {
        //Return an empty in-memory user manager to disable Spring Boot's auto-generated password
        return new org.springframework.security.provisioning.InMemoryUserDetailsManager();
    }
}

/*
 ┃ @Configuration & @EnableWebSecurity:
 ┃ Dua anotasi ini mengubah kelas biasa menjadi pusat pengaturan keamanan aplikasi.
 ┃ Di sini kita mematikan fitur default Spring Security (seperti form login & HTTP Basic)
 ┃ dan mengatur aturan baru.
 ┃
 ┃ SecurityFilterChain:
 ┃ Ini adalah gerbang utama yang menyaring semua request masuk. Kita mengonfigurasi
 ┃ CORS, mematikan CSRF (karena kita pakai JWT), membuat session menjadi STATELESS 
 ┃ (tidak menyimpan sesi di memori server), dan menentukan endpoint mana yang bebas 
 ┃ diakses (seperti /api/auth/**) serta mana yang harus memiliki token.
 ┃
 ┃ addFilterBefore:
 ┃ Kita menyelipkan JwtAuthenticationFilter buatan kita agar berjalan sebelum
 ┃ filter autentikasi bawaan Spring. Jadi token JWT akan diperiksa lebih dulu.
 */