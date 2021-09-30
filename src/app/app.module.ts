import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [ // aqui van a ir todos los componentes
    AppComponent,
    
   
  ],
  imports: [ /// aqui iran todoslos modulos
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  providers: [], // aqui iran los servicios
  bootstrap: [AppComponent] // este e sun componentr principal
})
export class AppModule { }
