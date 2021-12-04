<template>
    <div class="flex lg:flex-col flex-row rounded-3xl overflow-hidden shadow-xl my-3 bg-gray-800 md:w-2/3 w-full">
        <img :src="post.avatar" :alt="post.first_name" class="lg:w-full w-1/2">
        <div class="flex flex-col justify-center md:text-center text-left px-3 pb-6 pt-2 w-full">
            <h3 class="text-white text-sm md:text-lg font-bold font-sans">
                <router-link :to="{name: 'User', params: {id: post.id}}">
                    {{ post.first_name }} {{ post.last_name }}
                </router-link>
            </h3>
            <p class="mt-2 text-sm md:text-lg font-sans font-light text-white">{{ post.email }}</p>
        </div>
    </div>
</template>

<script>
export default {
  props: ["post"]
}
</script>