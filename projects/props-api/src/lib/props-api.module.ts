import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PropsApiComponent } from './props-api.component';
import { PropsApiService } from './props-api.service';
import { NgxCacheHandlerService } from './services/handler/ngx-cache-handler.service';
import { NgxToasterHandlerService } from './services/handler/ngx-toaster-handler.service';
import { NgxAlertService } from './services/ngx-alert.service';
import { NgxCacheService } from './services/ngx-cache.service';
import { NgxRequestStickService } from './services/ngx-request-stick.service';
import { NgxStoragesService } from './services/ngx-storages.service';
import { NgxToasterService } from './services/ngx-toaster.service';
import { NgxStyleToasterComponent } from './shared/ui/toaster/ngx-style-toaster.component';
import { NgxStyleAlertComponent } from './shared/ui/alert/ngx-style-alert.component';
import { NgxToasterBuilderService } from './services/ngx-toaster-builder.service';


@NgModule({
  declarations: [
    PropsApiComponent,
    NgxStyleToasterComponent,
    NgxStyleAlertComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    PropsApiComponent,
    NgxStyleToasterComponent,
    NgxStyleAlertComponent
  ],
  entryComponents: [
    NgxStyleToasterComponent,
    NgxStyleAlertComponent
  ],
  providers: [
    NgxStoragesService
  ]
})
export class PropsApiModule {

  public static forRoot(): ModuleWithProviders {

    return {
      ngModule: PropsApiModule,
      providers: [
        PropsApiService,
        NgxAlertService,
        NgxStoragesService,
        NgxRequestStickService,
        NgxToasterBuilderService,
        {
          provide: NgxCacheService,
          useClass: NgxCacheHandlerService
        },
        {
          provide: NgxToasterService,
          useClass: NgxToasterHandlerService
        }
      ],
    };
  }

}
