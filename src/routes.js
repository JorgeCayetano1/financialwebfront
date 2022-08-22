import MainHome from '@/components/Main.vue'
import Users from '@/views/users/components/UsersTable.vue'

export const routes = [
    {
        path: '/home',
        name: 'home',
        component: MainHome,
      },
      {
        path: '/users',
        name: 'users',
        component: Users,
      }
]