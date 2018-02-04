import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default,
    },
    {
      path: '/about',
      name: 'about',
      component: require('@/components/About').default,
    },
    {
      path: '/preferences',
      name: 'preferences',
      component: require('@/components/Preferences').default,
    },
    {
      path: '/counter',
      name: 'counter',
      component: require('@/components/Counter').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
