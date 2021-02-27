import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../services/persona.service';
import { Persona } from './persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html'
})
export class PersonaComponent implements OnInit {
  titulo: String = "Personas Registradas";
  subtitulo: String = "Listado de las personas registradas en la base de datos del Covid";
  personas: Persona[];

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getEmpleados().subscribe(
      persona => this.personas = persona
    );
  }
}
