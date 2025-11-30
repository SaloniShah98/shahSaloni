import { Routes } from '@angular/router';
import { About } from './about/about';
import { Projects } from './projects/projects';

export const routes: Routes = [
    { path: 'about', component: About },
    { path: 'projects', component: Projects },
    { path: '', redirectTo: '/about', pathMatch: 'full' }
];
