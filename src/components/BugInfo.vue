<template>
  <div class="col">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-5">{{bug.title}}</h1>
        <p><b>Reported by:</b> {{bug.creator}}</p>
        <p v-if="bug.closed==false"><b>Status: </b> Active</p>
        <p v-else><b>Status: </b> Closed</p>
        <p><b>Description: </b> {{bug.description}}</p>
        <button v-if="bug.closed==false" class="btn btn-primary" @click="handleSubmit(bug._id)">Close</button>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "BugInfo",
    computed: {
      bug() {
        return this.$store.state.activeBug
      }
    },

    methods: {
      handleSubmit(id) {
        this.$store.dispatch('closeBug', id)
      }
    }
  }
</script>