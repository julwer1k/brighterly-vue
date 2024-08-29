<template>
	<Swiper
		:space-between="20"
		:id="id"
		class="slider"
		:modules="[Navigation, Pagination, EffectCoverflow, Keyboard]"
		grabCursor="true"
		loop="true"
		slidesPerView="auto"
		effect="coverflow"
		:breakpoints="breakpoints"
		:keyboard="keyboard"
		:pagination="pagination"
		:coverflowEffect="coverflowEffect"
	>
		<SwiperSlide
			v-for="slide in slides"
			:key="slide.id"
			class="slide"
		>
			<img
				class="slide__image"
				:src="slide.url"
				alt="Examples of website platform statistics"
			/>
		</SwiperSlide>
		
		<div class="swiper-pagination" />
	</Swiper>
</template>

<script setup>
import { EffectCoverflow, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'

const props = defineProps({
	slides: {
		type: Array,
		required: true
	},
	id: {
		type: String,
		required: true
	}
})

const { slides, id } = props

const breakpoints = {
	320: {
		effect: 'slide'
	},
	1020: {
		effect: 'coverflow'
	}
}

const keyboard = {
	enabled: true,
	onlyInViewport: false
}

const pagination = {
	el: '.swiper-pagination',
	clickable: true
}

const coverflowEffect = {
	rotate: 0,
	stretch: 420,
	depth: 120,
	modifier: 1.2,
	slideShadows: false
}
</script>

<style scoped>
@import "./Slider.scss";
</style>
