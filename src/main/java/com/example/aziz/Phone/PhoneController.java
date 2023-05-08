package com.example.aziz.Phone;


import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/phones")
@Tag(name="Phone")
public class PhoneController {
    final private PhoneService phoneService;

    @RequestMapping(path="all",method =RequestMethod.GET)
    public List<Phone> getAllPhones() {
        return phoneService.getAllPhones();
    }

    @RequestMapping(value="/getbyid/{id}",method = RequestMethod.GET)

    public Phone getPhoneById(@PathVariable("id") Integer id) {
        return phoneService.getPhone(id);
    }

    @RequestMapping(value="/addphone",method = RequestMethod.POST)
    public Phone createPhone(@RequestBody Phone phone) {
        System.out.println(phone);
        return phoneService.savePhone(phone);
    }

    @RequestMapping(value="/updatephone",method = RequestMethod.PUT)

    public Phone updatePhone(@RequestBody Phone phone) {
        return phoneService.updatePhone(phone);
    }

    @RequestMapping(value="/delphone/{id}",method = RequestMethod.DELETE)

    public void deletePhone(@PathVariable("id") Integer id) throws IOException {



        phoneService.deletePhoneById(id);
    }

    @RequestMapping(value="/phoneTypes/{idType}",method = RequestMethod.GET)
    public List<Phone> getPhonesByTypeId(@PathVariable("idType") Integer idType) {
        return phoneService.findByTypeIdType(idType);
    }


}
