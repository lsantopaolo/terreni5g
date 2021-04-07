import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ListaSrComponent } from "./lista-sr/lista-sr.component";
import { RouteGuardService } from "./services/route-guard.service";

const sezioni: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "listasr",
    component: ListaSrComponent,
    canActivate: [RouteGuardService]
    
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(sezioni)],
  declarations: [],
  providers: [RouteGuardService],
  exports: [RouterModule]
})
export class RotteModule {}
