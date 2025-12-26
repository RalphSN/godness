<script setup>
import NavBar from '@/components/common/NavBar.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import NewsSection from '@/components/sections/NewsSection.vue';
import CharacterSection from '@/components/sections/CharacterSection.vue';
import FeaturesSection from '@/components/sections/FeaturesSection.vue';
// 1. 引入 Footer
import FooterSection from '@/components/sections/FooterSection.vue';

import '@/assets/main.css';
</script>

<template>
  <div class="app-container">
    <NavBar />
    <main>
      <HeroSection />
      <NewsSection v-show="false" />
      <CharacterSection v-show="false" />
      <FeaturesSection />
    </main>
    <FooterSection />
  </div>
</template>