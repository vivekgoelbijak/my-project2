<!-- Create SideBar menu use vuetify directives -->
<template>
  <div class="reactive flex min-h-screen space-y-6">
    <!-- SideBar -->
    <div
      class="bg-white border text-cyan-100 w-80 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out md:relative md:translate-x-0"
      :class="{ 'relative translate-x-0': showSidebar }">
      <a href="" class="flex justify-center flex-col items-center space-x-2 px-4 py-4">
        <app-logo />
        <span class="text-2x font-extraBold text-primary">Ambition Hire</span>
        <span class="text-2x font-extraBold text-black text-xl mt-4 font-medium">Anmol Duggal</span>
        <span class="text-disabled text-sm">Co-Founder</span>
        <button
          class="mt-2 text-primary bg-white border-solid border-2 border-primary rounded-4xl px-1 py-2 w-64 flex justify-center items-center gap-2">
          <span>View Profile</span>
          <arrow-right-svg />
        </button>
      </a>
      <hr class="text-outline h-2">
      <nav>
        <a href=""
          class="group flex items-center space-x-2  hover:text-white transition-200 text-black bg-white hover:bg-button -solid border-2 border-outline hover:border-primary rounded-4xl px-4 py-2 w-64 mx-auto my-0">
          <insight-svg />
          <span class="text-2x font-extraBold text-black  group-hover:text-white  font-medium">Insight</span>
        </a>
        <div class="flex gap-2 flex-col">
          <span class="flex text-black mt-4 ml-4">CLIENT </span>


          <a href=""
            class="group flex items-center space-x-2  hover:text-white transition-200 text-black bg-white hover:bg-button -solid border-2 border-outline hover:border-primary rounded-4xl px-4 py-2 w-64 mx-auto my-0">

            <query-svg />
            <span class="text-2x font-extraBold text-black  group-hover:text-white  font-medium">Queries</span>
          </a>
          <a href=""
            class="group flex items-center space-x-2  hover:text-white transition-200 text-black bg-white hover:bg-button -solid border-2 border-outline hover:border-primary rounded-4xl px-4 py-2 w-64 mx-auto my-0">

            <user-svg />
            <span class="text-2x font-extraBold text-black  group-hover:text-white  font-medium">Trial Signups</span>
          </a>
          <a href=""
            class="group flex items-center space-x-2  hover:text-white transition-200 text-black bg-white hover:bg-button -solid border-2 border-outline hover:border-primary rounded-4xl px-4 py-2 w-64 mx-auto my-0">

            <user-svg />
            <span class="text-2x font-extraBold text-black  group-hover:text-white  font-medium">Data</span>
          </a>
          <a href=""
            class="group flex items-center space-x-2  hover:text-white transition-200 text-black bg-white hover:bg-button -solid border-2 border-outline hover:border-primary rounded-4xl px-4 py-2 w-64 mx-auto my-0">

            <query-svg />
            <span class="text-2x font-extraBold text-black  group-hover:text-white  font-medium">Invoice Generation</span>
          </a>
        </div>
        <div class="flex gap-2 flex-col">
          <span class="flex text-black mt-4 ml-4">ORGANISATION </span>


          <a href=""
            class="group flex items-center space-x-2  hover:text-white transition-200 text-black bg-white hover:bg-button -solid border-2 border-outline hover:border-primary rounded-4xl px-4 py-2 w-64 mx-auto my-0">

            <question-svg />
            <span class="text-2x font-extraBold text-black  group-hover:text-white  font-medium">Question Bank</span>
          </a>
          <a href=""
            class="group flex items-center space-x-2  hover:text-white transition-200 text-black bg-white hover:bg-button -solid border-2 border-outline hover:border-primary rounded-4xl px-4 py-2 w-64 mx-auto my-0">

            <assets-svg />
            <span class="text-2x font-extraBold text-black  group-hover:text-white  font-medium">Assets</span>
          </a>
          <a href=""
            class="group flex items-center space-x-2  hover:text-white transition-200 text-black bg-white hover:bg-button -solid border-2 border-outline hover:border-primary rounded-4xl px-4 py-2 w-64 mx-auto my-0">

            <assets-svg />
            <span class="text-2x font-extraBold text-black  group-hover:text-white  font-medium">FAQS</span>
          </a>
          <a href=""
            class="group flex items-center space-x-2  hover:text-white transition-200 text-black bg-white hover:bg-button -solid border-2 border-outline hover:border-primary rounded-4xl px-4 py-2 w-64 mx-auto my-0">

            <assets-svg />
            <span class="text-2x font-extraBold text-black  group-hover:text-white  font-medium">Access Management</span>
          </a>
          <a href=""
            class="group flex items-center space-x-2  hover:text-white transition-200 text-black bg-white hover:bg-button -solid border-2 border-outline hover:border-primary rounded-4xl px-4 py-2 w-64 mx-auto my-0">

            <question-svg />
            <span class="text-2x font-extraBold text-black  group-hover:text-white  font-medium">Access Management</span>
          </a>
        </div>
        <div class="mt-8 mb-8">
          <button
            class="group flex justify-center items-center space-x-2 rounded-4xl px-4 py-2 w-64 mx-auto my-0 transition-200 bg-red text-red">
            <log-out-svg />
            <span class="text-2x font-extraBold text-red ">Logout</span>
          </button>
        </div>
      </nav>
    </div>
    <!-- Main Content -->
    <div class="flex-1">
      <!-- Header -->
      <div class="bg-white shadow px-2 py-4">
        <button @click="showSidebar = !showSidebar" class="text-cyan-600 font-extrabold">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

        </button>
      </div>
      <div class="p-0 text-cyan-700 font-extrabold">Content</div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import AppLogo from '@/SVG/AppLogo.vue';
import InsightSvg from '@/SVG/InsightSvg.vue';
import QuerySvg from '@/SVG/QuerySvg.vue';
import UserSvg from '@/SVG/UserSvg.vue';
import QuestionSvg from '@/SVG/QuestionSvg.vue';
import AssetsSvg from '@/SVG/AssetsSvg.vue';
import ArrowRightSvg from '@/SVG/ArrowRightSvg.vue';
import LogOutSvg from '@/SVG/LogOutSvg.vue';

export default {
  name: 'SideBar',
  setup() {
    const showSidebar = ref(false)
    return {
      showSidebar
    }
  },
  components: {
    AppLogo,
    InsightSvg,
    QuerySvg,
    UserSvg,
    QuestionSvg,
    AssetsSvg,
    ArrowRightSvg,
    LogOutSvg
  }
}
</script>