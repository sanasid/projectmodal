import { Component, OnInit,Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ModalComponent} from '../modal/modal.component';
import {FormArray, FormBuilder, FormControl, FormGroup, MaxLengthValidator, RequiredValidator, Validators} from '@angular/forms';
import { UploadServiceService } from '../services/upload-service.service';

@Component({
  selector: 'app-preprocessing',
  templateUrl: './preprocessing.component.html',
  styleUrls: ['./preprocessing.component.scss']
})
export class PreprocessingComponent implements OnInit {
  processingForm:FormGroup;
  result:string='';
  dialogRef: any;
  data:any;
  isShown: boolean = false ;
  isSpecific:boolean=false;
  isYes:boolean=false;
  //modal form on radio button
  public invoiceForm: FormGroup;
  
  
  constructor(public dialog: MatDialog,private formBuilder: FormBuilder,public upload :UploadServiceService) 
  { this.processingForm =formBuilder.group({
    specific:[''],
    all:[''],
    no:[''],
    yes:[''],
});
 }

 ngOnInit() {
  this.invoiceForm = this.formBuilder.group({
    Rows: this.formBuilder.array([this.initRows()])
  });
}

get formArr() {
  return this.invoiceForm.get("Rows") as FormArray;
}
  
openDialog(){
    this.upload.AddEdit().subscribe(res=>{
      this.data=res;
    console.log('modal popup data in parent component',this.data); 
    });

  }
  
  toggleSpecific(){
    this.isSpecific = ! this.isSpecific;
  }
  toggleShow() {
    this.isShown = ! this.isShown;
  }

  toggleYes(){
    this.isYes = ! this.isYes;
  }

  processingData(){
    // console.log(this.processingForm.value);
    // console.log("all value",this.processingForm.value.all)
  }
  onSubmit() {
    console.log('submitted value',this.processingForm.value);
    console.log('data',this.data);
  }

  initRows() {
    return this.formBuilder.group({
      name: [''],
      type:[''],
      action:['']
    });
  }

  addNewRow() {
    this.formArr.push(this.initRows());
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }

}

