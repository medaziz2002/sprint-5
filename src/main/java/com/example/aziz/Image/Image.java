package com.example.aziz.Image;

import com.example.aziz.Phone.Phone;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Builder
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Image {
    @Id
    @GeneratedValue
    private Long idImage ;
    private String name ;
    private String type ;

    @Column( name = "IMAGE" , length = 4048576 )
    @Lob
    private byte[] image;


    @ManyToOne
    @JoinColumn (name="PHONE_ID")
    @JsonIgnore
    private Phone phone;

}
