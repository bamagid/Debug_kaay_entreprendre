import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  apiUrl = 'http://127.0.0.1:8000/api';
  

  constructor(private http: HttpClient) { }
  getUsers() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("userOnline")??'{}').token
      })
    };
    return this.http.get(`${this.apiUrl}/utilisateur`,httpOptions);
  }

  // Méthode pour ajouter un user
  postUser(user: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("userOnline")??'{}').token
      })
    };
    return this.http.post<any>(`${this.apiUrl}/utilisateur`, user,httpOptions);
  }

  // Méthode pour supprimer un user
  deleteUser(userId: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${userId}`);
  }
}
