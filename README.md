# 🚀 Portfólio Davi - Next.js 14 + TypeScript

Um portfólio moderno, refatorado e otimizado desenvolvido com Next.js 14, TypeScript e Tailwind CSS, com sistema de tema dark/light e formulário de contato funcional.

## ✨ Características

- ✅ **Design Moderno**: Interface limpa e profissional com animações suaves
- ✅ **Tema Dark/Light**: Sistema de tema com toggle animado e persistência
- ✅ **Totalmente Responsivo**: Funciona perfeitamente em todos os dispositivos
- ✅ **Performance Otimizada**:
  - Partículas reduzidas (9 → 5) para melhor performance
  - Lazy loading de componentes
  - Suporte a `prefers-reduced-motion`
- ✅ **TypeScript**: Código 100% tipado para maior confiabilidade
- ✅ **Arquitetura Modular**: Componentes reutilizáveis e dados centralizados
- ✅ **Formulário de Contato Funcional**: Integração com Resend para envio de emails
- ✅ **Validação de Formulário**: Validação client-side e server-side com Zod
- ✅ **Animações**: Animações fluidas com Framer Motion
- ✅ **Acessibilidade**: ARIA labels, navegação por teclado, suporte a motion reduzido
- ✅ **SEO Otimizado**: Meta tags e estrutura otimizada

## 🛠️ Tecnologias Utilizadas

### Core
- **Next.js 14.0.4** - Framework React com App Router
- **React 18** - Biblioteca UI
- **TypeScript 5** - Tipagem estática
- **Tailwind CSS 3.3** - Framework CSS utilitário

### Bibliotecas
- **Framer Motion 10.16** - Animações avançadas
- **Lucide React** - Ícones modernos
- **next-themes** - Sistema de tema dark/light
- **Resend** - Serviço de envio de emails
- **Zod** - Validação de schemas
- **clsx + tailwind-merge** - Merge de classes CSS

## 📦 Instalação e Configuração

### 1. Clone o repositório
```bash
git clone https://github.com/davi/portfolio.git
cd portfolio
```

### 2. Instale as dependências
```bash
npm install
```

**Dependências críticas:**
```bash
npm install next-themes resend zod clsx tailwind-merge
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Resend API Key (obtenha em https://resend.com/api-keys)
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Email onde receberá as mensagens do formulário
CONTACT_EMAIL=seu_email@exemplo.com

# URL do site (opcional)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> **Nota**: Veja `.env.example` para referência

### 4. Execute o projeto

**Modo de desenvolvimento:**
```bash
npm run dev
```

**Build de produção:**
```bash
npm run build
npm start
```

### 5. Acesse o projeto
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 🏗️ Estrutura do Projeto (Refatorado)

```
src/
├── app/                        # Next.js App Router
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # API route para formulário
│   ├── about/page.tsx          # Página Sobre
│   ├── contact/page.tsx        # Página Contato (refatorado)
│   ├── projects/page.tsx       # Página Projetos
│   ├── globals.css             # Estilos globais
│   ├── layout.tsx              # Layout principal com ThemeProvider
│   └── page.tsx                # Home (refatorado)
├── components/
│   ├── layout/                 # Componentes de layout
│   │   ├── Header.tsx          # Header com ThemeToggle
│   │   └── Footer.tsx          # Footer
│   ├── ui/                     # 🆕 Biblioteca de componentes UI
│   │   ├── Alert.tsx           # Componente de alertas
│   │   ├── Badge.tsx           # Badges/tags
│   │   ├── Button.tsx          # Botão reutilizável
│   │   ├── Card.tsx            # Cards
│   │   ├── Input.tsx           # Input com validação
│   │   ├── Spinner.tsx         # Loading spinner
│   │   ├── Textarea.tsx        # Textarea com validação
│   │   ├── ThemeToggle.tsx     # Toggle de tema
│   │   └── index.ts            # Exports centralizados
│   ├── sections/               # 🆕 Componentes de seções
│   └── providers/              # 🆕 React providers
│       └── ThemeProvider.tsx   # Provider de tema
├── hooks/                      # 🆕 Custom React hooks
│   ├── useContactForm.ts       # Hook do formulário
│   ├── useIntersectionObserver.ts
│   ├── useLocalStorage.ts
│   ├── useMediaQuery.ts
│   ├── useScrollPosition.ts
│   └── index.ts
├── data/                       # 🆕 Dados centralizados
│   ├── contact.ts              # Informações de contato
│   ├── experience.ts           # Experiências profissionais
│   ├── projects.ts             # Portfólio de projetos
│   ├── skills.ts               # Habilidades técnicas
│   └── statistics.ts           # Estatísticas
├── lib/                        # 🆕 Bibliotecas e utilitários
│   ├── constants/
│   │   └── site.ts             # Configurações do site
│   ├── utils/
│   │   └── index.ts            # Funções utilitárias
│   └── validations/
│       └── contact.ts          # Schema de validação
└── types/                      # 🆕 TypeScript types
    └── index.ts                # Tipos centralizados
