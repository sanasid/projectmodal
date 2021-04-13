import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl,FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-customtry',
  templateUrl: './customtry.component.html',
  styleUrls: ['./customtry.component.scss']
})
export class CustomtryComponent implements OnInit {

  title = 'app';

  public id: number;
  public name: string;
  public year: number;
  public rows: Array<{id: number, name: string, year: number}> = [];

  buttonClicked() {
    this.rows.push( {id: this.id, name: this.name, year: this.year } );

    //if you want to clear input
    this.id = null;
    this.name = null;
    this.year = null;
  }

  result:string='';
  peoples:any;
  @ViewChild('labelImport')
  labelImport: ElementRef;
 
  // formImport: FormGroup;
  fileToUpload: File = null;

  checkoutForm:FormGroup;
  submitted: boolean=false;

  constructor( private formBuilder:FormBuilder) {
  
    this.checkoutForm =formBuilder.group({
      source:['',Validators.required],
      selectData:new FormControl(),
    // emailAddr:new FormControl(),
    // quantity:new FormControl(),
    terms:new FormControl()
    // this.formImport = new FormGroup({
    //   importFile: new FormControl('', Validators.required)
    // });
  });
}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  onFileChange(files: FileList) {
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(', ');
    this.fileToUpload = files.item(0);
    console.log('file upload', this.fileToUpload)
    console.log('file upload name', this.fileToUpload.name)
  }

  import(): void {
    console.log('import ' + this.fileToUpload.name);
  }

  postData(){
    console.log(this.checkoutForm.value);
    console.log(this.checkoutForm.value.selectData);
    this.submitted = true;

        // stop here if form is invalid
        if (this.checkoutForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.checkoutForm.value, null, 4));
  }

  save(event:any):void{
    var selectFile= event.target.files;
    for(var i =0; i < selectFile.length; i++){
    console.log('save file',selectFile.length)
    this.result +='<br>File Name:' +selectFile[i].name;
    // this.result +='<br> File Size (byte):' +selectFile[i].size;
    // this.result +='<br> File Type :' +selectFile[i].type;
    // this.result +='<br> ----------------';
    }
    console.log(selectFile)
  }
  isShown: boolean = false ; // hidden by default


toggleShow() {

this.isShown = ! this.isShown;

}

listFilter='';
ClearText(){
this.listFilter='';

}

isDisabled =true;
  activeVerificationCodeSent: boolean = true;
  flip() {
    this.isDisabled = !this.isDisabled;

    console.log("consumer clicked to disable, new value:", this.isDisabled);
  }
}

