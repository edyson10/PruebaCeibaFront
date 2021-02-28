import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona/persona';
import { PersonaService } from '../services/persona.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {
  titulo: String = "Registrar Persona";
  persona: Persona = new Persona();

  constructor(private personaService: PersonaService, private router: Router) { }

  ngOnInit(): void {
  }

  create() {
    console.log(this.persona)
    this.personaService.create(this.persona).subscribe(
      res => {
        this.router.navigate(['/persona'])
        console.log("Respuesta: " + res)
        swal.fire('Registro exitoso', `Persona "${this.persona.nombre}" creada con éxito!`, 'success')
      }
    );
  }
}
