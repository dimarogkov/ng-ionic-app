import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loading',
    pathMatch: 'full'
  },
  {
    path: 'loading',
    loadChildren: () => import('./pages/loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pickcup-call',
    loadChildren: () => import('./pages/pickcup-call/pickcup-call.module').then( m => m.PickcupCallPageModule)
  },
  {
    path: 'pickcup-calls',
    loadChildren: () => import('./pages/pickcup-calls/pickcup-calls.module').then( m => m.PickcupCallsPageModule)
  },
  {
    path: 'plagins',
    loadChildren: () => import('./pages/plagins/plagins.module').then( m => m.PlaginsPageModule)
  },
  {
    path: 'modals',
    loadChildren: () => import('./pages/modals/modals.module').then( m => m.ModalsPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'refresh',
    loadChildren: () => import('./pages/refresh/refresh.module').then( m => m.RefreshPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'toast',
    loadChildren: () => import('./pages/toast/toast.module').then( m => m.ToastPageModule)
  },
  {
    path: 'accordion',
    loadChildren: () => import('./pages/accordion/accordion.module').then( m => m.AccordionPageModule)
  },
  {
    path: 'ion-loading',
    loadChildren: () => import('./pages/ion-loading/ion-loading.module').then( m => m.IonLoadingPageModule)
  },
  {
    path: 'segment',
    loadChildren: () => import('./pages/segment/segment.module').then( m => m.SegmentPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./pages/popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: 'datetime',
    loadChildren: () => import('./pages/datetime/datetime.module').then( m => m.DatetimePageModule)
  },
  {
    path: 'select',
    loadChildren: () => import('./pages/select/select.module').then( m => m.SelectPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
