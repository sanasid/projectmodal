import { Component, OnInit, Input,Inject, TemplateRef  } from '@angular/core';

import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormArray, FormGroup, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tabletry',
  templateUrl: './tabletry.component.html',
  styleUrls: ['./tabletry.component.scss']
})
export class TabletryComponent implements OnInit {
  public addresses: any[] = [{
    id: 1,
    address: '',
    // street: '',
    // city: '',
    // country: ''
  }];
  collectData:any=this.data;
  submitValue: any;

 
  constructor(
  public dialogRef: MatDialogRef<TabletryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    // this.dialogRef.close({animal:this.animal,animalo:this.animalo,animat:this.animalt});
    this.dialogRef.close();
  }
onSubmit(){
  this.dialogRef.close(this.data);
  this.submitValue=this.data;
    console.log('tableform data',this.submitValue);
}
  ngOnInit() {
  
  }

  addAddress() {
    this.addresses.push({
      // id: this.addresses.length + 1,
      address: '',
      // street: '',
      // city: '',
      // country: ''
    });
  }

  removeAddress(i: number) {
    this.addresses.splice(i, 1);
  }

  logValue() {
    // console.log(this.addresses);
  }
 
}
