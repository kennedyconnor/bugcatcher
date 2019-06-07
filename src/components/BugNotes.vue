<template>
  <div class="col">
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">User</th>
          <th scope="col">Message</th>
          <th scope="col"><button class="btn btn-success">Add Note</button></th>
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


  export default {
    name: "BugNotes",

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