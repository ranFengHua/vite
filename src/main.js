import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/flexible'
import router from './router'
import { Popup, Form, Field, CellGroup, Button, Overlay, Notify, Collapse, CollapseItem, Swipe, SwipeItem } from 'vant'
let app=createApp(App)
app.use(router)
app.use(Popup)
app.use(Form)
app.use(Field)
app.use(CellGroup)
app.use(Overlay)
app.use(Button)
app.use(Collapse)
app.use(CollapseItem)
app.use(SwipeItem)
app.use(Swipe)
app.mount('#app')
