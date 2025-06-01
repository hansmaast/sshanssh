<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { Icon } from "@iconify/vue";

const { isScrolling, arrivedState } = useWindowScroll()
const scrollSentence = useState<string | undefined>()
const displayScrollSentence = ref(false)

const scrollVibes = [
  "You need to scroll hombre, there's more.",
  "Papi, can I call u that? You need to scroll.",
  "Muchaca, there's more content below.",
  "Buddy, don't be lazy, scroll down.",
  "The next section is dope. Scroll, promise.",
  "Don't hesitate, scroll it!",
  "A gentle reminder, you know what to do.",
]

const getRandomVibe = () => {
  return scrollVibes[Math.floor(Math.random() * scrollVibes.length)]
}

let timeout: NodeJS.Timeout

const setupTimeout = (ms = 10000) => {
  timeout = setTimeout(() => {
    scrollSentence.value = getRandomVibe()
    displayScrollSentence.value = true
  }, ms)
}

onMounted(() => setupTimeout(3000))
onBeforeUnmount(() => clearTimeout(timeout))

watch([isScrolling, arrivedState], ([scrolling, arrived]) => {
  if (scrolling || arrived.bottom) {
    displayScrollSentence.value = false
    clearTimeout(timeout)
  } else {
    setupTimeout()
  }
})
</script>

<template>
  <Transition name="fade" mode="out-in">
    <div
      class="pointer-events-none fixed left-0 right-0 px-1 w-full bottom-4 md:bottom-2 flex justify-center items-center"
      aria-hidden="true" v-if="displayScrollSentence">
      <p
        class="bg-gray-700 text-gray-300 font-light text-xs md:text-sm px-3 py-1 rounded-2xl shadow-lg flex items-center">
        {{ scrollSentence }}
      </p>
      <Icon icon="ph:mouse-scroll-thin" width="32" height="32" class="ml-1" />
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
