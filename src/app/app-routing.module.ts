import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { YaayComponent } from "./yaay/yaay.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "yaay", component: YaayComponent },
  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
