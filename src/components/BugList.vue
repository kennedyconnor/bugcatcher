<template>
  <div class="bug-list col">
    <h4>Bug List</h4>

    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Reported By</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bug in bugs">
          <td @click="selectBug(bug._id)">{{bug.title}}</td>
          <td>{{bug.creator}}</td>
          <td class="text-danger" v-if="bug.closed == false">Active</td>
          <td class="text-primary" v-else>Closed</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "BugList",

    computed: {
      bugs() {
        return this.$store.state.bugs
      }
    },

    methods: {
      selectBug(id) {
        this.$store.dispatch('selectBug', id)
      }
    }
  }
</script>