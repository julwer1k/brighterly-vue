<template>
	<button
		:disabled="isDisabled"
		:class="[baseClass, additionalClasses]"
	>
		<slot></slot>
	</button>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import './Button.scss'

const props = defineProps({
	isDisabled: {
		type: Boolean,
		default: false,
	},
	additionalClasses: {
		type: String,
		default: '',
	},
});

const baseClass = 'button';
const additionalClasses = computed(() => props.additionalClasses);
</script>

<style scoped>
@import "Button.scss";
</style>
