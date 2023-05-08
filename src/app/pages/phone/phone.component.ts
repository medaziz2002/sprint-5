import { Component, OnInit } from '@angular/core';
import { Phone } from 'src/app/models/telephone.model';
import { PhoneService } from '../../services/services/phone.service';
import { InterceptorService } from 'src/app/services/interceptor/interceptor.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  phones? : Phone[]; 
  apiurl:string='http://localhost:9091/api/v1/images';

constructor(private PhoneService: PhoneService,
            ) {
 //this.produits=[];
   }

ngOnInit(): void {

  this.chargerPhones();
}

/* chargerProduits(){
  this.produitService.listeProduit().subscribe(prods => {
  //  console.log(prods);
    this.produits = prods;

    this.produits.forEach((prod) => {
      prod.imageStr = 'data:' + prod.images[0].type + ';base64,' +  prod.images[0].image;
      }); 

    });
}*/

chargerPhones(){
this.PhoneService.listePhone().subscribe(phone => {
this.phones = phone;
});
}

supprimerPhone(p: Phone)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.PhoneService.supprimerPhone(p.idTelephone).subscribe(() => {
      console.log("phone supprimé");
      this.chargerPhones();     
    
});
}


}
