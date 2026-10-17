import { Routes } from '@angular/router';
import { TodoComponent } from "./pages/todo/todo.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";

export const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  // },

  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'todo', component: TodoComponent },
];
