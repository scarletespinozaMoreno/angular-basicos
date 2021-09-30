import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  
})
export class PersonajesComponent {
  // comunicacion de padre a hijo este caso este es el hijo
  //@Input() personajes:Personaje[] = [];
  get personajes(){
    return this.dbzService.personajes;
  }

  constructor( private dbzService : DbzService){
  }


}
