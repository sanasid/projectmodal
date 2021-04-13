import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CustomtryComponent } from './customtry/customtry.component';
import { MatIconModule } from "@angular/material/icon";
import {MatSelectModule} from '@angular/material/select';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { UploadInputComponent } from './upload-input/upload-input.component';
import { PreprocessingComponent } from './preprocessing/preprocessing.component';
import { MatInputModule } from '@angular/material/input';
import { ModalComponent } from './modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { TooltipDirective } from './tooltip.directive';
import { ParseSchemaComponent } from './parse-schema/parse-schema.component';
import {MatRadioModule} from '@angular/material/radio';
import { ExampleComponent } from './example/example.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { TabletryComponent } from './tabletry/tabletry.component';
import { Screen3Component } from './screen3/screen3.component';


@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    CustomtryComponent,
    UploadInputComponent,
    PreprocessingComponent,
    ModalComponent,
    TooltipDirective,
    ParseSchemaComponent,
    ExampleComponent,
    DialogueComponent,
    TabletryComponent,
    Screen3Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
