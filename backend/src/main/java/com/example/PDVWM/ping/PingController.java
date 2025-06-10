package com.example.PDVWM.ping;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api")

public class PingController {

    @GetMapping("/ping")
    public String ping() {
        return "pong";
    }
    
    @GetMapping("/status")
    public StatusResponse status() {
        return new StatusResponse("ok", System.currentTimeMillis());
    }

    static class StatusResponse {
        public String status;
        public long timestamp;

        public StatusResponse(String status, long timestamp) {
            this.status = status;
            this.timestamp = timestamp;
        }
    }
}
