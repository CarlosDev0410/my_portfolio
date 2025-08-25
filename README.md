This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Descrição do Projeto

Este projeto é um portfólio pessoal desenvolvido com o framework Next.js, utilizando as tecnologias mais recentes para garantir uma experiência moderna e de alta performance.

### Principais Tecnologias e Ferramentas:

*   **Next.js:** Um framework React para a construção de aplicações web full-stack, com foco em performance, SEO e experiência do desenvolvedor. Ele permite renderização no lado do servidor (SSR), geração de sites estáticos (SSG) e roteamento de sistema de arquivos.
*   **React:** A biblioteca JavaScript fundamental para construir interfaces de usuário interativas e componentizadas.
*   **TypeScript:** Um superset tipado do JavaScript que adiciona segurança e escalabilidade ao código, ajudando a prevenir erros durante o desenvolvimento.
*   **Tailwind CSS:** Um framework CSS utility-first que permite construir designs personalizados rapidamente, sem sair do seu HTML. Ele é altamente configurável e otimizado para produção.
*   **Framer Motion:** Uma poderosa e fácil de usar biblioteca de animação para React. Permite criar animações fluidas e interativas para os componentes da UI, melhorando a experiência do usuário.
*   **Radix UI:** Uma biblioteca de componentes headless de baixo nível que fornece blocos de construção acessíveis e personalizáveis para a criação de sistemas de design. Utilizado aqui para componentes como `Avatar` e `Slot`.
*   **ESLint:** Uma ferramenta de linting que ajuda a manter a qualidade do código, identificando e corrigindo problemas de estilo e potenciais erros.

### Como o Projeto foi Construído:

O projeto segue uma arquitetura baseada em componentes, onde cada parte da interface do usuário é construída como um componente React reutilizável.

*   **Estrutura de Arquivos:** O diretório `src/app` gerencia as rotas e o layout principal da aplicação. Os componentes são divididos em `components/layout` (para a estrutura da página, como cabeçalho e rodapé), `components/sections` (para as diferentes seções do portfólio, como "Sobre", "Projetos", "Habilidades"), `components/ui` (para componentes genéricos de UI), e `components/magicui` (para componentes com animações e efeitos visuais).
*   **Gerenciamento de Estilos:** O Tailwind CSS é utilizado para estilização rápida e responsiva. A configuração do PostCSS (`postcss.config.mjs`) integra o Tailwind ao processo de build.
*   **Animações:** `Framer Motion` e `Magic UI` são empregados para adicionar animações e efeitos visuais, tornando a interface mais dinâmica e envolvente.
*   **Dados:** Os dados do perfil, projetos e habilidades são gerenciados em arquivos TypeScript dentro do diretório `src/data`, facilitando a manutenção e atualização.
*   **Otimização:** O Next.js otimiza automaticamente o carregamento de fontes (Geist da Vercel) e recursos, garantindo um bom desempenho.

### Dependências do Projeto:

#### Dependências de Produção:

*   `@radix-ui/react-avatar`: Componente de avatar do Radix UI.
*   `@radix-ui/react-slot`: Utilitário do Radix UI para compor componentes, passando propriedades para o elemento filho.
*   `class-variance-authority`: Ajuda a criar variantes de classes CSS de forma condicional, útil para Tailwind CSS.
*   `clsx`: Utilitário para construir strings de `className` de forma condicional.
*   `framer-motion`: Biblioteca para animações em React.
*   `lucide-react`: Biblioteca de ícones open-source para React.
*   `motion`: Biblioteca para animações (pode ser redundante com `framer-motion` ou ser uma dependência interna dela).
*   `next`: O framework React para produção.
*   `postcss`: Uma ferramenta para transformar CSS com plugins JavaScript.
*   `react`: A biblioteca JavaScript para construir interfaces de usuário.
*   `react-dom`: O pacote que serve como ponto de entrada para renderização de componentes React no DOM.
*   `tailwind-merge`: Utilitário para mesclar classes Tailwind CSS, resolvendo conflitos de forma inteligente.

#### Dependências de Desenvolvimento:

*   `@eslint/eslintrc`: Configuração base para ESLint.
*   `@tailwindcss/postcss`: Plugin PostCSS para Tailwind CSS.
*   `@types/node`: Definições de tipo para Node.js.
*   `@types/react`: Definições de tipo para React.
*   `@types/react-dom`: Definições de tipo para React DOM.
*   `eslint`: Ferramenta de linting para identificar e reportar padrões problemáticos no código JavaScript/TypeScript.
*   `eslint-config-next`: Configuração de ESLint específica para projetos Next.js.
*   `tailwindcss`: Um framework CSS utility-first.
*   `tw-animate-css`: Uma biblioteca para animações com Tailwind CSS.
*   `typescript`: Um superset tipado do JavaScript que compila para JavaScript puro.
