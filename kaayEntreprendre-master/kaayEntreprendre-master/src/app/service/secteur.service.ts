import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecteurService {

  apiUrl = 'http://127.0.0.1:8000/api';


  constructor(private http: HttpClient) { }
  getSecteur() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("userOnline")??'{}').token
      })
    };
    return this.http.get(`${this.apiUrl}/secteur`,httpOptions);
  }

  // Méthode pour ajouter un secteur
  postSecteur(secteur: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("userOnline")??'{}').token
      })
    };
    return this.http.post<any>(`${this.apiUrl}/secteur`, secteur,httpOptions);
  }

  // Méthode pour supprimer un secteur
  deleteSecteur(secteurId: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${secteurId}`);
  }
}
