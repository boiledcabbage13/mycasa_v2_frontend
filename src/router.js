import Vue from 'vue'
import Router from 'vue-router'
import Storage from '@/storage.js'

let storage = new Storage();

Vue.use(Router)

// export default new Router({
let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('./components/access/Login.vue')
    },
    {
      path: '/dashboard',
      name: 'home',
      component: () => import('./components/app_layout/MainLayout.vue'),
      redirect: '/dashboard',
      children: [
        { path: '/dashboard', name: 'dashboard', component: () => import('./components/pages/dashboard/DashboardPage.vue'),
          meta: {
            requiredAuth: true
          }
        },
        { path: '/profile', name: 'profile', component: () => import('./components/pages/profile/ProfilePage.vue'),
          meta: {
            requiredAuth: true
          }
        },
        { path: '/messages', name: 'messages', component: () => import('./components/pages/message/MessagePage.vue'),
          meta: {
            requiredAuth: true
          }
        },
        { path: '/cost-estimates', name: 'cost-estimates', component: () => import('./components/pages/cost_estimates/CostEstimatesPage.vue'),
          meta: {
            requiredAuth: true
          }
        },
        { path: '/bookings', name: 'bookings', component: () => import('./components/pages/bookings/BookingsPage.vue'),
          meta: {
            requiredAuth: true
          }
        },
        { path: '/service-reports', name: 'service-reports', component: () => import('./components/pages/service_reports/ServiceReportsPage.vue'),
          meta: {
            requiredAuth: true
          }
        },
        { path: '/sales', name: 'sales', component: () => import('./components/pages/sales/SalesPage.vue'),
          meta: {
            requiredAuth: true
          }
        },
        { path: '/vehicles', name: 'vehicles', component: () => import('./components/pages/vehicles/VehiclesPage.vue'),
          meta: {
            requiredAuth: true
          }
        },
        { path: '/users', name: 'users', component: () => import('./components/pages/users/UsersPage.vue'),
          meta: {
            requiredAuth: true
          }
        },
        { path: '/partner-operators', name: 'partner-operators', component: () => import('./components/pages/partner_operators/PartnerOperatorsPage.vue'),
          meta: {
            requiredAuth: true
          }
        },
        { path: '/technicians', name: 'technicians', component: () => import('./components/pages/technicians/TechniciansPage.vue'),
          meta: {
            requiredAuth: true
          }
        },
        { path: '/products', name: 'products', component: () => import('./components/pages/products/ProductsPage.vue'),
          meta: {
            requiredAuth: true
          }
        },
        { path: '/services', name: 'services', component: () => import('./components/pages/services/ServicesPage.vue'),
          meta: {
            requiredAuth: true
          }
        },
        { path: '/loyalty', name: 'loyalty', component: () => import('./components/pages/loyalty/LoyaltyPage.vue'),
          meta: {
            requiredAuth: true
          }
        },
        { path: '/settings/ads-management', name: 'ads-management', component: () => import('./components/pages/settings/ads_management/AdsManagementPage.vue'),
          meta: {
            requiredAuth: true
          }
        },
      ]
    },
    {
      path: '/app-styles',
      name: 'app-styles',
      component: () => import('./components/pages/AppStyles.vue')
    },
    {
      path: '/test-calendar',
      name: 'test-calendar',
      component: () => import('./components/pages/TestCalendar.vue')
    },
  ]
});

router.beforeEach( (to, from, next) => {
  let authenticated =  storage.get('authenticated');

  if (to.matched.some(record => record.meta.requiredAuth)) {
    //Redirect if not authenticated
    if(!authenticated) {
      next('/');
    } 
  } 

  next();
});

export default router