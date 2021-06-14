<template>
  <div class="user-profile"> 
    <div class="user-profile__user-panel">
      <h1 class="user-profile__user-name">@{{ state.user.username }}</h1>
      <div class="user-profile__admin-badge" v-if="state.user.isAdmin">Admin</div>
      <div class="user-profile__follower-count">
        <strong>Followers:</strong> {{ state.followers }}
      </div>
      <CreateTwootPanel @add-twoot="addTwoot" />
    </div>
    <div class="user-profile__twoots-wrapper">
      <TwootItem :key="twoot.id" :username="state.user.username" :twoot="twoot" v-for="twoot in state.user.twoots" />
    </div>
  </div>
</template>

<script>
  import { reactive, computed } from "vue";
  import { useRoute } from "vue-router";
  import { users } from "@/assets/users.js"
  import CreateTwootPanel from "@/components/CreateTwootPanel.vue";
  import TwootItem from "@/components/TwootItem.vue";
  export default {
    name: "UserProfile",
    components: { CreateTwootPanel, TwootItem },
    setup() {
      const route = useRoute();
      const userId = computed(() => route.params.userId);

      const state = reactive({
        followers: 0,
        user: users[userId.value - 1] || users[1]
      });
      function addTwoot(twoot) {
        state.user.twoots.unshift({id: state.user.twoots.length + 1, content: twoot.content, type: twoot.twootType });
      }
      return { state, addTwoot, userId };
    }
  }
</script>

<style scoped lang="scss">
  .user-profile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 50px;
    padding: 50px 5%;
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