<script setup lang="ts">
import { gsap } from "gsap";

const getRandomRotation = () => {
	return Math.floor(Math.random() * 90) - 45; // Random rotation between -45 and 45 degrees
};

const randomRotations = useState(() => {
	return Array.from({ length: 8 }, () => getRandomRotation());
});

onMounted(() => {
	gsap.fromTo('.box', {
		alpha: 0,
	}, {
		alpha: 1,
		duration: 0.5,
		stagger: 0.1,
		ease: 'power3.inOut',
	});
});
</script>

<template>
	<div class="absolute top-0 -translate-y-1/2 flex w-svw left-1/2 -translate-x-1/2" >
		<div
			v-for="degree in randomRotations"
			:key="degree" 
			class="box dark:bg-slate-800 bg-black  rounded-sm flex-1 h-20 md:h-36"
			:style="{rotate: degree + 'deg'}"
			/>
	</div>
</template>
