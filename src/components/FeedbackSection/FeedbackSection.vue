<template>
	<section class="feedback">
		<div class="feedback__container">
			<div class="feedback__content">
				<h3 class="feedback__title">
					Check out our review from Parents like you
				</h3>
				
				<Slider v-if="isMobile" :slides="feedback" id="feedback" />
				<div v-else class="feedback__cards">
					<img
						v-for="item in feedback"
						:key="item.id"
						class="feedback__card"
						:src="item.url"
						:alt="item.description"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import feedback from '/src/feedback.json'
import { onMounted, onUnmounted, ref } from 'vue'
import Slider from '../Slider/Slider.vue'

const isMobile = ref(window.innerWidth < 768)

const handleResize = () => {
	isMobile.value = window.innerWidth < 768
}

onMounted(() => {
	window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
	window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
@import "FeedbackSection.scss";
</style>
