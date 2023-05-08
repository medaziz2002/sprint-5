import { Component, OnInit} from '@angular/core';
import { Phone } from 'src/app/models/telephone.model';
import { PhoneService } from '../../services/services/phone.service';
import { Router } from '@angular/router';
import { Type } from 'src/app/models/type.model';





@Component({
  selector: 'app-phone-management',
  templateUrl: './phone-management.component.html',
  styleUrls: ['./phone-management.component.css']
})
export class PhoneManagementComponent implements OnInit {
  newPhone = new Phone();
  types?: Type[] ;
  newIdType! : number;
  newType! : Type;

  uploadedImage!: File;
  imagePath: any;

  
  constructor(private PhoneService: PhoneService,
              private router : Router) { }

  ngOnInit():void {
    console.log("dans ngOnInit");
    this.PhoneService.listeTypes().
          subscribe(typs => 
            {
              this.types=typs
            
        });

       
  }


  addPhone() {
    console.log(this.newPhone)
    this.newPhone.type = this.types?.find(typ => typ.idType == this.newIdType);
    console.log("pas ici")
    this.PhoneService
      .ajouterPhone(this.newPhone)
      .subscribe((phone) => {
        
        this.PhoneService
          .uploadImageFS(this.uploadedImage,
            this.uploadedImage.name, phone.idTelephone)
          .subscribe((response: any) => { console.log("le path est "+this.uploadedImage.name)}
          );
        this.router.navigate(['phones']);
      });
  }

    



    onImageUpload(event: any) {
      this.uploadedImage = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(this.uploadedImage);
      reader.onload = (_event) => { this.imagePath = reader.result; }
      }





}
