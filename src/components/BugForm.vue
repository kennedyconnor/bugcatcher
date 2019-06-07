<template>
  <div class="create-bug col">

    <h4> Log a new bug!</h4>

    <form @submit.prevent="handleSubmit" class="bug-form">

      <div class="form-group">
        <input type="text" class="form-control" v-model="title" placeholder="enter bug title">
      </div>

      <div class="form-group">
        <input type="text" class="form-control" v-model="creator" placeholder="reported by...">
      </div>

      <div class="form-group">
        <textarea class="form-control" v-model="description" rows="3"
          placeholder="describe the bug you are experiencing"></textarea>
      </div>

      <button class="btn btn-success" type="submit">Create</button>
    </form>

  </div>
</template>

<script>
  export default {
    name: "BugForm",

    data() {
      return {
        title: "",
        description: "",
        creator: "",

      }
    },

    methods: {
      handleSubmit() {
        let newBug = {
          title: this.title,
          description: this.description,
          creator: this.creator,

        }
        if (newBug.title && newBug.description && newBug.creator) {
          this.$store.dispatch('createBug', newBug)
        }
        else { alert("Fill out all the fields, guy") }
      }
    }

  }
</script>