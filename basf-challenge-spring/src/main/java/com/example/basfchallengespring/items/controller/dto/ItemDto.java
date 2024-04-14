package com.example.basfchallengespring.items.controller.dto;

import jakarta.annotation.Nullable;

public record ItemDto(@Nullable Long id, String name, String description) {
}