```

---

## 🎨 Personalização

### 📝 Informações Pessoais

Edite o arquivo `src/lib/constants/site.ts`:

```typescript
export const SITE_CONFIG = {
  name: 'Seu Nome',
  title: 'Seu Nome - Desenvolvedor Full Stack',
  description: 'Sua descrição...',
  author: {
    name: 'Seu Nome',
    email: 'seu@email.com',
    phone: '+55 (11) 99999-9999',
    github: 'https://github.com/seuusuario',
    linkedin: 'https://linkedin.com/in/seuusuario',
    whatsapp: 'https://wa.me/5511999999999',
  }
}
```

### 🎯 Projetos

Edite `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: 'Seu Projeto',
    description: 'Descrição do projeto...',
    category: 'fullstack',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://seuprojeto.com',
    githubUrl: 'https://github.com/voce/projeto',
    featured: true,
  },
  // ... mais projetos
]
```

### 💼 Experiências e Skills

- **Skills**: Edite `src/data/skills.ts`
- **Experiências**: Edite `src/data/experience.ts`
- **Estatísticas**: Edite `src/data/statistics.ts`
- **Contato**: Edite `src/data/contact.ts`

### 🎨 Cores e Tema

Edite `tailwind.config.js`:

```javascript
colors: {
  primary: {
    400: '#38bdf8',  // Azul claro
    500: '#0ea5e9',  // Azul principal
    600: '#0284c7',  // Azul escuro
  },
  // ... outras cores
}
```

---

## 🧪 Testes e Validação

### ✅ Checklist de Funcionalidades

Execute estes testes para validar o projeto:

#### 1. Sistema de Tema
- [ ] Clicar no toggle de tema (sol/lua no header)
- [ ] Verificar se o tema muda instantaneamente
- [ ] Recarregar a página - tema deve persistir
- [ ] Testar em todas as páginas (Home, About, Projects, Contact)

#### 2. Navegação
- [ ] Menu desktop funciona
- [ ] Menu mobile (hamburguer) funciona
- [ ] Links ativos destacados
- [ ] Scroll suave (se aplicável)

#### 3. Home Page
- [ ] Animações de entrada funcionam
- [ ] Partículas aparecem (5 partículas)
- [ ] Botões "Ver Projetos" e "Entrar em Contato" funcionam
- [ ] Links sociais abrem em nova aba
- [ ] Scroll indicator animado funciona

#### 4. Formulário de Contato
- [ ] Validação de campos vazios
- [ ] Validação de email inválido
- [ ] Mensagens de erro aparecem por campo
- [ ] Loading state ao enviar
- [ ] Mensagem de sucesso após envio
- [ ] Formulário limpa após sucesso
- [ ] Email recebido na caixa de entrada (configurar Resend primeiro!)

#### 5. Responsividade
- [ ] Mobile (375px) - testar menu hamburguer
- [ ] Tablet (768px) - testar grid de skills
- [ ] Desktop (1024px+) - testar layout completo
- [ ] Telas grandes (1440px+)

#### 6. Acessibilidade
- [ ] Navegação por teclado (Tab) funciona
- [ ] Focus visible em elementos interativos
- [ ] ARIA labels em ícones/botões
- [ ] Redução de movimento (Settings > Accessibility)

### 🔍 Testes de Performance

Execute o Lighthouse (Chrome DevTools):

```bash
# Build de produção primeiro
npm run build
npm start

