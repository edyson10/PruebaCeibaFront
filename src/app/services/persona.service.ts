import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Persona } from '../persona/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private urlEndPointListar: string = 'http://localhost:8080/persona/listar';
  private urlEndPointCrear: string = 'http://localhost:8080/persona/registrar';

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http: HttpClient) { }

  //Listar todas las personas
  getEmpleados(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.urlEndPointListar);
  }

  //Crear una persona
  create(persona: Persona):Observable<Persona>{
    return this.http.post<Persona>(this.urlEndPointCrear, persona);
  }
}
