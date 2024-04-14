package com.example.basfchallengespring.items.controller;

import com.example.basfchallengespring.items.controller.dto.ItemDto;
import com.example.basfchallengespring.items.service.ItemsService;
import lombok.RequiredArgsConstructor;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "items")
@CrossOrigin
public class ItemsController {

    private final ItemsService itemsService;

    @GetMapping()
    public Collection<ItemDto> getItems() {
        return itemsService.getItems();
    }

    @PostMapping()
    public ItemDto createItem(@RequestBody ItemDto itemDto) {
        return itemsService.createItem(itemDto);
    }

    @GetMapping(value = "/{itemId}")
    public ItemDto getItem(@NonNull @PathVariable long itemId) {
        return itemsService.getItemById(itemId);
    }

    @PutMapping(value = "/{itemId}")
    public ItemDto updateItem(@NonNull @PathVariable long itemId, @RequestBody ItemDto itemDto) {
        return itemsService.updateItem(itemId, itemDto);
    }

    @DeleteMapping(value = "/{itemId}")
    public void deleteItem(@NonNull @PathVariable long itemId) {
        itemsService.deleteItem(itemId);
    }

}
