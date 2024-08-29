<template>
	<main class="main">
		<Notification v-if="isSubmit" />
		<HeroSection />
		<InfoSection />
		<AboutSection @submit-form="handleFormSubmit" />
		<ReportSection />
		<CallSection />
		<FeedbackSection />
		<FeaturedSection />
	</main>
</template>

<script setup>
import { ref } from 'vue'
import AboutSection from '../AboutSection/AboutSection.vue'
import CallSection from '../CallSection/CallSection.vue'
import FeaturedSection from '../FeaturedSection/FeaturedSection.vue'
import FeedbackSection from '../FeedbackSection/FeedbackSection.vue'
import HeroSection from '../Hero/HeroSection.vue'
import InfoSection from '../InfoSection/InfoSection.vue'
import ReportSection from '../ReportSection/ReportSection.vue'
import Notification from '../ui/Notification/Notification.vue'

const isSubmit = ref(false);

function handleFormSubmit() {
	isSubmit.value = true;
	
	setTimeout(() => {
		isSubmit.value = false;
	}, 5000);
}
</script>
