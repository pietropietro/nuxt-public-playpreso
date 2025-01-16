<!-- App.vue -->
<template>
  <div class="font-ocrastd min-h-screen bg-pp-dark text-white grid md:grid-cols-2">
    <!-- TOP BAR / MARQUEE -->
    <!-- Give this a consistent height or padding so it's not cut off, and a bottom border. -->
      <!-- marquee can remain, or consider a CSS-based scroll; either way, put it in a container so it doesn't overflow -->
      <div class="flex flex-col items-center justify-center 
         text-7xl md:text-8xl lg:text-9xl tracking-tighter p-8">
        <div class="flex">
          <span class="tilted-span">P</span>
          <span class="tilted-span">L</span>
          <span class="tilted-span">A</span>
          <span class="tilted-span">Y</span>
        </div>
        <div class="flex">
          <span class="tilted-span">P</span>
          <span class="tilted-span">R</span>
          <span class="tilted-span">E</span>
          <span class="tilted-span">S</span>
          <span class="tilted-span">O</span>
        </div>
      </div>

      <div 
        class=" content-center
              p-4 
               md:col-span-1 
               md:border-r-4 md:border-b-0 md:border-black
              "
      >
        <div class="text-2xl">
          what is it?
        </div>
        <div>
        a football score-prediction game.
        </div>
        <div class="text-2xl pt-4">
         is it betting?
        </div>
        <div>
         no. no money is involved.
        </div>
        <div class="text-2xl pt-4">
        what do I win?
        </div>
        <div>
        digital trophies + glory.
        </div>
        

        <!-- Container for the badges -->
        <div class="flex gap-4 items-end mt-6  md:items-center justify-center md:justify-start">
          <!-- iOS Badge Container -->
          <a 
            href="https://apps.apple.com/it/app/playpreso/id6476687916?l=en-GB" 
            target="_blank" 
            aria-label="Download on the App Store"
            class="flex items-center justify-center"
          >
            <img 
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
              alt="Download on the App Store" 
              class="h-10 w-auto object-contain border-0"
              loading="lazy"
            />
          </a>

          <!-- Google Play Badge Container -->
          <a 
            href="https://play.google.com/store/apps/details?id=com.playpreso.app" 
            target="_blank" 
            aria-label="Get it on Google Play"
            class="flex items-center justify-center"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
              alt="Get it on Google Play" 
              class="h-10 w-auto object-contain border-0"
              loading="lazy"
            />
          </a>
        </div>




      </div>
    </div>
</template>

<script setup lang="ts">

useSeoMeta({
  // Basic Meta
  title: 'PlayPreso — Fast FantaCalcio',
  description: 'PlayPreso is the ultimate no-money-involved football prediction game. Compete in tournaments, earn points, and become the king of predictions!',

  // Open Graph
  ogTitle: 'PlayPreso — Fast FantaCalcio',
  ogDescription: 'Join PlayPreso and compete in fantasy football tournaments. Predict scores, earn points, and win trophies in leagues and cups.',
  ogImage: 'https://playpreso.com/images/playpreso-preview.png',
  ogUrl: 'https://playpreso.com',
  ogType: 'website',

  // Twitter
  twitterCard: 'summary_large_image',
  twitterSite: '@PlayPreso', // Update with your actual Twitter handle if available
  twitterTitle: 'PlayPreso — Predict Football Scores & Win',
  twitterDescription: 'Challenge your friends, predict match scores, and climb the leaderboards in the ultimate fantasy football game, PlayPreso.',
  twitterImage: 'https://playpreso.com/images/playpreso-preview.png',

  // Optional Additional Meta
  keywords: 'fantasy football, score prediction, fantacalcio, playpreso, football game, no money involved'
})
</script>

<style scoped>
.tilted-span {
  display: inline-block;
  transform: rotate(10deg);
  margin-right: 5px;
}
</style>
