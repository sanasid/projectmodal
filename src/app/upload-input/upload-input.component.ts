import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadServiceService } from '../services/upload-service.service';
import { HttpClient } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-upload-input',
  templateUrl: './upload-input.component.html',
  styleUrls: ['./upload-input.component.scss']
})
export class UploadInputComponent implements OnInit {
  sourceData: Array<any> = [];
  targetData: Array<any> = [];
  sourceDatabase = 'Source Database';
  targetDatabase = 'Target Database';
  schedule: { branch: '' };
  uploadForm: FormGroup;
  result: string = '';
  showMe: boolean = true;


  constructor(private formBuilder: FormBuilder, private upload: UploadServiceService) {
    this.uploadForm = formBuilder.group({
      input_database: ['',Validators.required],
      output_database: ['',Validators.required],
      files: [{ value: "", disabled: false }],
      text: [{ value: "", disabled: false }],
    });
  }

  ngOnInit(): void {
    this.sourceData = [
      { id: 1, dbname: "hive" },
      { id: 2, dbname: "oracel" },
      { id: 3, dbname: "teradata" },
    ];

    this.targetData = [
      { id: 1, dbname: "snowflake" },
    ];

  }

  uploadData() {
    console.log(this.uploadForm.value);
    console.log(this.uploadForm.value.text);
  }


  // disable 
  isDisabled = true;
  activeVerificationCodeSent: boolean = true;
  flip() {
    this.uploadForm.controls["files"].disable();
    this.uploadForm.controls["text"].enable();
    // this.isDisabled = !this.isDisabled;
    // console.log("consumer clicked to disable, new value:", this.isDisabled);
  }
  flipout() {
    this.uploadForm.controls["files"].enable();
    this.uploadForm.controls["text"].disable();
  }

  //all post req related to choose file input field
  selectedFile: any = null;
  onFileSelected(event: any) {
    this.selectedFile = event.target.files;
  }

  onSubmit() {
    console.log(this.uploadForm.value);
    const fd = new FormData();
    fd.append('input_database', this.uploadForm.get('input_database').value);
    fd.append('output_database', this.uploadForm.get('output_database').value);
    fd.append('text', this.uploadForm.get('text').value);
    if (this.uploadForm.get('text').value == 0) {
      for (let i = 0; i < this.selectedFile.length; i++) {
        fd.append('files', this.selectedFile[i], this.selectedFile[i].name);
      }
    }
    this.upload.uploadData(fd).subscribe((result) => {
      console.log('Screen1result', result)
    })
    this.uploadForm.reset();
  }

  

}
