package com.IWallet.iwallet.controller;

import com.IWallet.iwallet.dto.UserResponseDTO;
import com.IWallet.iwallet.model.User;
import com.IWallet.iwallet.repository.UserRepository;
import com.IWallet.iwallet.dto.ChangePinRequestDTO;
import com.IWallet.iwallet.dto.ChangePasswordRequestDTO;
import com.IWallet.iwallet.dto.DeleteAccountRequestDTO;
import com.IWallet.iwallet.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = {"http://localhost:5173", "http://127.0.0.1:5173"})
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;
    private final AuthService authService;

    @GetMapping("/profile")
    public ResponseEntity<?> getProfile(Principal principal) {
        String publicId = principal.getName();
        User user = userRepository.findByPublicId(publicId)
                .orElseThrow(() -> new RuntimeException("User tidak ditemukan"));

        UserResponseDTO response = new UserResponseDTO();
        response.setPublicId(user.getPublicId());
        response.setFullName(user.getFullName());
        response.setEmail(user.getEmail());
        response.setPhoneNumber(user.getPhoneNumber());
        response.setStatus(user.getStatus());

        return ResponseEntity.ok(response);
    }

    @PutMapping("/profile")
    public ResponseEntity<?> updateProfile(@RequestBody Map<String, String> request, Principal principal) {
        String publicId = principal.getName();
        User user = userRepository.findByPublicId(publicId).orElseThrow(() -> new RuntimeException("User tidak ditemukan"));
        if (request.containsKey("fullName")) user.setFullName(request.get("fullName"));
        if (request.containsKey("email")) user.setEmail(request.get("email"));
        if (request.containsKey("phone")) user.setPhoneNumber(request.get("phone"));
        userRepository.save(user);
        UserResponseDTO response = new UserResponseDTO();
        response.setPublicId(user.getPublicId());
        response.setFullName(user.getFullName());
        response.setEmail(user.getEmail());
        response.setPhoneNumber(user.getPhoneNumber());
        response.setStatus(user.getStatus());
        return ResponseEntity.ok(response);
    }

    @PutMapping("/change-pin")
    public ResponseEntity<?> changePin(@RequestBody ChangePinRequestDTO request, Principal principal) {
        String publicId = principal.getName();
        authService.changePin(publicId, request.getOldPin(), request.getNewPin());
        return ResponseEntity.ok(Map.of("message", "PIN berhasil diubah"));
    }

    @PutMapping("/change-password")
    public ResponseEntity<?> changePassword(@RequestBody ChangePasswordRequestDTO request, Principal principal) {
        String publicId = principal.getName();
        authService.changePassword(publicId, request.getOldPassword(), request.getNewPassword());
        return ResponseEntity.ok(Map.of("message", "Password berhasil diubah"));
    }

    @DeleteMapping("/delete-account")
    public ResponseEntity<?> deleteAccount(@RequestBody DeleteAccountRequestDTO request, Principal principal) {
        String publicId = principal.getName();
        authService.deleteUser(publicId, request.getPassword());
        return ResponseEntity.ok(Map.of("message", "Akun berhasil dihapus"));
    }
}
