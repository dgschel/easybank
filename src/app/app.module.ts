import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HeroShotComponent } from './hero-shot/hero-shot.component';
import { FeaturesComponent } from './features/features.component';
import { BlogArticleComponent } from './blog-article/blog-article.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroShotComponent,
    FeaturesComponent,
    BlogArticleComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
