<template>
  <div id="app">
    <nav>
      <router-link to="/"><div class="navigation__logo">Twotter</div></router-link>
      <div class="navigation__username" v-if="user">{{ user.username }}</div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
  import { computed } from "vue";
  import { useStore } from "vuex";
  export default {
    name: "App",
    setup() {
      const store = useStore();
      const user = computed(() => store.state.User.user);
      return { user };
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    min-height: 100vh;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5%;
    background-color: deeppink;
    color: #fff;
    .navigation {
      &__logo {
        font-size: 24px;
        font-weight: bold;
      }
      &__user{
        font-weight: bold;
      }
    }
  }
</style>