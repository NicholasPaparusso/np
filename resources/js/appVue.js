import { createApp } from 'vue';
import { MotionPlugin } from '@vueuse/motion';
import { router } from './router';
import App  from './app.vue';

const app = createApp(App);
app.use(MotionPlugin);
app.use(router);
app.mount('#app')
