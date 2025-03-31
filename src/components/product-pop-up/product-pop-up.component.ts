import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-pop-up',
  templateUrl: './product-pop-up.component.html',
  styleUrls: ['./product-pop-up.component.scss'],
})
export class ProductPopUpComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit(): void {}
}
