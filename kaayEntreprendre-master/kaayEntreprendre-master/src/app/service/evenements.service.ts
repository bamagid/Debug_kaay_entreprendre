import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvenementsService {

  apiUrl = 'http://127.0.0.1:8000/api';


  constructor(private http: HttpClient) { }
 
  getEvenement() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("userOnline")??'{}').token
      })
    };
    return this.http.get(`${this.apiUrl}/evenement`,httpOptions);
  }

  // Méthode pour ajouter un evenement
  postEvenement(evenement: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("userOnline")??'{}').token
      })
    };
    return this.http.post<any>(`${this.apiUrl}/evenement`, evenement,httpOptions);
  }

  // Méthode pour supprimer un evenement
  deleteEvenement(evenementId: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${evenementId}`);
  }
}
