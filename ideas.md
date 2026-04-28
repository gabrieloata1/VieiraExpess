# Conceitos de Design - Vieira Express Landing Page

## Filosofia de Design Escolhida: Modernismo Corporativo com Dinamismo Ciano

A landing page da Vieira Express seguirá uma abordagem de **Modernismo Corporativo Dinâmico**, que combina a profissionalidade de uma empresa de logística com a energia visual de uma marca contemporânea.

### Princípios Fundamentais

1. **Movimento e Energia**: A cor ciano (#00C8E0) é usada como elemento dinâmico, criando setas, divisores e acentos que transmitem velocidade e eficiência
2. **Contraste Inteligente**: Cinza escuro (charcoal) como base sólida e confiável, branco para clareza, ciano para destaque e ação
3. **Hierarquia Clara**: Tipografia bem definida com pesos variados para guiar o usuário através da narrativa
4. **Assimetria Estratégica**: Layouts não-centralizados que criam movimento visual e interesse

### Paleta de Cores

- **Primária**: Ciano #00C8E0 (energia, velocidade, confiança)
- **Secundária**: Cinza Escuro #2A2A2A (solidez, profissionalismo)
- **Terciária**: Branco #FFFFFF (clareza, espaço)
- **Acentos**: Cinza Médio #4A4A4A (profundidade)

### Paradigma de Layout

- **Hero Section**: Imagem de fundo com sobreposição diagonal, logo e CTA em ciano
- **Seções Alternadas**: Alternância entre fundo branco e cinza escuro para criar ritmo
- **Cards de Serviços**: Grid assimétrico com efeito de profundidade
- **Divisores Dinâmicos**: Setas e formas geométricas em ciano conectando seções
- **Seção de Depoimentos**: Carrossel com cards flutuantes

### Elementos Assinatura

1. **Seta Ciano**: Elemento gráfico recorrente (logo da marca) usado como divisor e indicador de movimento
2. **Gradiente Diagonal**: Transições entre cores usando ângulos 45° para criar dinamismo
3. **Ícones Circulares**: Ícones em círculos ciano para categorias de veículos
4. **Padrão Geométrico**: Linhas e formas ciano sutis no fundo

### Filosofia de Interação

- **Hover States**: Botões mudam de cor com transição suave
- **Scroll Animations**: Elementos aparecem conforme o usuário desce
- **Micro-interações**: Ícones e números animados (contadores)
- **Feedback Visual**: Feedback claro em formulários e CTAs

### Diretrizes de Animação

- **Transições**: Duração de 300-500ms para suavidade
- **Easing**: Usar `ease-in-out` para movimento natural
- **Entrance**: Elementos entram com fade + slide suave
- **Hover**: Transformações leves (scale 1.05, shadow increase)
- **Scroll**: Parallax sutil em imagens de fundo

### Sistema Tipográfico

- **Display/Títulos**: Fonte sem serifa, peso 700-800 (ex: Poppins Bold)
- **Subtítulos**: Peso 600, tamanho 24-32px
- **Body**: Peso 400-500, tamanho 16px, line-height 1.6
- **CTA**: Peso 600, tamanho 16px, com ícone integrado
- **Hierarquia**: H1 > H2 > H3 > Body > Small

### Estrutura de Seções

1. **Header**: Logo + Menu + CTA (fixo no topo)
2. **Hero**: Imagem com overlay, headline, subheadline, CTA primária
3. **Estatísticas**: 2 métricas principais (98% no prazo, 45% antecedência)
4. **Serviços**: 6 cards de tipos de veículos com ícones
5. **Destaques**: Seção sobre a empresa com imagem
6. **Depoimentos**: Carrossel de feedback de clientes
7. **FAQ**: Accordion com perguntas frequentes
8. **CTA Final**: Seção de chamada para ação final
9. **Footer**: Links, contato, redes sociais

### Paleta Técnica Tailwind

```css
--primary: #00C8E0 (ciano)
--primary-dark: #0099B3 (ciano escuro para hover)
--secondary: #2A2A2A (cinza escuro)
--accent: #4A4A4A (cinza médio)
--background: #FFFFFF (branco)
--surface-dark: #1A1A1A (fundo muito escuro para seções)
```

Este design transmite profissionalismo, confiabilidade e modernidade, alinhado com a identidade visual da Vieira Express.
