<script setup>
import NavBar from '@/components/common/NavBar.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
// import NewsSection from '@/components/sections/NewsSection.vue';
import CharacterSection from '@/components/sections/CharacterSection.vue';
import WorldSection from '@/components/sections/WorldSection.vue';
import FeaturesSection from '@/components/sections/FeaturesSection.vue';
import FooterSection from '@/components/sections/FooterSection.vue';

import '@/assets/main.css';
</script>

<template>
  <div class="app-container">
    <NavBar />
    <main>
      <HeroSection />
      <WorldSection />
      <CharacterSection />
      <FeaturesSection />
    </main>
    <FooterSection />
  </div>
</template>