import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterceptorService } from '../interceptor/interceptor.service';
import { TokenService } from '../token-service/token.service';
import { Phone } from 'src/app/models/telephone.model';

import { Type } from 'src/app/models/type.model';
import { Image } from 'src/app/models/Image.model';
import { TypeWrapper } from 'src/app/models/TypeWrapper.model';




const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  apiURL: string = 'http://localhost:9091/api/v1';
  apiURLType: string ='http://localhost:9091/api/v1';
  apiURLImage:string ='http://localhost:9091/api/v1';
  


  phones! : Phone[]; //un tableau de produits
  //categories : Categorie[];
 

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private interceptorService: InterceptorService // injectez votre InterceptorService
  ) {}

  listePhone(): Observable<Phone[]>{
    const jwt = this.tokenService.getToken;
    const httpHeaders = new HttpHeaders({ "Authorization": jwt });

    const options = {
      headers: httpHeaders,
      interceptor: this.interceptorService
    };

    return this.http.get<Phone[]>(this.apiURL+"/phones/all", options);
  }



    ajouterPhone( phone: Phone):Observable<Phone>{
      const jwt = this.tokenService.getToken;
      const httpHeaders = new HttpHeaders({ "Authorization": jwt });
      const options = {
        headers: httpHeaders,
        interceptor: this.interceptorService
      };
  
              return this.http.post<Phone>(this.apiURL+"/phones/addphone", phone, {headers:httpHeaders});
      }
     
      
   
  supprimerPhone(id : number) {
    const jwt = this.tokenService.getToken;
    const httpHeaders = new HttpHeaders({ "Authorization": jwt });
    const options = {
      headers: httpHeaders,
      interceptor: this.interceptorService
    };
    const url = `${this.apiURL}/phones/delphone/${id}`;
          return this.http.delete(url,  {headers:httpHeaders});
    }





   
   consulterPhone(id: number): Observable<Phone> {
    const jwt = this.tokenService.getToken;
    const httpHeaders = new HttpHeaders({ "Authorization": jwt });
    const options = {
      headers: httpHeaders,
      interceptor: this.interceptorService
    };

        
    return this.http.get<Phone>(this.apiURL,{headers:httpHeaders});
          }





  
    updatePhone(phone :Phone) : Observable<Phone>    {
      const jwt = this.tokenService.getToken;
      const httpHeaders = new HttpHeaders({ "Authorization": jwt });
      const options = {
        headers: httpHeaders,
        interceptor: this.interceptorService
      };
            return this.http.put<Phone>(this.apiURL+"phones/updateprod", phone, {headers:httpHeaders});
          }
  

         
       listeTypes():Observable<Type[]>{
        const jwt = this.tokenService.getToken;

        const httpHeaders = new HttpHeaders({ "Authorization": jwt });
        const options = {
          headers: httpHeaders,
          interceptor: this.interceptorService
        };
        return  this.http.get<Type[]>(this.apiURLType+"/types",{headers:httpHeaders});
        
            }     



       rechercherParType(idType: number): Observable<Phone[]> {
          const url = `${this.apiURL}/phones/phoneTypes/${idType}`;
          return this.http.get<Phone[]>(url);
         } 

 /* rechercherParNom(nom: string):Observable< Phone[]> {
    const url = `${apiURL}/prodsByName/${nom}`;
    return this.http.get<Phone[]>(url);
    }*/

    ajouterType( type: Type):Observable<Type>{
      return this.http.post<Type>(this.apiURLType+"/types", type, httpOptions);
      }


      uploadImage(file: File, filename: string): Observable<Image>{
        const imageFormData = new FormData();
        imageFormData.append('image', file, filename);
        const url = `${this.apiURLImage+'/images/image/upload'}`;
        return this.http.post<Image>(url, imageFormData);
        }


        loadImage(id: number): Observable<Image> {
          const url = `${this.apiURLImage + '/image/get/info'}/${id}`;
          return this.http.get<Image>(url);
          }


          uploadImagePhone(file: File, filename: string, idPhone:number): Observable<any>{
            const imageFormData = new FormData();
            imageFormData.append('image', file, filename);
            const url = `${this.apiURL + '/image/uplaodImagePhone'}/${idPhone}`;
            return this.http.post(url, imageFormData);
         }
            
         supprimerImage(id : number) {
          const url = `${this.apiURLImage}/image/delete/${id}`;
          return this.http.delete(url, httpOptions);
          }
          



          uploadImageFS(file: File, filename: string, idPhone : number): Observable<any>{
            const imageFormData = new FormData();
            imageFormData.append('images', file, filename);
            const url = `${this.apiURLImage + '/images/uploadFS'}/${idPhone}`;
            return this.http.post(url, imageFormData);
          }




          consulterType(id: number): Observable<Type> {
            const jwt = this.tokenService.getToken;
            const httpHeaders = new HttpHeaders({ "Authorization": jwt });
            const options = {
              headers: httpHeaders,
              interceptor: this.interceptorService
            };
            const url = `${this.apiURL + '/types'}/${id}`;
                
            return this.http.get<Type>(url,{headers:httpHeaders});
                  }
        


                  
}
