# Jadson Mattos — Portfolio

Site pessoal construído com Jekyll e hospedado no GitHub Pages. O projeto reúne:

- Hero, seções “About”, “How I Work”, “Metrics”, “Skills”, “Projects”, “Services”, “Timeline”, FAQ e “Contact”.
- Traduções em inglês e português, alternadas via botão flutuante.
- Integrações: Calendly (popup), WhatsApp, EmailJS, estatísticas em tempo real do GitHub, gráficos Chart.js, modo apresentação, modo foco, easter eggs e player de música ambiente.
- Subaplicação de formulário (`/innovalive`) gerada com React/Vite/Tailwind e servida como subpasta dentro do Pages.

## Como rodar localmente

Pré-requisitos:
- Ruby 3.x com Bundler (`gem install bundler`)
- Node.js 18+ (opcional, apenas se precisar rebuildar o formulário Vite)

### Site principal (Jekyll)

```bash
cd /home/jadsonmattos/projects/JadsonMattos.github.io
bundle install
bundle exec jekyll serve
```

O site ficará acessível em `http://127.0.0.1:4000/`.

### Formulário `innovalive` (opcional)

O build já está comprometido em `innovalive/`. Para editar o projeto React:

```bash
cd /home/jadsonmattos/projects/JadsonMattos.github.io/innovalive
npm install
npm run dev
```

Após ajustes, gere o build e mova o conteúdo de `dist/` para `innovalive/` antes do deploy:

```bash
npm run build
```

## Deploy

O GitHub Pages publica automaticamente ao receber `git push` na branch principal.


