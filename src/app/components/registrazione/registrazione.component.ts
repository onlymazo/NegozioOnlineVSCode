import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtenteService } from 'src/app/services/utente.service';
import { Utente } from 'src/app/utente';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {
  utente!:Utente
  registrazioneForm!:FormGroup;
  nome!:FormControl;
  nascita!:FormControl;
  username!:FormControl;
  password!:FormControl;

  constructor(private _utenteService:UtenteService, private _router:Router, fb:FormBuilder) {
    this.registrazioneForm = fb.group({
      'nome' : ['', Validators.required],
      'nascita' : ['', Validators.required],
      'username' : ['', Validators.required],
      'password' : ['', Validators.required]
    });
    this.nome = this.registrazioneForm.controls['nome'] as FormControl;
    this.nascita = this.registrazioneForm.controls['nascita'] as FormControl;
    this.username = this.registrazioneForm.controls['username'] as FormControl;
    this.password = this.registrazioneForm.controls['password'] as FormControl;
  }

  ngOnInit(): void {
    this.utente = this._utenteService.getter();
  }

  processaForm() {
    this._utenteService.createUtente(this.utente).subscribe((c) => {
      console.log(c);
      this._router.navigate(['/']);
    });
  }
}
