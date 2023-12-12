import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  apiUrl='http://127.0.0.1:8000/api'

  constructor(private http: HttpClient) { }
  getProjet(){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("userOnline")??'{}').token
      })
    };
    return this.http.get(`${this.apiUrl}/create`,httpOptions);
  }
   // Méthode pour ajouter un projet
   postProjet(projet: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("userOnline")??'{}').token
      })
    };
    return this.http.post(`${this.apiUrl}/create`, projet, httpOptions);
  }

  // Méthode pour supprimer un projet
  deleteRessource(projetId: any) {
    return this.http.delete(`${this.apiUrl}/${projetId}`);
  }
}
