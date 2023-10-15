import { createRouter, createWebHistory } from 'vue-router';
import { createApp, onMounted } from 'vue';

import 'bootstrap';
import './assets/custom.scss';

import App from './App.vue';
import Home from './pages/Home.vue';
import Ref from './pages/Ref.vue';
import Classes from './pages/Classes.vue';
import VIf from './pages/VIf.vue';
import VFor from './pages/VFor.vue';
import Events from './pages/Events.vue';
import VModel from './pages/VModel.vue';
import TemplateRef from './pages/TemplateRef.vue';
import OnMounted from './pages/OnMounted.vue';

// définition des routes
const routes = [
  { path: '/', component: Home },
  { path: '/ref', component: Ref },
  { path: '/classes', component: Classes },
  { path: '/v-if', component: VIf },
  { path: '/v-for', component: VFor },
  { path: '/events', component: Events },
  { path: '/v-model', component: VModel },
  { path: '/template-ref', component: TemplateRef },
  { path: '/on-mounted', component: OnMounted },
];

// création du routeur
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// création de l'app vue
const app = createApp(App);
// on donne a vue notre routeur
app.use(router);

// on monte l'application à l'élémen #app de index.html
app.mount('#app');
