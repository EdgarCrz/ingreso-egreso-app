import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { dashboardRoutes } from "./dashboard/dashboard.routes";


const routes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', component: DashboardComponent, // el dashboard tendra rutas hijas, eso quiere decir que dentro de este componente se van a renderizar los componentes hijos que indiquemos
     children: dashboardRoutes }, // de esta manera cargamos nuestras rutas hijas sobre este componente, ahora en el podemos agregar el router-outlet y debera cargarnos nuestras rutas
    { path: '**', redirectTo: '' }

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }