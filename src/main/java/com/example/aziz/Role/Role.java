package com.example.aziz.Role;

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
public class Role {

    @Id
    @GeneratedValue
    private Long role_id;
    private String role;

}
