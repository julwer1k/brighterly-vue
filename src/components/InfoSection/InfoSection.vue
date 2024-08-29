<template>
	<section class="stem">
		<div class="stem__container">
			<div class="stem__content">
				<img
					src="/images/stem_logo_bureau.png"
					alt="Logo Bureau"
					class="stem__logo"
				/>
				<div class="stem__info">
					<p class="stem__text">
						According to the U.S. Bureau of Labor Statistics, STEM occupations
						generated an annual mean wage of <span>&#36;100,900</span>,
						compared to <span>&#36;55,260</span> for non-STEM occupations.
					</p>
					<div class="stem__stats">
						<div class="stem__stats-item">
							<p class="stem__itemTitle">STEM occupation</p>
							<p class="stem__item-progress stem__item-progress--green">
								<img
									src="/images/icons/smiling-face.svg"
									alt="Smiling face emoji icon"
								/>
								&#36;100,900/year
							</p>
						</div>
						<div class="stem__stats-item">
							<p class="stem__itemTitle">Non-STEM occupation</p>
							<p class="stem__item-progress stem__item-progress--yellow">
								<img
									src="/images/icons/pensive-face.svg"
									alt="Pensive face emoji icon"
								/>
								&#36;55,260/year
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
@import "InfoSection.scss";
</style>
