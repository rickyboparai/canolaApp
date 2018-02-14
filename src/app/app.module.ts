import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { WwComponent } from './ww/ww.component';
import { MenuComponent } from './menu/menu.component';
import { TimingComponent } from './timing/timing.component';
import { MapComponent } from './map/map.component';
import { RiskAssessmentComponent } from './risk-assessment/risk-assessment.component';
import { TcComponent } from './tc/tc.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WwComponent,
    MenuComponent,
    TimingComponent,
    MapComponent,
    RiskAssessmentComponent,
    TcComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot([
      {path: 'tc', component: TcComponent},
      {path: 'ww', component: WwComponent},
      {path: 'menu', component: MenuComponent},
      {path: 'timing', component: TimingComponent},
      {path: 'map', component: MapComponent},
      {path: 'risk-assessment', component: RiskAssessmentComponent},
      {path: '', redirectTo: 'tc', pathMatch: 'full'},
      {path: '**', redirectTo: 'tc', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
