<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core';
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import type { Content } from '~/content';
import { Icon } from "@iconify/vue";
import BubbleWraps from './BubbleWraps.vue'

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
const dotClass = `dots-${containerId}`
const iconClass = `icon-${containerId}`

let timeline: gsap.core.Timeline | null = null
onMounted(() => {
  timeline = gsap.timeline().pause();

  const titleParts = SplitText.create(`.${titleClass}`, { type: "words, chars" });
  const paragraphParts = SplitText.create(`.${paragraphClass}`, { type: "words, chars" });

  gsap.set(`.${dotClass}`, { alpha: 0, scale: 0 });

  timeline
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
    .from(`.${iconClass}`, {
      duration: .1,
      alpha: 0,
      scale: 0,
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
  if (isVisible && timeline) {
    timeline.play()
    gsap.to(`.${dotClass}`, {
      duration: 0.25,
      alpha: 1,
      scale: 1,
      stagger: 0.12,
      ease: 'back.out',
    })
  }
})
</script>

<template>
  <section class="max-w-2xl mx-auto min-h-svh flex flex-col justify-center relative">
    <BubbleWraps />
    <div :ref="containerId" class="flex flex-col gap-12 sm:flex-row sm:gap-5">
      <div class="flex flex-[3_1_0%] gap-2 sm:gap-5">
        <div class="flex flex-col gap-1" aria-hidden="true">
          <div v-for="n in numberOfContentItems" :key="n" class="w-1 h-full md:h-full rounded-sm shadow-sm md:shadow-md"
            :class="[n <= content.id ? 'dark:bg-white bg-gray-900' : 'bg-slate-100 dark:bg-slate-500', dotClass]" />
        </div>
        <div class="flex-[3_1_0%]">
          <component :is="content.id === 1 ? 'h1' : 'h2'" class="text-3xl md:text-4xl font-semibold mb-2 sm:mb-3"
            :class="titleClass">
            {{ content.title }}
          </component>
          <p class="text-lg md:text-xl font-light md:font-extralight mb-5" :class="paragraphClass">
            {{ content.paragraph }}
          </p>
        </div>
      </div>
      <div class="flex-[1_1_0%] flex gap-3 items-center justify-center">
        <div class="gap-12 sm:gap-6 grid grid-cols-2 place-items-center">
          <Icon v-for="icon of content.icons" :key="icon" :icon="icon" class="w-14 h-14" :class="iconClass" />
        </div>
      </div>
    </div>
  </section>
</template>
