import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import { users } from "../assets/users";
import Home from "../views/Home.vue";
import UserProfile from "../views/UserProfile";
import Admin from "../views/Admin";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user/:userId",
    name: "UserProfile",
    component: UserProfile,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      requiresAdmin: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

/* 
    beforeEach function is called before any route actions.
    to: target route
    from: original route
    next: method to call for the navigation.
*/
router.beforeEach(async (to, from, next) => {
  const user = store.state.User.user;

  if (!user) {
    // dispatch is the function to be called to run actions. (store.commit() to run mutations.)
    await store.dispatch("User/setUser", users[0]);
  }

  const isAdmin = false;
  const requiresAdmin = to.matched.some((record) => record.meta.requiresAdmin);

  if (requiresAdmin && !isAdmin) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
