package com.example.basfchallengespring.items.mapper;

import com.example.basfchallengespring.items.controller.dto.ItemDto;
import com.example.basfchallengespring.items.entity.ItemEntity;
import lombok.experimental.UtilityClass;

@UtilityClass
public class ItemMapper {

    public ItemDto mapItemEntityToDto(ItemEntity itemEntity) {
        return new ItemDto(itemEntity.getId(), itemEntity.getName(), itemEntity.getDescription());
    }

}
