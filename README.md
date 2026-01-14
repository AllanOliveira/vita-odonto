# 🦷 Odonto Vita - Landing Page

Landing page moderna para dentista autônoma, desenvolvida com AstroJS, Vue e Tailwind CSS.

## 🚀 Tecnologias

- **AstroJS** - Framework web moderno
- **Vue 3** - Framework JavaScript reativo
- **Tailwind CSS** - Framework CSS utilitário
- **TypeScript** - Tipagem estática

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

```bash
npm run dev
```

O servidor de desenvolvimento estará disponível em `http://localhost:4321`

## 🏗️ Build

```bash
npm run build
```

## 👀 Preview

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
/
├── src/
│   ├── components/     # Componentes Vue
│   │   ├── HeroSection.vue
│   │   ├── SobreSection.vue
│   │   ├── ServicosSection.vue
│   │   ├── ComoFuncionaSection.vue
│   │   ├── BeneficiosSection.vue
│   │   ├── DepoimentosSection.vue
│   │   ├── CTAFinalSection.vue
│   │   └── FooterSection.vue
│   └── pages/
│       └── index.astro  # Página principal
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🎨 Seções da Landing Page

1. **Hero Section** - Primeira dobra com headline e CTA principal
2. **Sobre a Dentista** - Informações profissionais e credenciais
3. **Serviços** - Grid com cards dos serviços oferecidos
4. **Como Funciona** - Processo em 3 passos
5. **Benefícios** - Lista de vantagens do atendimento
6. **Depoimentos** - Prova social com avaliações
7. **CTA Final** - Segunda chance de conversão
8. **Footer** - Informações de contato e copyright

## 📝 Personalização

Para personalizar o conteúdo, edite os componentes Vue em `src/components/`:

- Substitua os placeholders `[Nome da Dentista]`, `[Universidade]`, `[CRO]`, etc.
- Adicione fotos reais substituindo os placeholders SVG
- Ajuste cores e estilos no `tailwind.config.mjs`
- Modifique textos e informações conforme necessário

## 🚀 Deploy no GitHub Pages

### Passo a passo:

1. **Crie um repositório no GitHub**
   - Acesse https://github.com/new
   - Crie um novo repositório (ex: `odonto-vita`)

2. **Configure o astro.config.mjs**
   - Abra `astro.config.mjs`
   - Substitua `SEU_USUARIO` pelo seu username do GitHub
   - Se o repositório não for `username.github.io`, mantenha o `base: '/odonto-vita'` (ou o nome do seu repositório)
   - Se for `username.github.io`, remova ou comente a linha `base: '/odonto-vita'`

3. **Faça commit e push do código**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/odonto-vita.git
   git push -u origin main
   ```

4. **Configure o GitHub Pages**
   - Vá em Settings > Pages no seu repositório
   - Em "Source", selecione "GitHub Actions"
   - O workflow já está configurado e será executado automaticamente

5. **Aguarde o deploy**
   - Vá em Actions no seu repositório
   - Aguarde o workflow completar
   - Sua página estará disponível em: `https://SEU_USUARIO.github.io/odonto-vita`

### Configuração do astro.config.mjs:

**Para repositório customizado** (ex: `username/odonto-vita`):
```js
site: 'https://SEU_USUARIO.github.io',
base: '/odonto-vita', // Nome do repositório
```

**Para username.github.io**:
```js
site: 'https://SEU_USUARIO.github.io',
// Remova ou comente a linha base
```

## 📄 Licença

Este projeto é de uso livre.
