import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './cocktails/components/toolbar/toolbar.component';
import { FooterComponent } from './cocktails/components/footer/footer.component';
import { MainContentComponent } from './cocktails/components/main-content/main-content.component';
import {HttpClientModule} from "@angular/common/http";
import {LayoutModule} from "@angular/cdk/layout";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {CocktailService} from "./cocktails/services/cocktail-service.service";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    MainContentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [CocktailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
