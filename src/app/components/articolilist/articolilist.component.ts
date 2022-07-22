import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articolo } from 'src/app/articolo';
import { ArticoloService } from 'src/app/services/articolo.service';

@Component({
  selector: 'app-articolilist',
  templateUrl: './articolilist.component.html',
  styleUrls: ['./articolilist.component.css']
})
export class ArticolilistComponent implements OnInit {
  articoli!: Articolo[];

  constructor(private _articoloService: ArticoloService, private _router: Router) { }

  ngOnInit(): void {
    this._articoloService.getArticoli().subscribe({
      next: (articoli) => this.articoli = articoli,
      error: (e) => console.error(e),
      complete: () => console.info('Operazione completata')
    })
  }

  createArticolo() {
    let articolo = new Articolo;
    this._articoloService.setter(articolo);
    this._router.navigate(['/articoliform']);
  }

  updateArticolo(articolo : Articolo) {
    this._articoloService.setter(articolo);
    this._router.navigate(['/articoliform']);
  }

  deleteArticolo(articolo : Articolo) {
    this._articoloService.deleteArticolo(articolo.id).subscribe((dati:any) => {
    this.articoli.splice(this.articoli.indexOf(articolo),1);
   });
  }  
}