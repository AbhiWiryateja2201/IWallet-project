package com.IWallet.iwallet.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class TestController {
    
    @GetMapping("/hello")
    public String sayHello() {
        return "Halo dari Spring Boot Backend! Returned from TestController.java."; //localhost:8080/api/hello
    }
}