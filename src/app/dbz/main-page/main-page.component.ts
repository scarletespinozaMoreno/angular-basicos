import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {
  
  
  nuevo: Personaje ={
    
    nombre:'Maestro Roshi',
    poder:1000
  }
 
    /*    
    agregarNuevoPersonaje( argumento:Personaje){
            this.personajes.push(argumento);
    }

    */
     // inyeccion d edependencia se esta inyectando el servicio en el constructor de main page
    constructor(){ }

}
