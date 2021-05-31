import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main/main.component';
import { UserAgreementComponent } from './user-agreement/user-agreement.component';



const routes: Routes = [

  // for all
  { path: '', component: MainComponent },
  { path: 'purchase', component: MainComponent },
  { path: 'dashboard', component: MainComponent },
  { path: 'bind', component: MainComponent },
  { path: 'user_agreement', component: UserAgreementComponent },

  { path: '**', redirectTo: '/' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
