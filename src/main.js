import { createApp } from 'vue';
//import { router } from './router';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import "bootstrap/dist/css/bootstrap.min.css";
import App from './App.vue'

const app = createApp(App);

//app.use(router);
app.mount('#app');
