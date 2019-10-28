import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
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
        { path: '/dashboard', name: 'dashboard', component: () => import('./components/pages/dashboard/DashboardPage.vue')},
        { path: '/profile', name: 'profile', component: () => import('./components/pages/profile/ProfilePage.vue')},
        { path: '/messages', name: 'messages', component: () => import('./components/pages/message/MessagePage.vue')},
        { path: '/cost-estimates', name: 'cost-estimates', component: () => import('./components/pages/cost_estimates/CostEstimatesPage.vue')},
        { path: '/bookings', name: 'bookings', component: () => import('./components/pages/bookings/BookingsPage.vue')},
        { path: '/service-reports', name: 'service-reports', component: () => import('./components/pages/service_reports/ServiceReportsPage.vue')},
        { path: '/sales', name: 'sales', component: () => import('./components/pages/sales/SalesPage.vue')},
        { path: '/vehicles', name: 'vehicles', component: () => import('./components/pages/vehicles/VehiclesPage.vue')},
        { path: '/users', name: 'users', component: () => import('./components/pages/users/UsersPage.vue')},
        { path: '/partner-operators', name: 'partner-operators', component: () => import('./components/pages/partner_operators/PartnerOperatorsPage.vue')},
        { path: '/technicians', name: 'technicians', component: () => import('./components/pages/technicians/TechniciansPage.vue')},
        { path: '/products', name: 'products', component: () => import('./components/pages/products/ProductsPage.vue')},
        { path: '/services', name: 'services', component: () => import('./components/pages/services/ServicesPage.vue')},
        { path: '/loyalty', name: 'loyalty', component: () => import('./components/pages/loyalty/LoyaltyPage.vue')},
        { path: '/settings/ads-management', name: 'ads-management', component: () => import('./components/pages/settings/ads_management/AdsManagementPage.vue')},
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
})
