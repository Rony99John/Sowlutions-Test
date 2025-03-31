import { Component, OnInit } from '@angular/core';
import { HttpsService } from 'src/Services/httpsService/httpsService.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ProductPopUpComponent } from '../product-pop-up/product-pop-up.component';

@Component({
  selector: 'app-drag-drop-products',
  templateUrl: './drag-drop-products.component.html',
  styleUrls: ['./drag-drop-products.component.scss'],
})
export class DragDropProductsComponent implements OnInit {
  myProducts;
  constructor(private HttpClient: HttpsService, private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.HttpClient.getProducts()
      .pipe()
      .subscribe((response) => {
        this.myProducts = response;
        console.log(response);
      });
  }

  openPopUp(product) {
    this.matDialog.open(ProductPopUpComponent, {
      width: '6000px',
      maxHeight: '90vh',
      data: product,
      autoFocus: false,
    });
  }
}
