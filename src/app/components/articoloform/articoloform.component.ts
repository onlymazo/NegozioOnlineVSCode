import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articolo } from 'src/app/articolo';
import { ArticoloService } from 'src/app/services/articolo.service';

@Component({
  selector: 'app-articoloform',
  templateUrl: './articoloform.component.html',
  styleUrls: ['./articoloform.component.css']
})
export class ArticoloformComponent implements OnInit {
  articolo!: Articolo;
  constructor(private _articoloService: ArticoloService, private _router: Router) { }

  ngOnInit(): void {
    this.articolo = this._articoloService.getter();
  }

  processaForm() {
    if (this.articolo.id == undefined) {

      this._articoloService.createArticolo(this.articolo).subscribe((a) => {
        console.log(a);
        this._router.navigate(['/']);
      });
    } else {
      this._articoloService.updateArticolo(this.articolo).subscribe((a) => {
        console.log(a);
        this._router.navigate(['/']);
      });
    }
  }
}
