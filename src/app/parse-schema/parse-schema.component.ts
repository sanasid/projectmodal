import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
const initialSummary: any = [
  {
    table: [],
  },
  {
    database: [],
  },
  {
    schema: [],
  },
  {
    view: [],
  },
];
@Component({
  selector: 'app-parse-schema',
  templateUrl: './parse-schema.component.html',
  styleUrls: ['./parse-schema.component.scss'],
})
export class ParseSchemaComponent implements OnInit {
  singleSelect: any = null;
  selectedEntity: any = null;
  summary: any = null;
  summary2 = [...initialSummary];
  isEditing: boolean = false;
  enableEditIndex: any;
  editingItem: null;
  constructor() {
    {
      //get api data in this format so i have to show these things in source and target component
      this.summary = [
        {
          table: ['CUSTOMERS', 'emp', 'abc', 'pqr'],
        },
        {
          database: ['testDB'],
        },
        {
          schema: ['web'],
        },
        {
          view: ['Brazil_Customers', 'Customers'],
        },
      ];
    }

    // console.log('summary',this.summary[0]["table"][0])
    console.log('summary', this.summary[0]);
  }
  public toggleSelection(item: any, entity: string) {
    this.singleSelect = item;
    this.selectedEntity = entity;
    console.log('click on toggle', this.singleSelect);
  }

  public moveSelected() {
    const index = this.getIndex(this.selectedEntity);
    this.summary2[index][this.selectedEntity].push(this.singleSelect);
    this.singleSelect = null;
    this.selectedEntity = null;
  }

  getIndex(entity: string): number {
    const indexes: any = {
      table: 0,
      database: 1,
      schema: 2,
      view: 3,
    };
    return indexes[entity];
  }

  public moveAll() {
    this.summary2 = [...this.summary];
  }

  ngOnInit(): void {}
  switchEditMode(i: any, name: string) {
    this.isEditing = true;
    this.enableEditIndex = i;
    const entityIndex = this.getIndex(name);
    this.editingItem = this.summary2[entityIndex][name][i];
  }

  remove(i: any, name: string) {
    const entityIndex = this.getIndex(name);
    var index = this.summary2[entityIndex][name].indexOf(i);
    this.summary2[entityIndex][name].splice(index, 1);
  }

  save(i: number, name: string) {
    const entityIndex = this.getIndex(name);
    this.summary2[entityIndex][name][i] = this.editingItem;
    this.isEditing = false;
    this.enableEditIndex = i;
  }

  cancel() {
    this.isEditing = false;
    this.enableEditIndex = null;
  }

  moveToSource() {
    this.summary2 = [...initialSummary];
  }

  public keepOriginalOrder = (a: any, b: any) => {
    return a.value;
  };
}
