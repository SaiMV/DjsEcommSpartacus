import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DjsSiteloginComponent } from './djs-sitelogin.component';
import { ConfigModule, I18nModule, UrlModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { IconModule } from '@spartacus/storefront';



@NgModule({
  declarations: [DjsSiteloginComponent],
  imports: [
    CommonModule,
    UrlModule,
    RouterModule,
    I18nModule,
    IconModule,
    ConfigModule.withConfig({
      cmsComponents: {
        LoginComponent: {
          component: DjsSiteloginComponent
        }
      }
    })
  ]
})
export class DjsSiteloginModule { }
