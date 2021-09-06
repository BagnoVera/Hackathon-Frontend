import VueRouter from 'vue-router';
import Vue from "vue";

Vue.use(VueRouter);

import TestComponent from './components/Test';
import ResultsComponent  from './components/Results';
import QuestionComponent from './components/Question';

const routes = [
  {
    path: '/test',
    component: TestComponent,
    children: [
    {
      path: '',
      redirect: '1'
    },
    {
      path: 'results',
      component: ResultsComponent
    },
    {
      path: ':id',
      component:QuestionComponent
    },
    {
      path: '*',
      redirect: '/1'
    }]
  }
]

const router = new VueRouter({
  routes
});

export default router
