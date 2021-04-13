import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomtryComponent } from './customtry/customtry.component';

const routes: Routes = [
  {path:'try', component:CustomtryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
