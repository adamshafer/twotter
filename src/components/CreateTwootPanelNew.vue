<template>
  <form class="create-twoot-panel" :class="{'--exceeded' : newTwootCharacterCount > 180}" @submit.prevent="createNewTwoot">
    <label for="newTwoot"><strong>New Twoot</strong> ({{newTwootCharacterCount}}/180)</label>
    <textarea id="newTwoot" rows="4" v-model="state.createTwootForm.content"></textarea>
    <div class="user-profile__create-twoot-type">
      <label for="newTwootType"><strong>Twoot Type</strong></label>
      <select id="newTwootType" v-model="state.createTwootForm.twootType">
        <option :key="index" :value="option.value" v-for="(option, index) in state.twootTypes">{{option.name}}</option>
      </select>
    </div>
    <button>Twoot</button>
  </form>
</template>

<script>
  import { reactive, computed } from "vue";
  export default {
    name: "CreateTwootPanelNew",
    setup(props, ctx) {
      const state = reactive({
        twootTypes: [
          { value: "draft", name: "Draft" },
          { value: "instant", name: "Instant Twoot" }
        ],
        createTwootForm: {
          content: "",
          twootType: "instant"
        }
      });
      const newTwootCharacterCount = computed(() => state.createTwootForm.content.length);
      function createNewTwoot() {
        if(state.createTwootForm.content && state.createTwootForm.twootType !== "draft") {
          ctx.emit("add-twoot", state.createTwootForm)
          state.createTwootForm.content = "";
          state.createTwootForm.twootType = "instant";
        } 
      }
      return { state, newTwootCharacterCount, createNewTwoot };
    }
  }
</script>

<style scoped lang="scss">
  .create-twoot-panel {
    margin-top: 20px;
    padding: 20px 0;
    border-top: 1px solid #dfe3e8;
    label {
      display: block;
      padding-top: 20px;
    }
    textarea, select {
      display: block;
      width: 100%;
      padding: 10px;
      font-family: Avenir, Helvetica, Arial, sans-serif;
      box-sizing: border-box;
      border: 1px solid #dfe3e8;
      resize: none;
    }
    &.--exceeded {
      label[for="newTwoot"] {
        color: #f00;
      }
      textarea {
        border-color: #f00;
        color: #f00;
        outline-color: #f00;
      }
    }
    button {
      display: block;
      width: 100%;
      padding: 10px 40px;
      margin: 20px 0 0 0;
      border-radius: 5px;
      border: none;
      background-color: deeppink;
      color: white;
      font-weight: bold;
    }
  }
</style>