# Dados Dinâmicos do Portfólio

Esta pasta contém os arquivos TypeScript que alimentam o portfólio com dados dinâmicos e flexíveis.

## Arquivos

### `profile.ts`
Contém informações pessoais e métricas do desenvolvedor:
- **personal**: Nome, título, descrição, avatar, links sociais
- **metrics**: Experiência, contagem de projetos, tecnologias, empresas
- **experience**: Lista de experiências profissionais
- **education**: Lista de formação acadêmica

### `skills.ts`
Contém as habilidades organizadas por categoria:
- **categories**: Array de categorias (Frontend, Backend, Ferramentas)
- **additionalTechnologies**: Lista de tecnologias adicionais

### `projects.ts`
Contém os projetos do portfólio:
- **projects**: Array de projetos com todas as informações
- **filters**: Filtros disponíveis para categorizar projetos

## Como Atualizar

### Adicionar/Editar Projetos
1. Abra `projects.ts`
2. Adicione um novo objeto no array `projects` com:
   - `id`: ID único
   - `title`: Título do projeto
   - `description`: Descrição detalhada
   - `image`: Caminho da imagem (colocar em `/public/projects/`)
   - `technologies`: Array de tecnologias usadas
   - `category`: "frontend", "backend" ou "fullstack"
   - `liveUrl`: URL do projeto online
   - `githubUrl`: URL do repositório
   - `featured`: boolean para destacar o projeto

### Adicionar/Editar Habilidades
1. Abra `skills.ts`
2. Para adicionar uma nova categoria, adicione um objeto no array `categories`
3. Para editar níveis, modifique o valor `level` (0-100)
4. Para adicionar tecnologias extras, adicione ao array `additionalTechnologies`

### Atualizar Informações Pessoais
1. Abra `profile.ts`
2. Modifique os campos em `personal` com suas informações
3. Atualize as métricas em `metrics`
4. Edite as listas de `experience` e `education`

## Estrutura de Pastas para Imagens

```
public/
├── user.jpg                    # Foto do perfil
└── projects/
    ├── ecommerce.jpg
    ├── taskapp.jpg
    ├── api-docs.jpg
    ├── portfolio.jpg
    ├── chat.jpg
    └── weather.jpg
```

## Tipos TypeScript

Os tipos estão definidos em `src/types/data.ts` para garantir a tipagem correta dos dados.
