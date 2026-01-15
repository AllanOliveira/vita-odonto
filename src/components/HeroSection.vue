<template>
  <section
    id="inicio"
    class="hero-section relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-16 md:py-24 lg:py-32 pt-24 md:pt-32"
  >
    <!-- Shape decorativo -->
    <div
      class="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-100 blur-3xl opacity-40"
      aria-hidden="true"
    ></div>

    <div class="container mx-auto px-4 relative">
      <div class="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

        <!-- Coluna esquerda: Texto -->
        <div class="text-center md:text-left">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Saúde e beleza para o seu sorriso
          </h1>

          <p class="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
            Atendimento odontológico focado em bem-estar, estética e confiança.
          </p>

          <div class="flex flex-col sm:flex-row sm:items-center gap-4 justify-center md:justify-start">
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma avaliação com a Dra. Natalia Vita."
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Agendar Avaliação via WhatsApp"
            >
              Agendar Avaliação
            </a>

            <!-- Micro confiança -->
            <span class="text-sm text-gray-500">
              Atendimento humanizado • Resposta rápida
            </span>
          </div>
        </div>

        <!-- Coluna direita: Foto -->
        <div class="flex justify-center md:justify-end">
          <figure class="relative w-full max-w-[36rem]">
            <div class="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
              <img
                :src="imageUrl"
                alt="Dra. Natalia Vita - Dentista profissional sorrindo"
                class="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <figcaption class="sr-only">
              Foto profissional da dentista
            </figcaption>
          </figure>
        </div>

      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
// Componente Hero Section
const baseUrl = import.meta.env.BASE_URL;
const imageUrl = `${baseUrl}images/dentista.png`;
</script>

<style scoped>
.hero-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
}
</style>
