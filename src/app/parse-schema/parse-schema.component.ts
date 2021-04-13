import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parse-schema',
  templateUrl: './parse-schema.component.html',
  styleUrls: ['./parse-schema.component.scss']
})
export class ParseSchemaComponent implements OnInit {

  // this is not actual data to show please check constructor to show the actual data in tables
  table = [
    {  text: 'table1',selected: false},
    {  text: 'table2', selected: false  },
  ];
  views = [
    {  text: 'views1',selected: false},
    {  text: 'views2', selected: false  },
  ];
  
  schema=[
    {  text: 'schema1',selected: false},
    {  text: 'schema2', selected: false},
  ]

  database=[
    {  text: 'database1',selected: false},
    {  text: 'database2', selected: false  },
  ]

  list2:any = [
    {  text: '',selected: false},
];
  ind:any
summary:any 
table1:any
    constructor(){
      {
        //get api data in this format so i have to show these things in source and target component
        this.summary=[
           {
              "table":[
                 "CUSTOMERS",
                 "emp",
                 "abc",
                 "pqr"
              ]
           },
           {
              "database":[
                 "testDB"
              ]
           },
           {
              "schema":[
                 "web"
              ]
           },
           {
              "view":[
                 "Brazil_Customers",
                 "Customers"
              ]
           }
        ]
     }
        
    // console.log('summary',this.summary[0]["table"][0])
    console.log('summary',this.summary.table)

  }
  public toggleSelection(item:any, table:any) {
    item.selected = !item.selected;
    console.log('click on toggle');
  }



  public moveSelected(direction:any) {
    if (direction === 'left') {
    }
     else {
      console.log('else condition')
      this.table.forEach(item  => {
        if (item.selected){
          this.list2.push(item);
        }
      });
      this.views.forEach(item  => {
        if (item.selected){
          this.list2.push(item);
        }
      });
      this.schema.forEach(item  => {
        if (item.selected){
          this.list2.push(item);
        }
      });
      this.database.forEach(item  => {
        if (item.selected){
          this.list2.push(item);
        }
      });
    
    }
    console.log('left selected')
    
  }

  public moveAll(direction:any) {
    
    if (direction === 'left') {
    } 
   
    else  {
      this.list2 = [...this.list2,...this.table,...this.views,...this.schema,...this.database];
      this.table = [...this.table];
      this.views = [...this.views]
      this.schema = [...this.schema]
      this.database = [...this.database]

    }
  }

  ngOnInit(): void {
  }

  isEditing: boolean = false;
  enableEditIndex:any

  switchEditMode(i:any) {
    this.isEditing =true;
    this.enableEditIndex = i;
  }

  remove(i:any){
    var index = this.list2.indexOf(i);
    this.list2.splice(index, 1);
  }
  save() {
    this.isEditing = false;
    this.enableEditIndex = null;
  }

  cancel() {
    this.isEditing = false;
    this.enableEditIndex = null;
  }

}
