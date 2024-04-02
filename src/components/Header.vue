<template>
	<header class="container">
		<Navbar/>
		<section>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src="../assets/reading-vector.png"
          width="340"
          class="absolute object-cover float-right"
        />
      </div>

      <div class="lg:py-24">
        <h2 class="text-3xl font-bold sm:text-4xl w-96">What Book Are You Looking For</h2>

        <p class="mt-4 text-gray-600">
          Not Sure What Book to read Next? Explore Our Catalog of public Domain Books With Our Editors
        </p>

        <a
          href="#"
          class="mt-8 inline-block rounded bg-black px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-black border-transparent border-2 hover:border-black focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Explore Now
        </a>
      </div>
    </div>
  </div>
</section>
	</header>
</template>

<script type="text/javascript">
import Navbar from './Navbar.vue'
export default {
	components: {
		Navbar
	}
}
</script>