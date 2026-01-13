<template>
  <section id="inicio" class="hero-section bg-white py-16 md:py-24 lg:py-32 pt-24 md:pt-32">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <!-- Coluna esquerda: Texto -->
        <div class="text-center md:text-left">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Saúde e beleza para o seu sorriso
          </h1>
          <p class="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Atendimento odontológico focado em bem-estar, estética e confiança.
          </p>
          <a
            href="#agendar"
            class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Agendar Avaliação"
          >
            Agendar Avaliação
          </a>
        </div>

        <!-- Coluna direita: Foto -->
        <div class="flex justify-center md:justify-end">
          <figure class="relative w-full max-w-md">
            <div class="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
              <img
                src="/images/dentista.png"
                alt="Dra. Natalia Vita - Dentista profissional sorrindo"
                class="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <figcaption class="sr-only">Foto profissional da dentista</figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Componente Hero Section
</script>

<style scoped>
.hero-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
}
</style>
