import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { LayoutWebsiteComponent } from './components/layout-website/layout-website.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { ProductComponent } from './pages/admin/product/product.component';
import { ProductEditComponent } from './pages/admin/product-edit/product-edit.component';

export const routes: Routes = [
    {
        path:"",component:LayoutWebsiteComponent,children:[
            {path:"",component:HomeComponent },
            {path:"about",component:AboutComponent },
            {path:"product/:id",component:ProductDetailComponent }
        ]
    },
    {
        path:"admin",component:LayoutAdminComponent,children:[
            {path:"",redirectTo:"/admin/dashboard",pathMatch:'full'},
            {path:"dashboard",component:DashboardComponent},
            {path:"product",component:ProductComponent},
            {path:"product/add",component:ProductAddComponent},
            {path:"product/:id/edit",component:ProductEditComponent},
        ]
    }
];
