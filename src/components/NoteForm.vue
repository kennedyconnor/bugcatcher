<template>
  <div class="note-create col">
    <form @submit.prevent="handleSubmit" class="note-form" v-if="bug.closed == false">
      <h4>create note</h4>

      <div class="form-group">
        <input type="text" class="form-control" v-model="creator" placeholder="Enter your name">
      </div>

      <div class="form-group">
        <textarea class="form-control" v-model="content" rows="2" placeholder="Enter comment here"></textarea>
      </div>

      <button class="btn btn-success" type="submit">Create</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "NoteForm",
    data() {
      return {
        creator: "",
        content: ""
      }
    },
    computed: {
      bug() {
        return this.$store.state.activeBug
      }
    },
    methods: {
      handleSubmit() {
        let newNote = {
          creator: this.creator,
          content: this.content,
          bug: this.bug._id
        }
        if (newNote.creator && newNote.content && newNote.bug) {
          this.$store.dispatch('addNote', newNote)
        }
        else { alert("Fill out all the fields, guy") }
        this.creator = ""
        this.content = ""
      }
    },

  }
</script>