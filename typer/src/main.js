import Vue from 'vue'
import Buefy from 'buefy'
import App from './App.vue'
import IdleVue from 'idle-vue'
import {
    store
} from './store/store'
import 'buefy/dist/buefy.css'
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import {
    faUserSecret,
    faArrowAltCircleLeft,
    faArrowAltCircleRight,
    faTimesCircle,
    faWindowClose
} from '@fortawesome/free-solid-svg-icons'
import {
    library
} from '@fortawesome/fontawesome-svg-core'

library.add(
    faUserSecret,
    faTimesCircle,
    faArrowAltCircleLeft,
    faArrowAltCircleRight,
    faWindowClose
)


Vue.use(Buefy)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// Event bus
export const serverBus = new Vue();

// Idle bus
export const eventsHub = new Vue();
Vue.use(IdleVue, {
    eventEmitter: eventsHub,
    idleTime: 10000
})


new Vue({
    render: h => h(App),
    store
}).$mount('#app')
