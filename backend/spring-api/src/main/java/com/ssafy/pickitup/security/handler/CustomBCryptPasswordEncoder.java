package com.ssafy.pickitup.security.handler;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class CustomBCryptPasswordEncoder extends BCryptPasswordEncoder {
}