# DevRoast

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- Biome (lint/format)
- Shiki (syntax highlighting)
- Radix UI (toggle)

## Padrões

### Componentes UI

- Located in `src/components/ui/`
- Pattern de composição: `ComponentRoot`, `ComponentSub`
- Named exports apenas
- Usar `tailwind-variants`
- Usar variáveis CSS do `@theme` (não valores hardcoded)
- Props estendem elementos HTML nativos

### Estilização

- Tailwind CSS v4 com `@theme`
- Classes canônicas: `bg-primary`, `text-foreground`, etc.
- Fontes: `font-mono` (JetBrains Mono), `font-sans` (system)

### Commands

```bash
npm run dev    # Development
npm run build  # Production
npm run lint   # Biome check
npm run format # Biome format
```
