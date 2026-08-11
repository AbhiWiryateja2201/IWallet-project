package com.IWallet.iwallet;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication // Anotasi utama penanda aplikasi Spring Boot (mencakup konfigurasi otomatis, component scan, dll)
public class IwalletApplication {

	public static void main(String[] args) {
		SpringApplication.run(IwalletApplication.class, args);
	}

}