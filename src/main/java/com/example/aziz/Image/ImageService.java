package com.example.aziz.Image;


import com.example.aziz.Phone.Phone;
import com.example.aziz.Phone.PhoneRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ImageService {

    final private ImageRepository imageRepository;
   final private PhoneRepository phoneRepository;


    public Image uplaodImage(MultipartFile file) throws IOException {
        /*
         * Ce code commenté est équivalent au code utilisant le design pattern Builder
         * Image image = new Image(null, file.getOriginalFilename(),
         * file.getContentType(), file.getBytes(), null);
         *   return imageRepository.save(image);
         */
        return imageRepository.save(Image.builder().name(file.getOriginalFilename()).type(file.getContentType())
                .image(file.getBytes()).build());
    }


    public Image getImageDetails(Integer id) throws IOException {
        final Optional<Image> dbImage = imageRepository.findById(id);
        return Image.builder().idImage(dbImage.get().getIdImage()).name(dbImage.get().getName())
                .type(dbImage.get().getType()).image(dbImage.get().getImage()).build();
    }


    public ResponseEntity<byte[]> getImage(Integer id) throws IOException {
        final Optional<Image> dbImage = imageRepository.findById(id);
        return ResponseEntity.ok().contentType(MediaType.valueOf(dbImage.get().getType()))
                .body(dbImage.get().getImage());
    }

    public void deleteImage(Integer id) {
        imageRepository.deleteById(id);
    }


    public Image uplaodImagePhone(MultipartFile file,Integer idPhone)
            throws IOException {
        Phone p = new Phone();
        p.setIdTelephone(idPhone);
        System.out.println("ici");
        return imageRepository.save(Image.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .image(file.getBytes())
                .phone(p).build() );
    }


    public List<Image> getImagesParPhone(Integer prodId) {
        Phone p = phoneRepository.findById(prodId).get();
        return p.getImages();
    }
}
