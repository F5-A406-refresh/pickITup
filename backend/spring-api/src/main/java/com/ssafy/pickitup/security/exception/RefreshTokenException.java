package com.ssafy.pickitup.security.exception;

import java.util.NoSuchElementException;

public class RefreshTokenException extends NoSuchElementException {

    public RefreshTokenException(String message) {
        super(message);
    }
}
