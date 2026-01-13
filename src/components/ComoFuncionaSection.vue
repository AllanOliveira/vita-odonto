<template>
  <section class="como-funciona-section bg-stone-50 py-16 md:py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
        Como Funciona
      </h2>
      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-3 gap-8">
          <article
            v-for="(passo, index) in passos"
            :key="index"
            class="text-center"
          >
            <div class="mb-6 flex justify-center">
              <div class="relative">
                <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {{ index + 1 }}
                </div>
                <div class="absolute -top-2 -right-2 w-6 h-6 bg-blue-300 rounded-full"></div>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              {{ passo.titulo }}
            </h3>
            <p class="text-gray-600">
              {{ passo.descricao }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Passo {
  titulo: string;
  descricao: string;
}

const passos = ref<Passo[]>([
  {
    titulo: 'Escolha o tipo de consulta',
    descricao: 'Selecione o serviço que melhor atende suas necessidades.',
  },
  {
    titulo: 'Selecione data e horário',
    descricao: 'Escolha o melhor momento para você na nossa agenda online.',
  },
  {
    titulo: 'Compareça no consultório',
    descricao: 'Venha receber um atendimento acolhedor e de qualidade.',
  },
]);
</script>
