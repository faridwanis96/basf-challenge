package com.example.basfchallengespring.items.repository;

import com.example.basfchallengespring.items.entity.ItemEntity;
import org.springframework.data.repository.ListCrudRepository;

public interface ItemRepository extends ListCrudRepository<ItemEntity, Long> {
}
