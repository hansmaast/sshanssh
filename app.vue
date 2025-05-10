<script setup lang="ts">
import { content } from './content'

// const displayScrollHint = ref(false)

// onMounted(() => {
//   let timeout = setTimeout(() => {
//     displayScrollHint.value = true
//   }, 10000);

//   window.onscroll = () => {
//     timeout.close()
//     displayScrollHint.value = false
//   }
  
//   window.onscrollend = () => {
//     console.log('end')
//     timeout = setTimeout(() => {
//     displayScrollHint.value = true
//   }, 10000);
//   }
// })
</script>

<template>
  <header>
    <!--  -->
  </header>
  <main class="px-4 flex flex-col gap-8 justify-start">
    <NuxtRouteAnnouncer />
    <article>
      <section v-for="({ title, paragraph, id }, i) of content" :key="id"
        class="max-w-2xl mx-auto h-dvh flex flex-col justify-center">
        <component :is="id === 1 ? 'h1' : 'h2'" class="text-3xl md:text-4xl font-semibold mb-3">
          {{ title }}
        </component>
        <p class="text-lg md:text-xl font-extralight mb-5">{{ paragraph }}</p>
        <div class="flex gap-1">
          <div v-for="({ id: dotId }) of content" :key="dotId" class="w-4 h-4 md:w-5 md:h-5  rounded-full "
            :class="dotId <= id ? 'bg-gray-900' : 'bg-gray-300'" />
        </div>
      </section>
    </article>
    <!-- <div v-if="displayScrollHint" class="fixed bottom-20 w-12 h-12 bg-black left-1/2 -translate-x-2/4 rounded-full animate-pulse">
      <div class="bg-white w-[3px] bottom-3 top-3 absolute left-1/2 -translate-x-2/4 rounded-3xl"/>
      <div class="bottom-3 bg-white w-[3px] h-2/5 absolute left-1/2 -translate-x-2/4 rotate-45 origin-bottom-left rounded-3xl"/>
      <div class="bottom-3 bg-white w-[3px] h-2/5 absolute left-1/2 -translate-x-2/4 -rotate-45 origin-bottom-right rounded-3xl"/>
    </div> -->
  </main>
  <footer class="flex justify-center items-center gap-2 py-8">
    <p class="text-sm text-gray-500">
      Made with
      <span>
        🧠
      </span>
      by
      <a href="#" class="underline underline-offset-2">Hans</a>
    </p>
  </footer>
</template>
