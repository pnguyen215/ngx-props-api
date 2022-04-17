import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PropsApiComponent } from './props-api.component';
import { PropsApiService } from './props-api.service';
import { NgxCacheHandlerService } from './services/handler/ngx-cache-handler.service';
import { NgxCacheService } from './services/ngx-cache.service';
import { NgxStoragesService } from './services/ngx-storages.service';



@NgModule({
  declarations: [PropsApiComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [PropsApiComponent]
})
export class PropsApiModule {

  public static forRoot(): ModuleWithProviders {

    return {
      ngModule: PropsApiService,
      providers: [
        NgxStoragesService,
        {
          provide: NgxCacheService,
          useClass: NgxCacheHandlerService
        }
      ]
    };
  }

}
