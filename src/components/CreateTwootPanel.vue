<template>
  <form class="create-twoot-panel" :class="{'--exceeded' : newTwootCharacterCount > 180}" @submit.prevent="createNewTwoot">
    <label for="newTwoot"><strong>New Twoot</strong> ({{newTwootCharacterCount}}/180)</label>
    <textarea id="newTwoot" rows="4" v-model="createTwootForm.content"></textarea>
    <div class="user-profile__create-twoot-type">
      <label for="newTwootType"><strong>Twoot Type</strong></label>
      <select id="newTwootType" v-model="createTwootForm.twootType">
        <option :key="index" :value="option.value" v-for="(option, index) in twootTypes">{{option.name}}</option>
      </select>
    </div>
    <button>Twoot</button>
  </form>
</template>

<script>
  export default {
    name: "CreateTwootPanel",
    data() {
      return {
        twootTypes: [
          { value: "draft", name: "Draft" },
          { value: "instant", name: "Instant Twoot" }
        ],
        createTwootForm: {
          content: "",
          twootType: "instant"
        }
      }
    },
    computed: {
      newTwootCharacterCount() {
        return this.createTwootForm.content.length;
      }
    },
    methods: {
      createNewTwoot() {
        if(this.createTwootForm.content && this.createTwootForm.twootType !== "draft") {
          this.$emit("add-twoot", this.createTwootForm)
          this.createTwootForm.content = "";
          this.createTwootForm.twootType = "instant";
        } 
      }
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