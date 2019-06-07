<template>
  <div class="home container">
    <h1>Bug-Catcher</h1>

    <div class="row">
      <bug-list />
    </div>

    <div class="row">
      <bug-form />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import BugList from "@/components/BugList.vue"
  import BugForm from "@/components/BugForm.vue"

  export default {
    name: 'home',
    components: {
      BugList,
      BugForm
    },
    mounted() {
      this.$store.dispatch('getAllBugs')
    }
  }
</script>