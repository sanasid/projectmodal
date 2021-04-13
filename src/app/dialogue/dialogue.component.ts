// import {Component, Inject} from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Component, OnInit, Input,Inject, TemplateRef  } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
// import { DialogData } from '../preprocessing/preprocessing.component';
import { FormBuilder, FormArray, FormGroup, AbstractControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss']
})
export class DialogueComponent {
  animal: any;
  animalo: any;
  animalt: any;
 
  constructor(
    public dialogRef: MatDialogRef<DialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private _fb: FormBuilder) { }

  onNoClick(): void {
    // this.dialogRef.close({animal:this.animal,animalo:this.animalo,animat:this.animalt});
    this.dialogRef.close();
  }
  phaseForm: FormGroup;
  selectedValue: string;
  submitValue:any;


  ngOnInit() {
    // console.log("editData",this.editData)
    console.log("Data",this.data)
    this.phaseForm = this._fb.group({
      // userName: [''],
      phaseExecutions: this._fb.group({
        PRE: this._fb.array([this.addPhase()])
      })
    });
    this.selectedValue = "";
  }

  addPhase() {
    return this._fb.group({
      animal:[],
      animalo: [],
      animalt:[]
    });
}

  addMorePhase() {
    console.log('Add more phase calling')
    this.phaseArray.push(this.addPhase());
  }
  removePhone(x:any) {
    this.phaseArray.removeAt(x);
  }

  onSubmit() {
    // this.dialogRef.close(this.phaseArray.value);
    this.submitValue=this.phaseForm.value;
    console.log('modalpopupform data',this.submitValue);
  }

  hasPhaseValue1At(index:any) {
    return (<FormGroup>this.phaseArray.at(index)).get('phaseValue1') ? true : false;
  }

  get phaseArray() {
    const control = <FormArray>(<FormGroup>this.phaseForm.get('phaseExecutions')).get('PRE');
    return control;
  }
}
