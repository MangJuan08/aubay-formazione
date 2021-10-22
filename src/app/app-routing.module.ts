import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BenvenutoPageComponent } from './pages/benvenuto-page/benvenuto-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'benvenuto', component: BenvenutoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
