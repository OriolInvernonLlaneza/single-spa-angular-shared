import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: "main",
    component: HeaderComponent,
    children: [
      { path: "", redirectTo: "login", pathMatch: "full" },
      { path: "**", component: EmptyRouteComponent },
    ],
  },
  { path: "**", component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
})
export class AppRoutingModule { }
