<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core';
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import type { Content } from '~/content';

gsap.registerPlugin(SplitText);

const { content } = defineProps<{
  content: Content,
  numberOfContentItems: number,
}>()

const containerId = useId()
const containerTarget = useTemplateRef<HTMLDivElement>(containerId)
const containerIsVisible = useElementVisibility(containerTarget, {
  once: true,
  rootMargin: '-25% 0px -25% 0px',
})

const titleClass = `title-${containerId}`
const paragraphClass = `paragraph-${containerId}`
const dotsClass = `dots-${containerId}`

let timeline: gsap.core.Timeline | null = null
onMounted(() => {
    timeline = gsap.timeline().pause();
    
    const titleParts = SplitText.create(`.${titleClass}`, { type: "words, chars" });
    const paragraphParts = SplitText.create(`.${paragraphClass}`, { type: "words, chars" });

    timeline
    .from(`.${dotsClass}`, {
        duration: 0.25,
        alpha: 0,
        scale: 0,
        stagger: 0.025,
        ease: 'back.out',
      })
    .fromTo(titleParts.chars, {
        alpha: 0,
        scale: .1,
      },
    {
        duration: .1,
        alpha: 1,
        scale: 1,
        stagger: 0.03,
        ease: 'power3.inOut',
      })
      .fromTo(paragraphParts.words, {
        borderBottom: '0.75px solid transparent',
        textDecoration: 'strike-through',
      }, {
        duration: .1,
        stagger: 0.03,
        ease: 'power3.inOut',
        borderBottom: '0.75px solid black',
        textDecoration: 'none',
      })
})

watch(containerIsVisible, (isVisible) => {
  console.log('isVisible', isVisible)
  
  if (isVisible && timeline) {
    timeline.play()
  }
})
</script>

<template>
  <section class="max-w-2xl mx-auto min-h-svh flex flex-col justify-center">
    <div :ref="containerId">
      <component :is="content.id === 1 ? 'h1' : 'h2'" class="text-3xl md:text-4xl font-semibold mb-3"
        :class="titleClass">
        {{ content.title }}
      </component>
      <p class="text-lg md:text-xl font-light md:font-extralight mb-5" :class="paragraphClass">
        {{ content.paragraph }}
      </p>
      <div class="flex gap-1" aria-hidden="true">
        <div v-for="n in numberOfContentItems" :key="n" class="w-4 h-4 md:w-5 md:h-5 rounded-full shadow-sm"
          :class="[n <= content.id ? 'bg-gray-900' : 'bg-gray-200', dotsClass]" />
      </div>
    </div>
  </section>
</template>
