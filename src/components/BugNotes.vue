<template>
  <div class="col">

    <div class="row">
      <note-form />
    </div>

    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">User</th>
          <th scope="col">Message</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <!-- <tbody>
            <tr v-for="">
              <td @click="selectBug(bug._id)">{{bug.title}}</td>
              <td>{{bug.creator}}</td>
              <td class="text-danger" v-if="bug.closed == false">Active</td>
              <td class="text-primary" v-else>Closed</td>
            </tr>
          </tbody> -->
    </table>

  </div>
</template>

<script>

  import NoteForm from './NoteForm.vue'

  export default {
    name: "BugNotes",
    components: {
      NoteForm
    },
    data() {
      return {

      }
    },

    computed: {
      notes() {
        return this.$store.state.notes
      },
      bug() {
        return this.$store.state.activeBug
      }
    },

    methods: {
      addNote() {

      }
    }
  }
</script>