import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AboutComponent }   from './about.component';
import { HomeComponent }   from './home.component';
import { ItemComponent }   from './item.component';
import { NotFoundComponent }   from './not-found.component';

import { ItemStatComponent }   from './item.stat.component';
import { ItemDetailsComponent }   from './item.details.component';

const itemRoutes: Routes = [
  { path: 'details', component: ItemDetailsComponent},
  { path: 'stat', component: ItemStatComponent},
];

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', redirectTo: '/about', pathMatch:'full'},
  { path: 'hello', component: HelloComponent},
  // { path: 'item/:id', component: ItemComponent},
  { path: 'item/:id', component: ItemComponent, children: itemRoutes},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,  HomeComponent,  ItemComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
