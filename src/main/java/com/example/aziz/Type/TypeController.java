package com.example.aziz.Type;


import com.example.aziz.Phone.Phone;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/types")
@Tag(name="Type")
public class TypeController {

    final private  TypeRepository typeRepository;

    @GetMapping
    public List<Type> getAllTypes()
    {
        System.out.println("affice"+typeRepository.findAll().get(1));
        return    typeRepository.findAll();
    }

    @GetMapping("/{id}")
    public Type getTypeById(@PathVariable("id") Integer id) {
        return typeRepository.findById(id).get();
    }

    @PostMapping
    public Type createType(@RequestBody Type type) {
        System.out.println(type);
        return typeRepository.save(type);
    }

}
