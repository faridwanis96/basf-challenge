package com.example.basfchallengespring.items.service;

import com.example.basfchallengespring.items.controller.dto.ItemDto;
import com.example.basfchallengespring.items.entity.ItemEntity;
import com.example.basfchallengespring.items.mapper.ItemMapper;
import com.example.basfchallengespring.items.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Collection;

@Service
@RequiredArgsConstructor
public class ItemsService {

    private final ItemRepository itemRepository;

    public ItemDto getItemById(long itemId) {
        return ItemMapper.mapItemEntityToDto(findItemById(itemId));
    }

    public Collection<ItemDto> getItems() {
        return itemRepository.findAll().stream().map(ItemMapper::mapItemEntityToDto).toList();
    }

    public ItemDto createItem(ItemDto itemDto) {
        ItemEntity itemEntity = new ItemEntity(itemDto.name(), itemDto.description());
        return ItemMapper.mapItemEntityToDto(itemRepository.save(itemEntity));
    }

    public ItemDto updateItem(long itemId, ItemDto itemDto) {
        ItemEntity itemEntity = findItemById(itemId);
        itemEntity.setName(itemDto.name());
        itemEntity.setDescription(itemDto.description());
        return ItemMapper.mapItemEntityToDto(itemRepository.save(itemEntity));
    }

    public void deleteItem(long itemId) {
        itemRepository.deleteById(itemId);
    }

    private ItemEntity findItemById(long itemId) {
        return itemRepository.findById(itemId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, String.format("Unable to find item with id %s", itemId)));
    }

}
