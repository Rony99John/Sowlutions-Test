import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SearchScreenComponent } from './../components/search-screen/search-screen.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProgramingQuestionsComponent } from '../components/programing-questions/programing-questions.component';
import { DragDropProductsComponent } from '../components/drag-drop-products/drag-drop-products.component';
import { HttpsService } from 'src/Services/httpsService/httpsService.service';
import { ProductPopUpComponent } from '../components/product-pop-up/product-pop-up.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    SearchScreenComponent,
    ProgramingQuestionsComponent,
    DragDropProductsComponent,
    ProductPopUpComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatDialogModule,
  ],
  providers: [HttpsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
