<template>
  <section class="depoimentos-section bg-slate-50 py-20 md:py-28">
    <div class="container mx-auto px-4">

      <!-- Título -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900">
          O que dizem nossos pacientes
        </h2>
        <p class="mt-4 text-slate-600">
          Experiências reais de quem confiou no nosso cuidado.
        </p>
      </div>

      <!-- Grid -->
      <div class="max-w-5xl mx-auto">
        <div class="grid sm:grid-cols-2 gap-8">

          <article
            v-for="depoimento in depoimentos"
            :key="depoimento.id"
            class="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <!-- Aspas decorativas -->
            <span class="absolute top-6 right-6 text-6xl text-blue-100 font-serif leading-none select-none">
              “
            </span>

            <!-- Estrelas -->
            <div class="mb-6">
              <div class="flex text-yellow-400">
                <svg
                  v-for="i in 5"
                  :key="i"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
            </div>

            <!-- Texto -->
            <p class="text-slate-700 mb-6 italic leading-relaxed">
              "{{ depoimento.texto }}"
            </p>

            <!-- Autor -->
            <p class="text-sm font-semibold text-slate-900">
              {{ depoimento.autor }}
            </p>
          </article>

        </div>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import { ref } from 'vue';

interface Depoimento {
  id: number;
  texto: string;
  autor: string;
}

const depoimentos = ref<Depoimento[]>([
  {
    id: 1,
    texto: 'Atendimento excelente, me senti muito segura e adorei o resultado.',
    autor: 'Maria Silva',
  },
  {
    id: 2,
    texto: 'Profissional muito atenciosa e cuidadosa. Recomendo!',
    autor: 'João Santos',
  },
  {
    id: 3,
    texto: 'Ambiente acolhedor e tratamento de primeira qualidade.',
    autor: 'Ana Costa',
  },
]);
</script>
