# Vieira Express - Landing Page

Landing page profissional para Vieira Express Logística, desenvolvida com React 19, Tailwind CSS 4 e shadcn/ui.

## 🚀 Features

- **Design Responsivo**: Totalmente adaptado para mobile, tablet e desktop
- **Seções Principais**:
  - Hero com CTA destacado
  - Estatísticas de desempenho
  - 6 tipos de serviços (Moto, Carro, Fiorino, Van, Caminhão, Personalizadas)
  - Galeria de fotos da frota
  - Depoimentos de clientes
  - FAQ interativo
  - Formulário de orçamento
  - Footer com contatos

- **Animações Suaves**: Transições elegantes e hover effects
- **Otimizado para SEO**: Estrutura semântica e meta tags
- **Integração WhatsApp**: Botão flutuante para contato direto

## 📋 Pré-requisitos

- Node.js 18+
- pnpm (recomendado) ou npm

## 🛠️ Instalação Local

```bash
# Clonar o repositório
git clone https://github.com/gabrieloata1/VieiraExpess.git
cd VieiraExpess

# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm run dev

# Build para produção
pnpm run build

# Preview do build
pnpm run preview
```

## 🌐 Deploy na Netlify

### Opção 1: Deploy Automático (Recomendado)

1. Acesse [netlify.com](https://netlify.com)
2. Clique em "New site from Git"
3. Selecione o repositório GitHub
4. Configure:
   - **Build command**: `pnpm install && pnpm run build`
   - **Publish directory**: `dist/public`
5. Clique em "Deploy site"

### Opção 2: Deploy Manual

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Fazer login
netlify login

# Deploy
netlify deploy --prod
```

## 📁 Estrutura do Projeto

```
client/
  ├── public/           # Arquivos estáticos (favicon, robots.txt)
  ├── src/
  │   ├── components/   # Componentes reutilizáveis
  │   ├── pages/        # Páginas principais
  │   ├── contexts/     # React contexts
  │   ├── hooks/        # Custom hooks
  │   ├── lib/          # Utilitários
  │   ├── App.tsx       # Componente raiz
  │   ├── main.tsx      # Entry point
  │   └── index.css     # Estilos globais
  └── index.html        # HTML template

server/                 # Placeholder para compatibilidade
shared/                 # Constantes compartilhadas
```

## 🎨 Design

- **Cores Principais**: 
  - Ciano: #00C8E0
  - Cinza Escuro: #1A1A2E
  - Branco: #FFFFFF

- **Tipografia**:
  - Display: Poppins (bold, impactante)
  - Body: Inter (legível, profissional)

## 📞 Contatos

- **Telefone**: (11) 9 4864-7590
- **WhatsApp**: (11) 9 8789-3161

## 📝 Licença

MIT License - veja o arquivo LICENSE para detalhes

## 👨‍💻 Desenvolvido por

Manus AI - Agente de IA para desenvolvimento web
