import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from './list/list.component';
import {HomeComponent} from './home/home.component';
import {DetailComponent} from './detail/detail.component';
import {VideoComponent} from './video/video.component';
import {VrComponent} from './vr/vr.component';


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
        path: 'video',
        component: VideoComponent
    },
    {
        path: 'detail',
        component: DetailComponent
    },
    {
        path: 'vr',
        component: VrComponent
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
