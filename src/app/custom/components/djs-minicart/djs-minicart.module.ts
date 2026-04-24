import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DjsMinicartComponent } from './djs-minicart.component';
import { ConfigModule, I18nModule, UrlModule } from '@spartacus/core';
import { IconModule } from '@spartacus/storefront';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DjsMinicartComponent],
  imports: [
    CommonModule,
    UrlModule,
    RouterModule,
    I18nModule,
    IconModule,
    ConfigModule.withConfig({
      cmsComponents: {
        MiniCartComponent: {
          component: DjsMinicartComponent
        }
      }
    })
  ]
})
export class DjsMinicartModule { }
