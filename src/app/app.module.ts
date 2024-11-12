/**
 * El archivo no se genero automaticamente al crear
 * el proyecto, se debe hacer manual
*/
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
@NgModule({
    declarations:[
        //Aquí podemos declarar componentes, servicios, etc.
        AppComponent,
    ],
    imports:[
        BrowserModule,
        HttpClientModule,
        RouterModule,forRoot([]),
    ],
    providers: [], //Aquí podemos declarar servicios
    bootstrap: [AppComponent] //Aquí indicamos que AppComponent es el componente raíz del modulo
})
export class AppModule {}