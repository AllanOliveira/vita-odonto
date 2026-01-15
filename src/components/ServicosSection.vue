<template>
  <section id="servicos" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Título -->
      <div class="text-center max-w-2xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900">
          Serviços
        </h2>
        <p class="mt-4 text-slate-600">
          Cuidados odontológicos focados na saúde, estética e bem-estar do seu sorriso.
        </p>
      </div>

      <!-- Cards -->
      <div class="mt-16 grid sm:grid-cols-2 lg:grid-cols-2 gap-8">

        <div
          v-for="servico in servicos"
          :key="servico.id"
          class="group p-8 bg-slate-50 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl"
        >
          <!-- Ícone -->
          <div
            class="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6 group-hover:scale-110 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                :d="servico.icon"
              />
            </svg>
          </div>

          <!-- Conteúdo -->
          <h3 class="text-lg font-semibold text-slate-800">
            {{ servico.nome }}
          </h3>

          <p class="mt-3 text-slate-600 leading-relaxed">
            {{ servico.descricao }}
          </p>

          <!-- Duração -->
          <p class="mt-4 text-sm text-slate-500">
            ⏱ {{ servico.duracao }}
          </p>
        </div>

      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import { ref } from 'vue';

interface Servico {
  id: number;
  nome: string;
  descricao: string;
  duracao: string;
  icon: string;
}

const servicos = ref<Servico[]>([
  {
    id: 1,
    nome: 'Avaliação Odontológica',
    descricao: 'Exame completo para avaliar sua saúde bucal e planejar o melhor tratamento.',
    duracao: '45-60 min',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
  },
  {
    id: 2,
    nome: 'Limpeza',
    descricao: 'Profilaxia completa para manter seus dentes saudáveis e brilhantes.',
    duracao: '30-45 min',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
  {
    id: 3,
    nome: 'Clareamento (Avaliação)',
    descricao: 'Consulta para avaliar a possibilidade e o melhor método de clareamento dental.',
    duracao: '30 min',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
  },
  {
    id: 4,
    nome: 'Estética do Sorriso',
    descricao: 'Tratamentos focados em harmonizar e embelezar seu sorriso.',
    duracao: '60-90 min',
    icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
]);
</script>
