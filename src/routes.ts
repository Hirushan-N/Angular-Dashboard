import { Routes } from "@angular/router";
import { SectionHealthComponent } from "./app/section-health/section-health.component";
import { SectionOrdersComponent } from "./app/section-orders/section-orders.component";
import { SectionSalesComponent } from "./app/section-sales/section-sales.component";

export const appRoutes: Routes =[
    {path:'health', component:SectionHealthComponent},
    {path:'order', component:SectionOrdersComponent},
    {path:'sales', component:SectionSalesComponent},
    {path:'',redirectTo:'/sales',pathMatch:'full'}
];