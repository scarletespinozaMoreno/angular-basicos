import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  
})
export class AgregarComponent {
  
  

  @Input() nuevo:Personaje ={
    nombre:'',
    poder: 0
 }

 constructor( private dbzService : DbzService){}

 //output sirve para que el componente hijo emita un valor o evento al padre
 //@Output() onNuevoPersonaje : EventEmitter <Personaje> = new EventEmitter();


 agregar( ){
   // esto ayuda ha no hacer refresh en el navegador
   //event.preventDefault();
   //tambien con ngSubmit permite que no se haga el molestoso refrsh
   console.log(this.nuevo)

   if (this.nuevo.nombre.trim().length===0){
      return;
   }

    this.dbzService.agregarPersonaje(this.nuevo);

    //this.onNuevoPersonaje.emit(this.nuevo)

   this.nuevo= {
     nombre:'',
     poder:0
   }

 }

  

}
