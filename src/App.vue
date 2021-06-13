<template>
  <div id="app">
    <nav>
      <div class="navigation__logo">Twotter</div>
      <div class="navigation__username">{{ user.username }}</div>
    </nav>
    <UserProfile />
  </div>
</template>

<script>
  import UserProfile from "./components/UserProfile.vue";
  export default {
    name: "App",
    components: {
      UserProfile
    },
    data() {
      return {
        user: {
          username: "Turb0Waffle"
        }
      }
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