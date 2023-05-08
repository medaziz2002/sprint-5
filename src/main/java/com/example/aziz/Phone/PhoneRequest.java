package com.example.aziz.Phone;


import com.example.aziz.Image.Image;
import com.example.aziz.Type.Type;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PhoneRequest {


    private Integer idTelephone;
    private String nomTelephone;
    private String societe;
    private Double prixTelephone;
    private Date dateCreation;
    private Type type;
    private String nomtype;

}
