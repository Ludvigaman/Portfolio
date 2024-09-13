import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';
import { NgxTypedWriterModule } from 'ngx-typed-writer';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { WhoamiComponent } from './whoami/whoami.component';
import {MatCardModule} from '@angular/material/card';
import { SkillsComponent } from './skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    SplashscreenComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    ExperienceComponent,
    WhoamiComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedWriterModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
