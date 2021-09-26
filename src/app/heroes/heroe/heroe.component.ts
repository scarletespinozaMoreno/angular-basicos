import { Component } from '@angular/core';



@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre:string = 'Iroman';
    edad: number=20;

    //crear get de la clase

    get nombreCapitalizado() {
        return this.nombre.toUpperCase();
    }

    obtenerNombre ():string {
        // es igual a return this.nombre + '-' + this.edad.tostring
        return `${this.nombre} - ${this.edad}`
    }

    cambiarNombre(): void{
        this.nombre='Spiderman';
    }

    cambiarEdad(): void{
        this.edad=30;
    }

}
