package com.example.aziz.Type;


import com.example.aziz.Phone.Phone;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@ToString
public class Type {
    @Id
    @GeneratedValue
    private Integer idType;
    private String nomtype;
    private String description;


    @JsonIgnore
    @OneToMany(mappedBy = "type")
    private List<Phone> phones;

}
