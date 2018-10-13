import Vue from 'vue'
import Router from 'vue-router'
// import homePage from '@/components/homePage'
import detailPage from '@/components/detailPage'
import listPage from '@/components/listPage'
import addPage from '@/components/addPage'
import updatePage from '@/components/updatePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/detail/:id',
      name: 'detailPage',
      component: detailPage
    },
    {
      path: '/',
      name: 'listPage',
      component: listPage
    },
    {
      path: '/addCartoon',
      name: 'addPage',
      component: addPage
    },
    {
      path: '/updateCartoon/:id',
      name: 'updatePage',
      component: updatePage
    }
  ]
})
