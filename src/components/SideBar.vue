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

        <div class="flex gap-2 flex-col" v-for="(items, key) of menus">

          <span class="flex text-black mt-4 ml-4">{{ key }} </span>


          <router-link :key="item.link" :to="item.link" v-for="item in items"
            class="group flex items-center space-x-2  hover:text-white transition-200 text-black bg-white hover:bg-button -solid border-2 border-outline hover:border-primary rounded-4xl px-4 py-2 w-64 mx-auto my-0">

            <component :is="item.icon" />
            <span class="text-2x font-extraBold text-black  group-hover:text-white  font-medium">{{ item.title }}</span>
          </router-link>
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
  </div>
</template>
<script>
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
  props: {
    showSidebar: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      'menus': {
        'CLIENT': [
          {
            title: 'Queries',
            icon: 'query-svg',
            link: '/queries'
          },
          {
            title: 'Trial Signups',
            icon: 'user-svg',
            link: '/trial-signups'
          },
          {
            title: 'Data',
            icon: 'user-svg',
            link: '/data'
          },
          {
            title: 'Invoice Generation',
            icon: 'query-svg',
            link: '/invoice-generation'
          }
        ],
        'ORGANISATION': [{
          title: 'Question Bank',
          icon: 'question-svg',
          link: '/question-bank'
        },
        {
          title: 'Assets',
          icon: 'assets-svg',
          link: '/assets'
        },
        {
          title: 'FAQS',
          icon: 'assets-svg',
          link: '/faqs'
        },
        {
          title: 'Access Management',
          icon: 'assets-svg',
          link: '/access-management'
        },
        {
          title: 'Access Management',
          icon: 'question-svg',
          link: '/access-management'
        }
        ]
      }
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