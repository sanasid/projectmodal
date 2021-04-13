import { Component } from '@angular/core';
import {MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-screen3',
  templateUrl: './screen3.component.html',
  styleUrls: ['./screen3.component.scss']
})
export class Screen3Component  {

 

  
  secondaryTable:any =[];
  Table = [
    {
      id: 151,
      name: 'Table1',
      selected: false
     
    },
    {
      id: 152,
      name: 'Table2',
      selected: false
   
    },
    {
      id: 153,
      name: 'Table3',
      selected: false
     
    },
    {
      id: 154,
      name: 'Table4',
      selected: false
    
    }
  ];

  Views = [
    {
      id: 151,
      name: 'View1',
      selected: false
     
    },
    {
      id: 152,
      name: 'View2',
      selected: false
   
    },
    {
      id: 153,
      name: 'View3',
      selected: false
     
    },
  ];
  
  addToAnotherTable(ind:any) {
    console.log('called addtoanother table')
    var index = this.secondaryTable.indexOf(ind);
    if (index > -1) {
      // this.secondaryTable.splice(index, 1);
    }
    else{
      this.secondaryTable.push(ind);
    }
  }


  isEditing: boolean = false;
  enableEditIndex:any = null;

  switchEditMode(i:any) {
    this.isEditing = true;
    this.enableEditIndex = i;
  }

  save() {
    this.isEditing = false;
    this.enableEditIndex = null;
  }

  cancel() {
    this.isEditing = false;
    this.enableEditIndex = null;
  }

  remove(i:any){
    var index = this.secondaryTable.indexOf(i);
    this.secondaryTable.splice(index, 1);
  }

  editCache: { [key: string]: any } = {};
  listOfData: any[] = [];

  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }

  saveEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    Object.assign(this.listOfData[index], this.editCache[id].data);
    this.editCache[id].edit = false;
  }

  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  selectedAll: any;
  
  table: any;
  Secondname: any;
  Thirdname: any;
  names: any;
  
  constructor() {
    this.table = [{ name: 'table1', value: 'as', selected: false },
    { name: 'table2', value: 'bs', selected: false },
    { name: 'table3', value: 'cs', selected: false }];
    this.Secondname = [{ name: 'views1', value: 'dd', selected: false },
    { name: 'views2', value: 'ee', selected: false },
    { name: 'views3', value: 'ff', selected: false }];
    this.Thirdname = [{ name: 'database1', value: 'gg', selected: false },
    { name: 'database2', value: 'hh', selected: false },
    { name: 'database3', value: 'ii', selected: false }];
  }

  selectAll() {
    for (var i = 0; i < this.table.length; i++) {
      this.table[i].selected = this.selectedAll;

      console.log('table',this.table[i].selected)
    }
    for (var i = 0; i < this.Secondname.length; i++) {
      this.Secondname[i].selected = this.selectedAll;
    }
    for (var i = 0; i < this.Thirdname.length; i++) {
      this.Thirdname[i].selected = this.selectedAll;
    }
  }

  checkIfAllSelected() {
    // this.selectedAll = this.names.every( (item: any) => {
    //   this.checkIfAllSecondnameSelected();
    //   return item.selected == true;
    // }
    // )

  }
  checkIfAllSecondnameSelected() {
    throw new Error('Method not implemented.');
  }

  selectAllSecondname(){}


}

