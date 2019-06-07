<template>
  <div class="bug-details container">

    <div class="row">
      <bug-info />
    </div>

    <div class="row">
      <bug-notes />
    </div>

  </div>
</template>

<script>
  import BugInfo from "@/components/BugInfo.vue"
  import BugNotes from "@/components/BugNotes.vue"

  export default {
    name: 'bugDetails',
    props: ["id"],
    mounted() {
      this.$store.dispatch('getBugById', this.id)
      this.$store.dispatch('getNotes', this.id)
    },
    components: {
      BugInfo,
      BugNotes
    },
  }
</script>