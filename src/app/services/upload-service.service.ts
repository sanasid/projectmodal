import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatDialog,MatDialogConfig,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ModalComponent } from '../modal/modal.component';
import { TabletryComponent } from '../tabletry/tabletry.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {
   url= "http://127.0.0.1:7000/screen1";
  data1: any;

  constructor(private http:HttpClient,private dialog:MatDialog) { }

  uploadData(post:any){
    return this.http.post(this.url, post);
}

public AddEdit(data:any= []): Observable<any> {
  var dialogConfig =new MatDialogConfig();
  dialogConfig.panelClass='add-more-pop';
  dialogConfig.data=data;
  let dialogRef: MatDialogRef<ModalComponent>
  dialogRef=this.dialog.open(ModalComponent,dialogConfig);
  return dialogRef.afterClosed();
}
public AddEditData(data:any= []): Observable<any> {
  var dialogConfig =new MatDialogConfig();
  dialogConfig.panelClass='add-more-pop';
  dialogConfig.data=data;
  let dialogRef: MatDialogRef<TabletryComponent>
  dialogRef=this.dialog.open(TabletryComponent,dialogConfig);
 dialogRef.afterClosed().subscribe(res => {
  console.log('The dialog was closed');
  this.data1 = res;
  console.log('Upload Service afterclose Data',this.data1);
});
return 
}

private newUser = new BehaviorSubject<any>({
  input: 'Kevin',
  output: 'ksmith@fanreact.com',
  texts: 'M'
});

setNewUserInfo(user: any) {
  this.newUser.next(user);
}

getNewUserInfo() {
  return this.newUser.asObservable();
}

}
