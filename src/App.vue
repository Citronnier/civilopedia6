<template>
	<div class="wrapper">
		<div class="container">
			<div class="title">Civilopedia</div>
			<div class="header">
				<div class="header-list">

				</div>
			</div>
			<div class="content">

			</div>
		</div>
	</div>
</template>

<style>
body {
	background-image: url('./assets/parchment_patternbright.png');
	background-size: 256px 256px;
	background-repeat: repeat;
	display: flex;
	font-family: 'Penumbra HalfSerif Std';
	justify-content: center;
}
.wrapper {
	width: 950px;
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
	background-size: cover;
	width: 1028px;
	height: 61px;
}
</style>
<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style> -->
