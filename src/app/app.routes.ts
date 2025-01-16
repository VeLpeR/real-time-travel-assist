import { Routes } from '@angular/router';
import { HomeFeedComponent } from './home-feed/home-feed.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { RewardPointsComponent } from './reward-points/reward-points.component';
import { SettingComponent } from './setting/setting.component';
import { ProfileComponent } from './setting/profile/profile.component';
import { HelpCenterComponent } from './setting/help-center/help-center.component';
import { AboutComponent } from './setting/about/about.component';
import { NotificationComponent } from './notification/notification.component';
export const routes: Routes = [
    
            {
                path: '',
                component: AuthComponent,
                children: [
                    {
                        path: '',
                        component: LoginComponent
                    },
                    {
                        path: 'sign-up',
                        component: SignUpComponent
                    }

                ]
            },
            {
                path: 'home',
                component: HomeFeedComponent
            },
            {
                path:'reward-points',
                component: RewardPointsComponent
            },
            {
                path:'notification',
                component: NotificationComponent
            },
            {
                path:'setting',
                component: SettingComponent,
                children: [
                    {
                        path: 'profile',
                        component: ProfileComponent
                    },
                    {
                        path: 'help',
                        component: HelpCenterComponent
                    },
                    {
                        path: 'about',
                        component: AboutComponent
                    }
                ]
            }
        
];
