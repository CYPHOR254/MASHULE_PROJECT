import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchoolsComponent } from './schools/schools.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { EventstableComponent} from './eventstable/eventstable.component';

const routes: Routes = [
  { component: LoginComponent, path: 'login' },
  { component: RegisterComponent, path: 'register' },
  { component: HomeComponent, path: '' },
  { component: UserComponent, path: 'user', canActivate: [AuthGuard] },
  { component: EventstableComponent, path: 'eventstables', canActivate: [AuthGuard] },
  { component: CustomerComponent, path: 'customer', canActivate: [AuthGuard] },
  { component: EventsComponent, path: 'events' },
  { component: ContactComponent, path: 'contact' },
  { component: AboutComponent, path: 'about' },
  {
    component: DashboardComponent, path: 'dashboard', children: [{
      path: '',
      component: UserComponent,
    }

    ], canActivate: [AuthGuard]
  },
  { component: SchoolsComponent, path: 'schools' },
  { component: ForgotpasswordComponent, path: 'forgotpassword' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
