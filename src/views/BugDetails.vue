<template>
  <div class="bug-details container">
    <div class="row">
      <div class="col">
        <router-link :to="{name: 'home'}">Return to Home Page
        </router-link>
      </div>
    </div>
    <div class="row">
      <bug-info />
    </div>

    <div class="row">
      <note-form />
    </div>

    <div class="row">
      <bug-notes />
    </div>

  </div>
</template>

<script>
  import BugInfo from "@/components/BugInfo.vue"
  import BugNotes from "@/components/BugNotes.vue"
  import NoteForm from "@/components/NoteForm.vue"

  export default {
    name: 'bugDetails',
    data() {
      return {
        id: this.$route.params.id
      }
    },
    mounted() {
      this.$store.dispatch('getBugById', this.id)
      this.$store.dispatch('getNotes', this.id)
    },
    components: {
      BugInfo,
      BugNotes,
      NoteForm
    },
  }
</script>