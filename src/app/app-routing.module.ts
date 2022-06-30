import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommicsComponent } from './components/commics/commics.component';

const routes: Routes = [
  {
    path: '', component: CommicsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
