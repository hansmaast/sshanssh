<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core';
import { content } from './content'
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const containerId = useId()
const containerTarget = useTemplateRef<HTMLDivElement>(containerId)
const containerIsVisible = useElementVisibility(containerTarget)
const hasBeenAnimated = ref(false)

const titleClass = `title-${containerId}`
const paragraphClass = `paragraph-${containerId}`


watch(containerIsVisible, (isVisible) => {
  console.log('isVisible', isVisible)
    if (isVisible && !hasBeenAnimated.value) {
      const timeline = gsap.timeline();  
      
      // split elements with the class "split" into words and characters
        const split = SplitText.create(`.${titleClass}`, { type: "words, chars" });

        // now animate the characters in a staggered fashion
        timeline
          .from(split.chars, {
                  duration: .1, 
                  alpha: 0,
                  scale: .1, 
                  stagger: 0.03,
                  ease: 'power3.inOut',
          })
          .from(`.${paragraphClass}`, {
              filter: 'blur(10px)',
              duration: .4,
              ease: 'sine',
              onComplete() {
                  hasBeenAnimated.value = true
              },
          })
    }
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
