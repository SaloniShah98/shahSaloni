import { Routes } from '@angular/router';
import { About } from './about/about';
import { Projects } from './projects/projects';
import { Experience } from './experience/experience';
import { Contact } from './contact/contact';

export const routes: Routes = [
    { path: 'about', component: About },
    { path: 'projects', component: Projects },
    { path: 'experience', component: Experience },
    { path: 'contact', component: Contact },
    { path: '', redirectTo: '/about', pathMatch: 'full' }
];
