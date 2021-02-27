import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes} from "@angular/router";
import { HttpClientModule} from '@angular/common/http';
import { PersonaComponent } from './persona/persona.component';
import { RegistroComponent } from './registro/registro.component';
import { PersonaService} from './services/persona.service';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: './persona', pathMatch: 'full'} ,
  { path: 'persona', component: PersonaComponent},
  { path: 'registro', component: RegistroComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
