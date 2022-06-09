import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetalleComponent } from "../ingreso-egreso/detalle/detalle.component";
import { EstadisticaComponent } from "../ingreso-egreso/estadistica/estadistica.component";
import { IngresoEgresoComponent } from "../ingreso-egreso/ingreso-egreso.component";


// Simplemente Declaramos "dashboardRoutes" de tipo Routes y declaramos las rutas hijas como normalmente lo hariamos,
// 
export const dashboardRoutes: Routes = [
    // el path vacio por defauld nos mostrara este componente, obviamente esto estando dentro de el dashboard
    
    { path: '', component: EstadisticaComponent }, //http://localhost:4200/ <-- En este path mostraremos este componente
    { path: 'ingreso-egreso', component: IngresoEgresoComponent },
    { path: 'detalle', component: DetalleComponent  },
    { path: '**', redirectTo: '' }

]

