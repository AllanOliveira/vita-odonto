<template>
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
  <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    <!-- Logo -->
    <a href="#inicio" class="text-xl font-semibold text-slate-800">
      Odontologia <span class="text-blue-600 font-bold">Vita</span>
    </a>

    <!-- Menu -->
    <nav class="hidden md:flex items-center gap-8 text-slate-600">
      <a href="#inicio" class="hover:text-blue-600 transition">Início</a>
      <a href="#sobre" class="hover:text-blue-600 transition">Sobre</a>
      <a href="#servicos" class="hover:text-blue-600 transition">Serviços</a>
      <a
        href="https://wa.me/55SEUNUMERO"
        target="_blank"
        class="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition"
      >
        WhatsApp
      </a>
    </nav>

  </div>
</header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const headerRef = ref<HTMLElement | null>(null);
const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
