<template>
  <div class="grid lg:grid-cols-3 grid-cols-1 gap-4 justify-items-center overflow-hidden md:mx-10 mx-2 my-12">
    <CardUsers v-for="post in firstPosts.data" v-bind:key="post.id" :post="post"/>
    <CardUsers v-for="post in secondPosts.data" v-bind:key="post.id" :post="post"/>
  </div>
</template>

<script>
import CardUsers from './CardUsers.vue'

export default {
  components: {
    CardUsers
  },
  computed: {
    firstPosts() {
         return this.$store.getters.getFirstPosts;
    },
    secondPosts() {
         return this.$store.getters.getSecondPosts;
    },
  },
  created() {
    this.$store.dispatch('loadFirstPosts');
    this.$store.dispatch('loadSecondPosts');
  },
}
</script>