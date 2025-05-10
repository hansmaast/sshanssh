<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

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

const setupTimeout = () => {
  timeout = setTimeout(() => {
  scrollSentence.value = getRandomVibe()
  displayScrollSentence.value = true
}, 15000)}

onMounted(() => setupTimeout())
onBeforeUnmount(() => clearTimeout(timeout))

watch([isScrolling, arrivedState], ([scrolling, arrived]) => {
  if (scrolling || arrived.bottom) {
    displayScrollSentence.value = false
    clearTimeout(timeout)
  } else {
    setupTimeout()
}})
</script>

<template>
    <div class="pointer-events-none fixed left-0 right-0 px-1 w-full bottom-4 md:bottom-2 flex justify-center items-center">
      <p 
        class="bg-gray-700 text-gray-300 font-light text-xs md:text-sm px-3 py-1 rounded-2xl shadow-lg flex" 
        :class="{
          'fade-in': displayScrollSentence,
          'fade-out': !displayScrollSentence,
        }"
      >
        {{ scrollSentence }}
      </p>
    </div>
</template>

<style scoped>
.fade-in {
  animation: fadeIn 0.5s ease-in-out forwards;
}

.fade-out {
  animation: fadeOut 0.5s ease-in-out forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0; 
  }
}

</style>
