<template>
	<footer class="footer">
		<div class="footer__container">
			<div class="footer__content">
				<div class="footer__group-image">
					<img
						src="/images/footer_image_girl.png"
						alt="The girl at the bottom of the page"
						:class="['footer__image', 'footer__image-first']"
					/>
					
					<div class="footer__info">
						<h2 class="footer__title">
							Math is an essential skill to succeed. Check your child’s
							knowledge level.
						</h2>
						
						<Button additionalClasses="footer__button">
							Get a lesson
						</Button>
					</div>
					
					<img
						src="/images/footer_image_boy.png"
						alt="A student with books at the bottom of the page"
						:class="['footer__image', 'footer__image-second']"
					/>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>
import Button from '../ui/Button/Button.vue'
</script>

<style scoped>
@import "Footer.scss";
</style>
