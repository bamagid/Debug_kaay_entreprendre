import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {

  apiUrl = 'http://127.0.0.1:8000/api';



  constructor(private http: HttpClient) { }
  getRessource() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("userOnline")??'{}').token
      })
    };
    return this.http.get(`${this.apiUrl}/ressources`,httpOptions);
  }

  // Méthode pour ajouter un ressource
  postRessource(ressource: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("userOnline")??'{}').token
      })
    };
    return this.http.post<any>(`http://127.0.0.1:8000/api/ajouter-ressource`, ressource,httpOptions);
  }

  // Méthode pour supprimer un ressource
  deleteRessource(ressourceId: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${ressourceId}`);
  }

  modifierRessource(id:any, ressource:any){
    return this.http.put(`${this.apiUrl}/${id}`, ressource)
  }
}
