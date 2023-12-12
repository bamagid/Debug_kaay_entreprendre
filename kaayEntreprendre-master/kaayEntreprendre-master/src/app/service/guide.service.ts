import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuideService {

  apiUrl = 'http://127.0.0.1:8000/api';


  constructor(private http: HttpClient) { }
  getGuide() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("userOnline")??'{}').token
      })
    };
    return this.http.get(`${this.apiUrl}/guide`,httpOptions);
  }

  // Méthode pour ajouter un guide
  postGuide(guide: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("userOnline")??'{}').token
      })
    };
    return this.http.post<any>(`${this.apiUrl}/create_guide`, guide,httpOptions);
  }

  // Méthode pour supprimer un guide
  deleteGuide(guideId: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${guideId}`);
  }
}
