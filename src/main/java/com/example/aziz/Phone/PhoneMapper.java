package com.example.aziz.Phone;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class PhoneMapper {

    public Phone toPhone(PhoneRequest request) {
        if (request == null) {
            return new Phone();
        }
        return Phone.builder()
                .idTelephone(request.getIdTelephone())
                .nomTelephone(request.getNomTelephone())
                .societe(request.getSociete())
                .prixTelephone(request.getPrixTelephone())
                .dateCreation(request.getDateCreation())

                .build();
    }



}

