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
        <div class="flex gap-4 items-end mt-6 md:mt-0 md:items-center justify-center md:justify-start">
          <!-- iOS Badge Container -->
          <a 
            href="https://apps.apple.com/it/app/playpreso/id6476687916?l=en-GB" 
            target="_blank" 
            aria-label="Download on the App Store"
            class="flex items-center justify-center h-24  w-100 bg-transparent"
          >
            <img 
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
              alt="Download on the App Store" 
              class="max-h-full max-w-full object-contain border-0"
              loading="lazy"
            />
          </a>

          <!-- Google Play Badge Container -->
          <a 
            href="https://play.google.com/store/apps/details?id=com.playpreso.app" 
            target="_blank" 
            aria-label="Get it on Google Play"
            class="flex items-center justify-center h-24  w-100 bg-transparent"
          >
            <img 
              src="https://storage.googleapis.com/pe-portal-consumer-prod-wagtail-static/images/googleplay-badge-01-getit.max-1920x1070.format-webp.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=wagtail%40pe-portal-consumer-prod.iam.gserviceaccount.com%2F20250112%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250112T150815Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=70bf85fcbd69c23e0f18afdd8178c54b483bcd90d9a65fd4d8d300c34d3c323e48fc8cb732354198eb1afd78613cbdd9dd852eca65ac05a89ab955eea89bc14faa9d73de8cad2faf4e983ff3b44a0b76d59fb9f1933484336035df17ce770b05a6b1fd299966300b38c50e41dd3752601495f7b4a81f9b1b6ae9b9a8afd10a1792775d2659adfaf357f333184735e1d10a73aea95a485f5b02c30c38212b5e3af03ea115c34bea5ca09cd81e759a966dc401a3be8af2231e63d4553e435a79283bffdedbe02436890d2c9bb43697b0d7a0642ae94c4e0eaef1740ebb2949edcd4e64b4fc666431b165b2feb957c2fd347238779955548d9543dd8c83546030a6" 
              alt="Get it on Google Play" 
              class="max-h-full max-w-full object-contain border-0"
              loading="lazy"
            />
          </a>
        </div>




      </div>
    </div>
</template>

<script setup>
// no script needed, purely layout
</script>

<style scoped>
.tilted-span {
  display: inline-block;
  transform: rotate(10deg);
  margin-right: 5px;
}
</style>
