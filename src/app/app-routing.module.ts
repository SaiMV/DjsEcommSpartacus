import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DjsMinicartModule } from './custom/components/djs-minicart/djs-minicart.module';
import { DjsSiteloginModule } from './custom/components/djs-sitelogin/djs-sitelogin.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), DjsMinicartModule, DjsSiteloginModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
