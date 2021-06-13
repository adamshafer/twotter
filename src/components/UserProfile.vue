<template>
  <div class="user-profile"> 
    <div class="user-profile__user-panel">
      <h1 class="user-profile__user-name">@{{ user.username }}</h1>
      <div class="user-profile__admin-badge" v-if="user.isAdmin">Admin</div>
      <div class="user-profile__follower-count">
        <strong>Followers:</strong> {{ followers }}
      </div>
      <CreateTwootPanel @add-twoot="addTwoot" />
    </div>
    <div class="user-profile__twoots-wrapper">
      <TwootItem :key="twoot.id" :username="user.username" :twoot="twoot" v-for="twoot in user.twoots" />
    </div>
  </div>
</template>

<script>
  import CreateTwootPanel from "./CreateTwootPanel.vue";
  import TwootItem from "./TwootItem.vue";
  export default {
    name: "UserProfile",
    components: { CreateTwootPanel, TwootItem },
    data() {
      return {
        followers: 0,
        user: {
          id: 0,
          username: "Turb0Waffle",
          firstName: "Adam",
          lastName: "Shafer",
          email: "adam@adamshafer.com",
          isAdmin: true,
          twoots: [
            { id: 0, content: "Twotter is amazing!" },
            { id: 1, content: "Don't forget to subscribe to LevelUpTuts!" },
            { id: 2, content: "Hey, check out my blog at adamshafer.com." }
          ]
        }
      }
    },
    methods: {
      addTwoot(twoot) {
        this.user.twoots.unshift({id: this.user.twoots.length + 1, content: twoot.content, type: twoot.twootType });
      }
    }
  }
</script>

<style scoped lang="scss">
  .user-profile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    max-width: 800px;
    margin: 20px auto;
    &__user-panel {
      display: flex;
      flex-direction: column;
      margin-right: 50px;
      padding: 20px;
      background-color: #fff;
      border-radius: 5px;
      border: 1px solid #dfe3e8;
      h1 {
        margin: 0;
      }
    }
    &__admin-badge {
      background-color: rebeccapurple;
      color: #fff;
      border-radius: 5px;
      padding: 0 10px;
      margin-right: auto;
      font-weight: bold;
    }
  }
</style>