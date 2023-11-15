<template>
  <div class="reactive flex min-h-screen">
    <!-- SideBar -->
    <side-bar :showSidebar="showSidebar" />
    <!-- Main Content -->
    <div class="flex-1">
      <!-- Header -->
      <div
        class="bg-white shadow px-2 py-4 transform -translate-x-0 transition duration-200 ease-in-out md:translate-x-full">
        <button @click="showSidebar = !showSidebar" class="text-cyan-600 font-extrabold">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

        </button>
      </div>
      <div class="p-0 text-cyan-700 font-extrabold">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
export default {
  name: 'App',
  data() {
    return {
      showSidebar: false
    }
  },
  components: {
    SideBar
  }
}
</script>