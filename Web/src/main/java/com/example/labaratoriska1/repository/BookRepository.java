package com.example.labaratoriska1.repository;

import com.example.labaratoriska1.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

@Repository
public interface BookRepository extends JpaRepository<Book,Long> {


    Optional<Book> findByName(String name);
    void deleteByName(String name);
    Page<Book> findAll(Pageable pageable);

}
