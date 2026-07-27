package com.IWallet.iwallet.controller;

import com.IWallet.iwallet.dto.UserResponseDTO;
import com.IWallet.iwallet.model.User;
import com.IWallet.iwallet.service.AuthService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController //tells springboot that this class is API
@RequestMapping("/api/auth") //declare url base for this specific API, so all route begins with http://localhost:8080/api/auth
//this annotation below prevents CORS policy, so react can access the API (by default CORS blocks differnet address requests.)
@CrossOrigin(origins = {"http://localhost:5173", "http://127.0.0.1:5173"})

public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register") //menerima request POST di URL /api/auth/register
    public ResponseEntity<?> register(@RequestBody User user) { //annotation on this line automatically translates received JSON into user object.
        try {
            UserResponseDTO registeredUser = authService.register(user);
            return ResponseEntity.ok(registeredUser);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> request) {
        try {
            String email = request.get("email");
            String password = request.get("password");
            UserResponseDTO userResponse = authService.login(email, password);
            return ResponseEntity.ok(userResponse);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}