<template>
	<div class="custom-select">
		<div
			class="custom-select__selected"
			:class="{ 'custom-select--opened': isOpen }"
			@click="toggleSelect"
		>
			{{ selected }}
		</div>
		<ul
			class="custom-select__list"
			:class="{ 'custom-select--hidden': !isOpen }"
		>
			<li
				v-for="grade in grades"
				:key="grade.id"
				class="custom-select__item"
				:class="{ 'custom-select__item--selected': selected === grade.text }"
				@click="selectGrade(grade.text)"
			>
				{{ grade.text }}
			</li>
		</ul>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const grades = [
	{ id: 0, text: '1st Grade Math' },
	{ id: 1, text: '2nd Grade Math' },
	{ id: 2, text: '3rd Grade Math' },
];

const isOpen = ref(false);
const selected = ref('Kindergarten');

const toggleSelect = () => {
	isOpen.value = !isOpen.value;
};

const selectGrade = (grade) => {
	selected.value = grade;
	isOpen.value = false;
};
</script>

<style scoped>
@import "CustomSelect.scss";
</style>
