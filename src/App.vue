<template>
	<div class="wrapper">
		<div class="container">
			<div class="title">Civilopedia</div>
			<div class="header">
				<div class="header-list">
					<div><img alt="Concepts" title="Concepts" src='./assets/buttons/concepts.webp'></div>
				</div>
			</div>
			
			<div class="content">
				<div class="side-panel"></div>
				<div class="main-content"></div>
			</div>
		</div>
	</div>
</template>

<script>

</script>

<style>
body {
	background-image: url('./assets/parchment_patternbright.png');
	background-size: 256px 256px;
	background-repeat: repeat;
	display: flex;
	font-family: 'Penumbra HalfSerif Std';
	justify-content: center;
	padding: 40px;
}
.wrapper {
	width: 820px;
	border: 59px solid;
	border-image: url('./assets/core/controls_windowtitle.png') 165 fill;
	border-image-repeat: stretch;
	background-color: #381013
}
.container {
	justify-content: center;
	margin: -20px -52px -50px -40px
}
.title {
	width: 100%;
	text-align: center;
	color: #ffffff;
	font-size: x-large;
	margin-top: -50px;
}
.header {
	background-image: url('./assets/core/composite_tabledge2.png');
	background-repeat: round;
	background-size: cover;
	width: 900px;
	height: 61px;
}
</style>