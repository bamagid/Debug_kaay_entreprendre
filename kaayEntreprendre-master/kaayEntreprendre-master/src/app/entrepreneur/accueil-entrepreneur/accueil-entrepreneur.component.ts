import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProjetService } from 'src/app/service/projet.service';

@Component({
  selector: 'app-accueil-entrepreneur',
  templateUrl: './accueil-entrepreneur.component.html',
  styleUrls: ['./accueil-entrepreneur.component.css']
})
export class AccueilEntrepreneurComponent implements OnInit{
  // declaration des variables de recuperation des valeurs saisies
  titre:string='';
  image:string='';
  secteur:string='';
  description:string='';
  searchResult: any[] = [];

  pageActuelle: number = 1;
  articlesParPage: number = 3;
  userConnect: any;


  constructor(private route:Router, private projetService:ProjetService){
  }
  
  ngOnInit(){
    this.userConnect=JSON.parse(localStorage.getItem('userOnline') || '');
    console.log(this.userConnect)
  }
  ajoutProjet(){
    let projet={
      contenu:this.description,
      image:this.image,
      secteur_id:this.secteur
    }
   this.projetService.postProjet(projet).subscribe((reponse:any)=>
   {console.log("ajout reussi");
   })
  }
 
  


  // Méthode pour déterminer les articles à afficher sur la page actuelle
  getArticlesPage(): any[] {
    const indexDebut = (this.pageActuelle - 1) * this.articlesParPage;
    const indexFin = indexDebut + this.articlesParPage;
    return this.searchResult.reverse().slice(indexDebut, indexFin);
  }
  // Méthode pour générer la liste des pages
  get pages(): number[] {
    const totalPages = Math.ceil(this.searchResult.length / this.articlesParPage);
    return Array(totalPages).fill(0).map((_, index) => index + 1);
  }

  // Méthode pour obtenir le nombre total de pages
  get totalPages(): number {
    return Math.ceil(this.searchResult.length / this.articlesParPage);
  }
  
}
