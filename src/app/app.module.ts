import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import LocalEs from '@angular/common/locales/es';

registerLocaleData(LocalEs);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      //el idioma por defecto es español
      provide:LOCALE_ID,
      useValue:'es'  
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
