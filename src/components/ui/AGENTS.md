# Padrões de Componentes UI

## Visão Geral

Este documento define os padrões para criação de componentes UI genéricos no projeto.

## Stack do Projeto

- **Framework**: Next.js (App Router)
- **Frontend**: React
- **Styling**: Tailwind CSS v4
- **Linting/Format**: Biome
- **Node.js**: 20 (gerenciado via nvm)

## Instalação de Dependências

```bash
# Dependências do projeto
npm install

# Para criar novos componentes UI
npm install clsx tailwind-variants tailwind-merge
```

## Comandos Úteis

```bash
npm run dev      # Iniciar servidor de desenvolvimento
npm run build    # Build de produção
npm run lint     # Verificar erros (Biome)
npm run format   # Formatar código (Biome)
```

## Configuração Tailwind CSS v4

### Estrutura do globals.css

O projeto usa uma estrutura organizada com `@layer base` para definir variáveis de tema:

```css
@import "tailwindcss";

@layer base {
  :root {
    /* Light mode (padrão) */
    --color-primary: #ff8400;
    --color-primary-foreground: #111111;
    --color-background: #f2f3f0;
    --color-foreground: #111111;
    --color-border: #cbccc9;
    /* ...outras cores */
  }

  .dark {
    /* Dark mode */
    --color-primary: #ff8400;
    --color-primary-foreground: #111111;
    --color-background: #0c0c0c;
    --color-foreground: #ffffff;
    --color-border: #2e2e2e;
    /* ...outras cores */
  }
}

@theme {
  --animate-accordion-down: accordion-down 0.2s ease-out;
  --animate-accordion-up: accordion-up 0.2s ease-out;
}

@keyframes accordion-down { ... }
@keyframes accordion-up { ... }

@layer base {
  * { @apply border-border; }
  body { @apply bg-background text-foreground; font-family: var(--font-sans); }
  code, pre { font-family: var(--font-mono); }
}
```

### Classes Canônicas

**SEMPRE** use as variáveis CSS definidas no tema em vez de valores hardcoded:

```typescript
// ✅ Correto - Use classes canônicas (Tailwind)
variant: {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-destructive-foreground",
  outline: "border border-input bg-background",
}

// ❌ Errado - Valores hardcoded
variant: {
  default: "bg-[#FF8400] text-[#111111]",
  destructive: "bg-red-500 text-white",
}
```

**Cores disponíveis**:
- `primary` / `primary-foreground`
- `secondary` / `secondary-foreground`
- `destructive` / `destructive-foreground`
- `muted` / `muted-foreground`
- `accent` / `accent-foreground`
- `background` / `foreground`
- `border` / `input` / `ring`
- `card` / `card-foreground`
- `popover` / `popover-foreground`

### Fontes

O projeto usa:
- **Sans**: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Mono**: `"JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace`

Acesse via:
- `font-sans` (classe Tailwind)
- `font-mono` (classe Tailwind)
- CSS: `var(--font-sans)` ou `var(--font-mono)`

## Padrão de Componente

### 1. Named Exports

Sempre use **named exports**, nunca default exports.

```typescript
// ✅ Correto
export interface ButtonProps { }
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(...)
export const buttonVariants = tv({ ... })

// ❌ Errado
export default function Button() { }
```

### 2. Extender Props Nativas

Estenda as propriedades nativas do elemento HTML.

```typescript
import { type ButtonHTMLAttributes, forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}
```

### 3. Usar tailwind-variants

Defina variantes e tamanhos usando `tv()`.

```typescript
const buttonVariants = tv({
  base: "classes base aplicadas sempre",
  variants: {
    variant: {
      default: "classes da variante default",
      outline: "classes da variante outline",
    },
    size: {
      default: "classes do tamanho default",
      sm: "classes do tamanho small",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
```

### 4. Não usar twMerge (geralmente)

O `tailwind-variants` já faz o merge automaticamente.

```typescript
// ✅ Correto (geralmente)
className={buttonVariants({ variant, size, className })}

// ✅ Use twMerge se precisar de lógica manual
className={twMerge(buttonVariants({ variant, size }), className)}
```

### 5. Usar forwardRef

Permite uso de refs e forwarding para elementos filhos.

```typescript
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
```

### 6. Estrutura de Arquivos

```
src/components/ui/
├── button.tsx       # Componente Button
├── input.tsx        # Componente Input
└── ...
```

### 7. Página de Demonstração

Crie uma página de demonstração para visualizar os componentes.

Para adicionar novos componentes à página de demonstração:
1. Crie o componente em src/components/ui/
2. Importe e adicione na página de demonstração

## Biome Configuration

O projeto usa Biome para linting e formatação.

### Configuração Recomendada

```json
{
  "$schema": "https://biomejs.dev/schemas/2.4.7/schema.json",
  "vcs": {
    "enabled": true,
    "clientKind": "git",
    "useIgnoreFile": true
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true
    }
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "double"
    }
  },
  "css": {
    "formatter": {
      "quoteStyle": "double"
    },
    "parser": {
      "tailwindDirectives": true
    }
  }
}
```

## Root Layout (Next.js App Router)

O layout raiz deve ter a estrutura HTML completa:

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "App",
  description: "Descrição do app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body>{children}</body>
    </html>
  );
}
```

## Checklist de Criação

- [ ] Usar named exports
- [ ] Estender props nativas do elemento HTML
- [ ] Usar `tailwind-variants`
- [ ] Usar `forwardRef` para refs
- [ ] Usar classes canônicas (bg-primary, text-foreground, etc.)
- [ ] Não usar valores hardcoded
- [ ] Adicionar à página de demonstração
