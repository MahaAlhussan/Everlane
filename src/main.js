import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'  

import './styles.css' 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'



import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faThumbsUp, faFaceSmile ,faXmark,faFaceSadTear, faFaceAngry, faCircleCheck, faFaceFrownOpen, faOtter,faBars ,faArrowRight, faMagnifyingGlass, faUser, faCartShopping, faTruckFast, faRecycle, faLocationDot, faLeaf, faTrash} from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret, faThumbsUp, faFacebook, faXmark,faFaceSmile, faFaceSadTear, faFaceAngry,faCircleCheck, faBars,faFaceFrownOpen, faOtter,faArrowRight,faMagnifyingGlass, faUser, faCartShopping,faTruckFast, faRecycle, faLocationDot, faTrash,faLeaf)

const pinia = createPinia()  

createApp(App)
.use(pinia)  
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')