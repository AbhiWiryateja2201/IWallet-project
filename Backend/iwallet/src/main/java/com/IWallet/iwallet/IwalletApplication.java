package com.IWallet.iwallet;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication // Anotasi utama penanda aplikasi Spring Boot (mencakup konfigurasi otomatis, component scan, dll)
public class IwalletApplication {

	public static void main(String[] args) {
		SpringApplication.run(IwalletApplication.class, args);
	}

}

/*
 ┃ IwalletApplication
 ┃
 ┃ Ini adalah class utama (entry point) dari seluruh aplikasi backend Spring Boot.
 ┃
 ┃ Cara Kerja:
 ┃ - Anotasi `@SpringBootApplication` bertindak sebagai komandan yang menyuruh Spring:
 ┃   "Tolong pindai (scan) semua folder di bawah package ini untuk mencari 
 ┃    Controller, Service, Repository, dan konfigurasi lainnya, lalu rakit 
 ┃    mereka semua secara otomatis."
 ┃ - Method `main` adalah titik awal eksekusi program ketika aplikasi dijalankan.
 ┃   `SpringApplication.run()` akan menghidupkan server bawaan (biasanya Tomcat) 
 ┃   dan mulai mendengarkan request masuk.
 */
