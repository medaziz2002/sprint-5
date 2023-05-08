import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Type } from 'src/app/models/type.model';
import { PhoneService } from '../../services/services/phone.service';
@Component({
  selector: 'app-type-mangement',
  templateUrl: './type-mangement.component.html',
  styleUrls: ['./type-mangement.component.css']
})
export class TypeMangementComponent implements OnInit {
  newType = new Type();
  title='ajouter type';
  id: number | undefined;
  types:Type[]
  constructor(private PhoneService: PhoneService,
    private router : Router,private activatedRoute: ActivatedRoute) { }


    ngOnInit(): void 
    {
    this.id = this.activatedRoute.snapshot.params['id'] as number;

  if (this.id) 
  {
   this.title='modifier type'
    this.PhoneService.consulterType(this.id)
      .subscribe({
        next: (data) => {
         console.log(data)
          this.newType = data;

        }
      });
    
    }}




  addType() {
    console.log(this.newType)
    
 
    this.PhoneService
      .ajouterType(this.newType)
      .subscribe((type) => {
        console.log(type)
        this.router.navigate(['affichetype']);
      });
  }


  @Input()
  type! : Type;


  @Input()
  ajout!:boolean;

  @Output()
  typeUpdated = new EventEmitter<Type>();
  
saveType()
{
  this.typeUpdated.emit(this.type);
}

modeAjout()
{
  this.ajout=true;
  this.type.idType= 0;
  this.type.nomtype="";
}



}
