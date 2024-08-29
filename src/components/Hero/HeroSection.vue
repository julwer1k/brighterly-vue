<!-- HeroSection.vue -->
<template>
	<section class="hero">
		<div class="hero__container">
			<div class="hero__content">
				<div class="hero__text-content">
					<h1 class="hero__title">Check your child’s math level</h1>
					<span class="hero__info">Grades 1-8</span>
					<p class="hero__text">
						Take a knowledge evaluation test to determine your child’s
						math level and <span>receive a learning plan</span> to thrive in
						math
					</p>
					<ul class="hero__list">
						<li class="hero__item">
							<img src="/images/icons/teacher.svg" alt="Teacher icon" />
							A 1-on-1 live lesson with math teacher
						</li>
						<li class="hero__item">
							<img src="/images/icons/stats.svg" alt="Statistics icon" />
							Your kid math level analysis with strong and weak sides outline
						</li>
						<li class="hero__item">
							<img src="/images/icons/paper.svg" alt="Paper icon" />
							Learning plan to improve in math
						</li>
					</ul>
					<Button class="hero__button">Get a lesson</Button>
				</div>
				<div class="hero__image-box">
					<img
						src="/images/hero_image_boy.png"
						alt="The boy's picture"
						class="hero__image"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import Button from '../ui/Button/Button.vue'
</script>

<style scoped>
@import "HeroSection.scss";
</style>
