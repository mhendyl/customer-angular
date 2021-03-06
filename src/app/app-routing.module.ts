import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';
import { LandingComponent } from './modules/landing/landing.component';
import { AboutComponent } from './modules/about/about.component';
import { UpdateComponent } from './modules/update/update.component';


const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: LandingComponent
      },{
        path: 'about',
        component: AboutComponent
      },{
        path: 'update/:id',
        component: UpdateComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
