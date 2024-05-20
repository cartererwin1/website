import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from '../projects/projects.component';
import { AboutmeComponent } from '../aboutme/aboutme.component';
const routes: Routes = [
  { path: '', redirectTo: '/aboutme', pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent },
  { path: 'aboutme', component: AboutmeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
