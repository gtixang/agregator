import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IndexBannerComponent } from './components/index-banner/index-banner-component';
import { IndexAdvantagesComponent } from './components/index-advantages/index-advantages-component';

@NgModule({
  declarations: [IndexBannerComponent, IndexAdvantagesComponent],
  exports: [IndexBannerComponent, IndexAdvantagesComponent],
  imports: [CommonModule],
})
export class IndexPageModule {}
