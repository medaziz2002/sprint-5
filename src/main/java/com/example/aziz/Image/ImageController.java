package com.example.aziz.Image;


import com.example.aziz.Phone.Phone;
import com.example.aziz.Phone.PhoneController;
import com.example.aziz.Phone.PhoneRepository;
import com.example.aziz.Phone.PhoneService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/images")
@RequiredArgsConstructor
@Tag(name="image")
public class ImageController {

   final private ImageRepository imageRepository;
   final private PhoneRepository phoneRepository;
   final private PhoneService phoneService;
   final private ImageService imageService;

    @RequestMapping(value = "/uploadFS/{id}" , method = RequestMethod.POST)
    public void uploadImageFS(@RequestParam("images") MultipartFile
                                      file,@PathVariable("id") Integer id) throws IOException {
        Phone p = phoneService.getPhone(id);
        p.setImagePath(id+".jpg");

        Files.write(Paths.get(System.getProperty("user.home")+"/Pictures/Saved Pictures/"+p.getImagePath())
                , file.getBytes());
        phoneService.savePhone(p);

    }
    @RequestMapping(value = "/loadfromFS/{id}" ,
            method = RequestMethod.GET,
            produces = MediaType.IMAGE_JPEG_VALUE)
    public byte[] getImageFS(@PathVariable("id") Integer id) throws IOException {

        Phone p = phoneService.getPhone(id);
        return	 Files.readAllBytes(Paths.get(System.getProperty("user.home")+"/Pictures/Saved Pictures/"+p.getImagePath()));
    }







    @RequestMapping(value = "/upload" , method = RequestMethod.POST)
    public Image uploadImage(@RequestParam("image")MultipartFile file) throws IOException {
        return imageService.uplaodImage(file);
    }

    @PostMapping(value = "/uplaodImagePhone/{idPhone}" )
    public Image uploadMultiImages(@RequestParam("image")MultipartFile file,
                                   @PathVariable("idPhone") Integer idPhone)
            throws IOException {
        return imageService.uplaodImagePhone(file,idPhone);
    }

    @RequestMapping(value = "/getImagesPhone/{idPhone}" , method = RequestMethod.GET)
    public List<Image> getImagesPhone(@PathVariable("idPhone") Integer idProd)
            throws IOException {
        return imageService.getImagesParPhone(idProd);
    }




    @RequestMapping(value = "/get/info/{id}" , method = RequestMethod.GET)
    public Image getImageDetails(@PathVariable("id") Integer id) throws IOException {
        return imageService.getImageDetails(id) ;
    }


    @RequestMapping(value = "/load/{id}" , method = RequestMethod.GET)
    public ResponseEntity<byte[]> getImage(@PathVariable("id") Integer id) throws IOException
    {
        return imageService.getImage(id);
    }


    @RequestMapping(value = "/delete/{id}" , method = RequestMethod.DELETE)
    public void deleteImage(@PathVariable("id") Integer id){
        imageService.deleteImage(id);
    }



    @RequestMapping(value="/update",method = RequestMethod.PUT)
    public Image UpdateImage(@RequestParam("image")MultipartFile file) throws IOException {
        return imageService.uplaodImage(file);
    }



}