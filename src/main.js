import { createApp } from 'vue'
import App from './HomePage.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBriefcase, faGlobe, faChartLine, faGraduationCap, faLanguage, faLaptop } from '@fortawesome/free-solid-svg-icons';

library.add(faBriefcase, faGlobe, faChartLine, faGraduationCap, faLanguage, faLaptop);

const app = createApp(App);

// Регистрация компонента после создания приложения
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');