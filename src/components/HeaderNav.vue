<template>
  <header
    ref="headerRef"
    class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md transition-shadow duration-300"
    :class="{ 'shadow-sm': isScrolled }"
  >
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo tipográfico -->
        <div class="flex items-baseline gap-1">
          <span class="text-xl md:text-2xl font-medium text-gray-800">Odontologia</span>
          <span class="text-xl md:text-2xl font-bold text-blue-600">Vita</span>
        </div>

        <!-- Menu Desktop -->
        <ul class="hidden md:flex items-center gap-6">
          <li>
            <a
              href="#inicio"
              class="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Início
            </a>
          </li>
          <li>
            <a
              href="#sobre"
              class="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#servicos"
              class="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Serviços
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma avaliação com a Dra. Natalia Vita."
              target="_blank"
              rel="noopener noreferrer"
              class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
            >
              Agendar
            </a>
          </li>
        </ul>

        <!-- Botão Hambúrguer Mobile -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          aria-label="Menu"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              v-if="!mobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Menu Mobile -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4"
      >
        <ul class="flex flex-col gap-4">
          <li>
            <a
              href="#inicio"
              @click="closeMobileMenu"
              class="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Início
            </a>
          </li>
          <li>
            <a
              href="#sobre"
              @click="closeMobileMenu"
              class="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#servicos"
              @click="closeMobileMenu"
              class="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Serviços
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma avaliação com a Dra. Natalia Vita."
              target="_blank"
              rel="noopener noreferrer"
              @click="closeMobileMenu"
              class="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-center"
            >
              Agendar
            </a>
          </li>
        </ul>
      </div>
    </nav>
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
