import { createRouter, createWebHistory } from 'vue-router'

import CloudInvitationView from './views/CloudInvitationView.vue'
import EditorView from './views/EditorView.vue'
import StorageView from './views/StorageView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: EditorView },
    { path: '/storage', component: StorageView },
    { path: '/demo', component: EditorView, meta: { demo: true } },
    { path: '/share/:roomId', component: EditorView },
    {
      path: '/cloud/invitations/:invitationId',
      name: 'cloud-invitation',
      component: CloudInvitationView
    },
    { path: '/cloud/share/:shareId', name: 'cloud-share', component: EditorView }
  ]
})

export default router
