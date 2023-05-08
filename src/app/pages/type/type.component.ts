import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Type } from 'src/app/models/type.model';
import { PhoneService } from '../../services/services/phone.service';
@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
  private phoneIdToDelete: number | undefined;
  p:number=1;
  types!:Type[];
  
  constructor(private PhoneService: PhoneService,
    private router : Router) { }

    ngOnInit(): void {
      this.chargerType();
    }
  
    chargerType()
    {
      this.PhoneService.listeTypes()
      
      .subscribe(type=>
        {
          console.log(type);
          this.types=type;
  
        });
    }


    
  edit(id:number|undefined){  
 
    this.router.navigate(['update-type', id]);

  }
}
