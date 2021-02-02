import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { InscriptionDisabledDirective } from './inscription-disabled.directive';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormateursComponent } from './formateur/formateur.component';
import { ParticipantsComponent } from './participant/participant.component';
const appRoutes: Routes = [
  {
    path: '', component: DashboardComponent,
  
  },
  {
        path: 'list',
        component: SessionItemListComponent
      },
      { path: 'dashboard', component: DashboardComponent, },
      {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
      },
      { path: 'formateur', component: FormateursComponent },
      { path: 'participant', component: ParticipantsComponent },
      { path: '**', component: PagenotfoundComponent },
    ]

@NgModule({
  declarations: [
    AppComponent,
    SessionItemComponent,
    SessionItemListComponent,
    InscriptionDisabledDirective,
    PagenotfoundComponent,
    MenuComponent,
    DashboardComponent,
    FormateursComponent,
    ParticipantsComponent
  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
  ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
