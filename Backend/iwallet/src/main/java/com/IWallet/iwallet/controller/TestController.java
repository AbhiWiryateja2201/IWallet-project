package com.IWallet.iwallet.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // Menandakan komponen ini adalah REST Controller
@RequestMapping("/api") // Mendefinisikan base URL /api
@CrossOrigin(origins = "http://localhost:5173") // Mengizinkan cross-origin request dari React frontend
public class TestController {
    
    @GetMapping("/hello") // Menangani request GET pada /api/hello
    public String sayHello() {
        return "Halo dari Spring Boot Backend! Returned from TestController.java."; //localhost:8080/api/hello
    }
}

/*
 ┃ TestController
 ┃
 ┃ Class ini merupakan controller sederhana yang dibuat untuk tujuan pengujian
 ┃ dan verifikasi awal (health check). 
 ┃
 ┃ Fungsinya hanya untuk memastikan bahwa aplikasi backend Spring Boot
 ┃ sudah berjalan dengan baik dan frontend bisa berhasil melakukan 
 ┃ pemanggilan API ke backend (konektivitas dan CORS berfungsi).
 */