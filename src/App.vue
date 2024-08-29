<template>
	<div class="wrapper">
		<Header />
		<Main />
		<Footer />
	</div>
</template>

<script setup>
import Footer from './components/Footer/Footer.vue'
import Header from './components/Header/Header.vue'
import Main from './components/Main/Main.vue'
</script>

<style scoped>
@import './App.scss';
</style>