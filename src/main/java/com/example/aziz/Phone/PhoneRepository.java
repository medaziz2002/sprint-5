package com.example.aziz.Phone;

import com.example.aziz.Type.Type;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.math.BigDecimal;
import java.util.List;

public interface PhoneRepository extends JpaRepository<Phone,Integer> {


    List<Phone> findByNomTelephone(String name);
    List<Phone> findByNomTelephoneContains(String name);



    @Query("select p from Phone p where p.nomTelephone like %?1 and p.prixTelephone > ?2")
    List<Phone> findByNamePrice (String phoneName, BigDecimal price);

    @Query("select p from Phone p where p.type = ?1")
    List<Phone> findByType (Type type);


    List<Phone> findByTypeIdType(Integer id);

    List<Phone> OrderByNomTelephone();

    @Query("select p from Phone p order by p.nomTelephone ASC, p.prixTelephone DESC")
    List<Phone> trierPhonesNamePrice ();
    @Modifying
    @Transactional
    @Query("UPDATE Phone p SET p.type = null WHERE p.type = ?1")
    void updatePhonesWithType(Type type);
}

