<script setup lang="ts">
import { content } from './content'

useHead({
  title: 'sshanssh.work | Hi, I\'m Hans',
  link: [
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
  ],
  bodyAttrs: {
    class: 'overflow-x-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100',
  },
})

</script>

<template>
  
  <header>
    <!--  -->
  </header>
  <main ref="el" class="px-6 flex flex-col gap-8 justify-start">
    <NuxtRouteAnnouncer />
    <article>
      <GSappedContent
        v-for="item in content"
        :key="item.id"
        :content="item"
        :number-of-content-items="content.length"
      />
    </article>
    <ScrollHint />
  </main>
  <footer class="flex justify-center items-center gap-2 py-10">
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
