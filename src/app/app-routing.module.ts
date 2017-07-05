import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { InstallandConfigureComponent } from './installand-configure/installand-configure.component';
import { ConfgureRolesFeaturesComponent } from './confgure-roles-features/confgure-roles-features.component';
import { HyperVComponent } from './hyper-v/hyper-v.component';
import { NetworkingComponent } from './networking/networking.component';
import { ActiveDirectoryComponent } from './active-directory/active-directory.component';
import { ManageGroupPolicyComponent } from './manage-group-policy/manage-group-policy.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'installand-configure', component: InstallandConfigureComponent },
  { path: 'configure-roles-features', component: ConfgureRolesFeaturesComponent },
  { path: 'hyper-v', component: HyperVComponent },
  { path: 'networking', component: NetworkingComponent },
  { path: 'active-directory', component: ActiveDirectoryComponent },
  { path: 'manage-group-policy', component: ManageGroupPolicyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
