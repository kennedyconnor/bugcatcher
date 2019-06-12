<template>
  <div class="col">

    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">User</th>
          <th scope="col">Message</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="note in notes">
          <td>{{note.creator}}</td>
          <td>{{note.content}}</td>
          <button class="btn btn-danger" @click="deleteNote(note._id)">Delete</button>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>


  export default {
    name: "BugNotes",

    computed: {
      notes() {
        return this.$store.state.notes
      },
      bug() {
        return this.$store.state.activeBug
      }
    },

    methods: {
      deleteNote(noteId) {
        let ids = {
          noteId: noteId,
          bugId: this.bug._id
        }

        this.$store.dispatch('deleteNote', ids)
      }
    }
  }
</script>