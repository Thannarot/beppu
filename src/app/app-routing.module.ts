import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'pwd-view', loadChildren: './tabs-pwd/tabs.module#TabsPageModule' },
  { path: 'government-view', loadChildren: './tabs-government/tabs.module#TabsPageModule' },
  { path: 'register', loadChildren: './auth/register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'user-auth', loadChildren: './auth/user-auth/user-auth.module#UserAuthPageModule' },
  { path: 'request-view', loadChildren: './pwd-viewer/request-view/request-view.module#RequestViewPageModule' },
  { path: 'tab5', loadChildren: './tab5/tab5.module#Tab5PageModule' },
  { path: 'pwd-account', loadChildren: './pwd-account/pwd-account.module#PwdAccountPageModule' },
  { path: 'tracking', loadChildren: './tracking/tracking.module#TrackingPageModule' },
  { path: 'tracking-pwdviwe', loadChildren: './tracking-pwdviwe/tracking-pwdviwe.module#TrackingPwdviwePageModule' },
  { path: 'register-pwd', loadChildren: './auth/register-pwd/register-pwd.module#RegisterPwdPageModule' },
  { path: 'register-government', loadChildren: './auth/register-government/register-government.module#RegisterGovernmentPageModule' },
  { path: 'government-viewer', loadChildren: './government-viewer/government-viewer.module#GovernmentViewerPageModule' },
  { path: 'government-account', loadChildren: './government-account/government-account.module#GovernmentAccountPageModule' },
  { path: 'change-password', loadChildren: './auth/change-password/change-password.module#ChangePasswordPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
