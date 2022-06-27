import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { MainCOmpComponent } from './main-comp/main-comp.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { SharedComponent } from './shared/shared.component';

const routes: Routes = [
  { path: '', component: MainCOmpComponent },
  {
    path: "edit", component: EditComponent,
    children: [
      { path: "personal", component: PersonalDataComponent },
      {path:"shared",component:SharedComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
