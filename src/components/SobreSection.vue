<template>
  <section id="sobre" class="sobre-section bg-gray-50 py-16 md:py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-3 gap-8 items-center">
          <!-- Foto -->
          <div class="flex justify-center md:justify-start">
            <div class="w-48 h-48 rounded-full overflow-hidden shadow-lg bg-gray-100 ring-4 ring-white">
              <img
                :src="imageUrl"
                alt="Dra. Natalia Vita"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <!-- Texto -->
          <div class="md:col-span-2">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sobre a Dentista
            </h2>
            <p class="text-lg text-gray-700 mb-4 leading-relaxed">
              Sou dentista formada pela <strong>UNICAMP</strong>, com foco em saúde bucal e estética do sorriso. Meu objetivo é oferecer um atendimento acolhedor, moderno e personalizado para cada paciente.
            </p>
            <div class="space-y-2 text-gray-600">
              <p><strong>Nome:</strong> Natalia Vita</p>
              <p><strong>CRO:</strong> 12345-SP</p>
              <p><strong>Especializações:</strong> Estética Dental, Clareamento Dental, Ortodontia Estética, Implantodontia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Componente Sobre a Dentista
const baseUrl = import.meta.env.BASE_URL;
const imageUrl = `${baseUrl}images/dentista.png`;
</script>
