import { Component, OnInit } from '@angular/core';
import { GuideService } from 'src/app/service/guide.service';

@Component({
  selector: 'app-gestion-guide',
  templateUrl: './gestion-guide.component.html',
  styleUrls: ['./gestion-guide.component.css']
})
export class GestionGuideComponent implements OnInit{
  guideAjoute: any;

constructor(private guideService: GuideService){}

  titre:string='';
  description:string='';
  image:string='';
  secteur:string='';
  ngOnInit() {

  }
  ajoutGuide(){
    let guide={
      titre:this.titre,
      contenu:this.description
    }
    this.guideService.postGuide(guide).subscribe((reponse:any)=>
      this.guideAjoute=reponse
    )
  }
}
