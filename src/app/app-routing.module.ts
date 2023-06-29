import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownformComponent } from './dropdownform/dropdownform.component';
import { RadioformComponent } from './radioform/radioform.component';

const routes: Routes = [
  {
    path : '' , component : DropdownformComponent
  },
  {
    path : 'radio' , component : RadioformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