# Depois:
# Chrome DevTools > Lighthouse > Gerar Relatório
```

**Metas de Performance:**
- Performance: >90
- Accessibility: >90
- Best Practices: >90
- SEO: >90

### 🐛 Troubleshooting

**Problema: Tema não muda**
- Verifique se instalou `next-themes`: `npm install next-themes`
- Verifique se há erros no console

**Problema: Formulário não envia**
- Verifique se configurou `.env.local` com `RESEND_API_KEY`
- Verifique se instalou `resend zod`: `npm install resend zod`
- Veja logs no console do servidor (`npm run dev`)

**Problema: Componentes não encontrados**
- Verifique se instalou todas as dependências: `npm install clsx tailwind-merge`
- Limpe cache: `rm -rf .next && npm run dev`

**Problema: TypeScript errors**
- Execute: `npm run lint`
- Verifique imports e tipos

---

## 🚀 Deploy

### Vercel (Recomendado)

1. **Conecte seu repositório**
   - Acesse [vercel.com](https://vercel.com)
   - Importe o repositório

2. **Configure variáveis de ambiente**
   ```
   RESEND_API_KEY=seu_api_key
   CONTACT_EMAIL=seu_email@exemplo.com
   ```

3. **Deploy automático**
   - A cada push na branch main

### Configuração do Resend para Produção

1. Crie conta em [resend.com](https://resend.com)
2. Adicione domínio verificado
3. Obtenha API Key
4. Configure no Vercel/Netlify:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```

5. Atualize o email "from" em `src/app/api/contact/route.ts`:
   ```typescript
   from: 'Portfolio <contato@seudominio.com>',  // Seu domínio verificado
   ```

### Outros Provedores

**Netlify, Railway, Render:**
- Build command: `npm run build`
- Start command: `npm start`
- Configure variáveis de ambiente

---

## 📊 Melhorias Implementadas na Refatoração

### Código
- ✅ Dados centralizados em `src/data/`
- ✅ Componentes reutilizáveis em `src/components/ui/`
- ✅ Custom hooks para lógica compartilhada
- ✅ TypeScript 100% tipado
- ✅ Validação com Zod

### Performance
- ✅ Partículas reduzidas: 9 → 5 (-44%)
- ✅ Lazy loading onde apropriado
- ✅ useReducedMotion para acessibilidade
- ✅ Código mais limpo e eficiente

### Funcionalidades
- ✅ Sistema de tema dark/light funcional
- ✅ Formulário de contato com backend real
- ✅ Validação de formulário robusta
- ✅ Feedback visual melhorado

### Acessibilidade
- ✅ ARIA labels adicionados
- ✅ Navegação por teclado
- ✅ Focus states
- ✅ Suporte a motion reduzido

---

## 📱 Responsividade

Breakpoints do projeto:

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

---

## ⚡ Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Build de produção
npm start        # Inicia servidor de produção
npm run lint     # Executa linter
```

---

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 📞 Contato

- **Email**: davi@email.com
- **LinkedIn**: [linkedin.com/in/davi](https://linkedin.com/in/davi)
- **GitHub**: [github.com/davi](https://github.com/davi)

---

## 🎯 Roadmap

Melhorias futuras planejadas:

- [ ] Refatorar About Page
- [ ] Refatorar Projects Page
- [ ] Adicionar blog/artigos
- [ ] Adicionar páginas detalhadas de projetos
- [ ] Adicionar analytics (Vercel Analytics)
- [ ] Adicionar testes automatizados
- [ ] Implementar i18n (PT/EN)
- [ ] Adicionar CMS (Sanity/Contentful)

---

**Desenvolvido com ❤️ usando Next.js 14, TypeScript e Tailwind CSS**

> **Refatoração completa:** Arquitetura modular, componentes reutilizáveis, performance otimizada e formulário funcional.
