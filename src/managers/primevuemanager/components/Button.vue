<script>
import Button from 'primevue/button';

export default {
	props: {
		label: {
			type: String,
			required: true,
		}
	},
	components: { Button }
}
</script>

<template>
	<Button :label="label" />
</template>

<style>

</style>