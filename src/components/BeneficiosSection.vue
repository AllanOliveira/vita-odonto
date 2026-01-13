<template>
  <section class="beneficios-section bg-white py-16 md:py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
        Benefícios
      </h2>
      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-2 gap-6">
          <article
            v-for="beneficio in beneficios"
            :key="beneficio.id"
            class="flex items-start gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <div class="flex-shrink-0">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg
                  class="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-1">
                {{ beneficio.titulo }}
              </h3>
              <p class="text-gray-600">
                {{ beneficio.descricao }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Beneficio {
  id: number;
  titulo: string;
  descricao: string;
}

const beneficios = ref<Beneficio[]>([
  {
    id: 1,
    titulo: 'Atendimento Humanizado',
    descricao: 'Cuidado personalizado com foco no seu bem-estar e conforto.',
  },
  {
    id: 2,
    titulo: 'Foco em Estética e Bem-estar',
    descricao: 'Tratamentos que combinam saúde bucal com resultados estéticos.',
  },
  {
    id: 3,
    titulo: 'Horários Organizados',
    descricao: 'Agenda flexível para se adequar à sua rotina.',
  },
  {
    id: 4,
    titulo: 'Agendamento Online Fácil',
    descricao: 'Agende sua consulta de forma rápida e prática, sem complicações.',
  },
]);
</script>
