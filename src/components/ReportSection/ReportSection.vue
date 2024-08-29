<template>
	<section class="report">
		<div class="report__container">
			<div class="report__content">
				<div class="report__info">
					<h3 class="report__info-title">
						We will evaluate your kid's:
					</h3>
					
					<ol class="report__info-list">
						<li>Math knowledge overall proficiency</li>
						<li>Competence with Common Core Standards for Math Analysis</li>
						<li>The appropriate pace of learning</li>
						<li>Problem-solving, communication, and analytical skills</li>
					</ol>
					
					<Button>Get a lesson</Button>
				</div>
				
				<Slider :slides="images" id="report" />
				
				<Button>Get a lesson</Button>
			</div>
		</div>
	</section>
</template>

<script setup>
import images from '/src/images.json'
import Slider from '../Slider/Slider.vue'
import Button from '../ui/Button/Button.vue'
</script>

<style scoped lang="scss">
@import "ReportSection";
</style>
