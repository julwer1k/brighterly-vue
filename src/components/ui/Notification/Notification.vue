<template>
	<section v-if="isVisible" class="notification">
		Your application has been sent successfully
	</section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const isVisible = ref(true)

onMounted(() => {
	const timer = setTimeout(() => {
		isVisible.value = false
	}, 3000)
	
	onUnmounted(() => {
		clearTimeout(timer)
	})
})
</script>

<style scoped>
@import "./Notification.module.scss";
</style>
