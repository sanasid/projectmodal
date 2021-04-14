import { Component, OnInit, Input, Inject, TemplateRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { DialogData } from '../preprocessing/preprocessing.component';
import {
  FormBuilder,
  FormArray,
  FormGroup,
  AbstractControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  phaseForm: FormGroup;
  selectedValue: string;
  submitValue: any;

  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any
  ) {}

  ngOnInit() {
    console.log('editData', this.editData);
    this.phaseForm = this._fb.group({
      // userName: [''],
      phaseExecutions: this._fb.group({
        PRE: this.editData.length
          ? this._fb.array(
              this.editData.map((data: any) => this.addPhase(data))
            )
          : this._fb.array([this.addPhase({})]),
      }),
    });
    console.log('this.phaseForm', this.phaseForm);
    this.selectedValue = '';
  }

  addPhase(data: any) {
    return this._fb.group({
      phaseType: [data.phaseType],
      phaseValue: [data.phaseValue],
      phaseValue1: [data.phaseValue1],
    });
  }

  addMorePhase() {
    this.phaseArray.push(this.addPhase({}));
  }
  removePhone(x: any) {
    this.phaseArray.removeAt(x);
  }

  onSubmit() {
    this.dialogRef.close(this.phaseArray.value);
    this.submitValue = this.phaseForm.value;
    console.log('modalpopupform data', this.submitValue);
  }

  hasPhaseValue1At(index: any) {
    return (<FormGroup>this.phaseArray.at(index)).get('phaseValue1')
      ? true
      : false;
  }

  get phaseArray() {
    const control = <FormArray>(
      (<FormGroup>this.phaseForm.get('phaseExecutions')).get('PRE')
    );
    return control;
  }
}
