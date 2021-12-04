<template>
  <div class="grid grid-rows-1 gap-4 justify-items-center mx-10 mt-48 mb-56" v-if="userDetail">
    <div class="flex md:flex-row flex-col rounded-xl overflow-hidden shadow-xl my-3 bg-gray-800">
        <img :src="userDetail.data.avatar" :alt="userDetail.data.first_name" class="m-5 rounded-full">
        <div class="flex flex-col justify-center text-center md:text-left p-5">
            <h3 class="text-white text-lg font-bold font-sans">
                {{ userDetail.data.first_name }} {{ userDetail.data.last_name }}
            </h3>
            <p class="text-white text-md font-sans font-light mt-2">{{ userDetail.data.email }}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserDetail",
  props: ["id"],
  computed: {
    userDetail() {
         return this.$store.getters.getUserById;
      },
  },
  mounted() {
    this.$store.dispatch('loadUserById', this.id);
  },
}
</script>