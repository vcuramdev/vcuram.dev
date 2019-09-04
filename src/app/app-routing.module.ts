import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TalksComponent } from "./components/talks/talks.component";

const routes: Routes = [{ path: "talks", component: TalksComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [TalksComponent];
