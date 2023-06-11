import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AboutComponent } from './about.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'hello', component: HelloComponent }]

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule, CommonModule],
  declarations: [AppComponent, HelloComponent, AboutComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
