import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {httpInterceptorProviders} from './http-interceptors';
import {ComponentModule} from './component/component.module';
import {ListComponent} from './list/list.component';
import {HomeComponent} from './home/home.component';
import {DetailComponent} from './detail/detail.component';
import { ImageUrlDirective } from './directive/image-url.directive';
import { VideoComponent } from './video/video.component';

registerLocaleData(zh);

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        HomeComponent,
        DetailComponent,
        ImageUrlDirective,
        VideoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgZorroAntdModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ComponentModule
    ],
    providers: [
        httpInterceptorProviders,
        {provide: NZ_I18N, useValue: zh_CN}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
