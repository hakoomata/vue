<template>
	<div class="card" style="width: 18rem">
		<div class="card-body">
			<h5 class="card-title">{{ title }}</h5>
			<p class="card-text">{{ contents }}</p>
			<p class="text-muted">{{ createAt }}</p>
		</div>
	</div>
</template>

<script setup>
defineProps({
	title: {
		type: String,
		required: true,
	},
	contents: {
		type: String,
	},
	createAt: {
		type: { String, Number, Date },
	},
});
</script>

<style lang="scss" scoped></style>
