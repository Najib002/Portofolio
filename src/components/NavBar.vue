<template>
<nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="flex items-center justify-evenly h-16">
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="sm:block sm:ml-6">
          <div class="flex space-x-4">
            <router-link to="/" class="focus:bg-gray-900 text-white hover:bg-gray-700 px-3 py-2 rounded-md text-md font-medium" aria-current="page">
              Home
            </router-link>
            <router-link to="/users" class="focus:bg-gray-900 text-white hover:bg-gray-700 px-3 py-2 rounded-md text-md font-medium">
              List Users
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
