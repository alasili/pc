import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from './list/list.component';
import {HomeComponent} from './home/home.component';
import {DetailComponent} from './detail/detail.component';


const routes: Routes = [
    // {
    //     path: 'home',
    //     loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    // },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'list',
        component: ListComponent
    },
    {
        path: 'detail',
        component: DetailComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
