package com.example.aziz.Phone;


import com.example.aziz.Type.Type;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import org.springframework.stereotype.Service;


import java.io.IOException;
import java.math.BigDecimal;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;


@Service
@RequiredArgsConstructor
public class PhoneService {
    final private PhoneRepository phoneRepository;


       public Phone createPhone(Phone phone)
    {
        return phoneRepository.save(phone);
    }


    public Phone savePhone(Phone phone)

    {
        return phoneRepository.save(phone);
    }

    public void deletePhoneById( Integer id) throws IOException {
        Phone p=getPhone(id);

        Files.delete(Paths.get(System.getProperty("user.home")+"/Pictures/Saved Pictures/"+p.getImagePath()));
        phoneRepository.deleteById(id);
    }

    public Page<Phone> getAllPhonesParPage(int page, int size) {
        return phoneRepository.findAll(PageRequest.of(page, size));
    }
    public Phone getPhone(Integer id) {
        return phoneRepository.findById(id).get();
    }
    public Phone updatePhone(Phone p) {
        return   phoneRepository.save(p);
    }

    public List<Phone> getAllPhones() {

        return phoneRepository.findAll();

    }

    public List<Phone> findByNamePhone(String nom) {
        return phoneRepository.findByNomTelephone(nom);
    }
    public List<Phone> findByNamePhoneContains(String nom) {
        return phoneRepository.findByNomTelephoneContains(nom);
    }

    public List<Phone> findByNamePrice(String nom, BigDecimal prix) {
        return phoneRepository.findByNamePrice(nom, prix);
    }

    public List<Phone> findByCategorie(Type type) {
        return phoneRepository.findByType(type);
    }

    public List<Phone> findByTypeIdType(Integer id) {
        return phoneRepository.findByTypeIdType(id);
    }

    public List<Phone> findByOrderByNomProduitAsc() {
        return phoneRepository.OrderByNomTelephone();
    }

    public List<Phone> trierPhonesNamePrice() {
        return phoneRepository.trierPhonesNamePrice();
    }

}
