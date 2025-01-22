<script setup lang="ts">
defineOptions({
	name: "LxContainer",
});
</script>

<template>
	<div class="mg-container">
		<slot></slot>
		<div class="table-content">
			<slot name="table"></slot>
		</div>
	</div>
</template>

<style scoped>
.mg-container {
	display: flex;
	flex-direction: column;
	height: calc(100vh - 80px);
	margin: 10px;

	.table-content {
		flex: 1;
		height: 0;
		padding: 8px 8px 0;
		margin-top: 8px;
		background: white;
	}
}
</style>
