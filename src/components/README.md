# Estrutura de Componentes

Esta pasta contém todos os componentes reutilizáveis do projeto, organizados por categoria:

## 📁 Layout (`/layout`)

Componentes que fazem parte da estrutura fixa da aplicação:

- **`header.tsx`** - Header com navegação e toggle de tema
- **`footer.tsx`** - Rodapé com links e informações
- **`index.ts`** - Exportações dos componentes de layout

## 📁 Sections (`/sections`)

Componentes que representam seções específicas da página:

- **`hero.tsx`** - Seção de apresentação principal
- **`about.tsx`** - Seção sobre mim
- **`skills.tsx`** - Seção de habilidades e tecnologias
- **`projects.tsx`** - Seção de projetos com filtros
- **`contact.tsx`** - Seção de contato com formulário
- **`index.ts`** - Exportações dos componentes de seções

## 📁 UI (`/ui`)

Componentes de interface do usuário do shadcn/ui:

- **`button.tsx`** - Componente de botão reutilizável

## 🎯 Organização

### Layout vs Sections

- **Layout**: Componentes que aparecem em todas as páginas (header, footer)
- **Sections**: Componentes específicos de conteúdo da página atual

### Imports

```typescript
// Importar componentes de layout
import { Header, Footer } from "@/components/layout";

// Importar componentes de seções
import { Hero, About, Skills, Projects, Contact } from "@/components/sections";

// Importar componentes UI
import { Button } from "@/components/ui/button";
```

## 🔄 Manutenção

- Adicione novos componentes de layout em `/layout`
- Adicione novas seções em `/sections`
- Mantenha os arquivos `index.ts` atualizados
- Use TypeScript para todos os componentes
- Siga o padrão de nomenclatura PascalCase para componentes
