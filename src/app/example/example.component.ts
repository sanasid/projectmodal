import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogueComponent } from '../dialogue/dialogue.component';
import { UploadServiceService } from '../services/upload-service.service';
import { TabletryComponent } from '../tabletry/tabletry.component';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
 animal: string;
 animalo: any;
 animalt: any;
  name: string;
  result:any;
  passedValues: object;
  data: any=[];
 

  constructor(public dialog: MatDialog,private upload:UploadServiceService) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogueComponent, {
      width: '500px',
      data:{ animal: this.animal,
      animalo:this.animalo,
       animalt:this.animalt},
        
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log('The dialog was closed');
      this.animal = res.animal;
      this.animalo =res.animalo
      this.animalt=res.animalt
      this.data=res;
      console.log('modal popup data in parent component',this.data); 

    });
  }


 

}

