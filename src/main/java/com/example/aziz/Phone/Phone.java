package com.example.aziz.Phone;

import com.example.aziz.Image.Image;
import com.example.aziz.Type.Type;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;


@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Phone {
    @Id
    @GeneratedValue
    private Integer idTelephone;
    private String nomTelephone;
    private String societe;
    private Double prixTelephone;
    private Date dateCreation;

    @ManyToOne
    private Type type;




    @OneToMany (mappedBy = "phone")
    private List<Image> images;

    private String imagePath;


}
