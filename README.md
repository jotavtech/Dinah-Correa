# Cartório Dinah Corrêa — Landing Page

Landing page institucional premium para o **Cartório Dinah Corrêa** (Solânea - PB).
Estática, rápida, responsiva e sem backend — todo o contato é direcionado para WhatsApp,
telefone, e-mail e Google Maps.

Construída com **Next.js 16 (App Router)**, **TypeScript** e **Tailwind CSS v4**.

---

## Como rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento (http://localhost:3000)
npm run build    # build de produção
npm run start    # servir o build de produção
npm run lint     # checagem de lint (ESLint)
```

Requisitos: Node.js 20.9+.

---

## Onde editar os dados

Quase tudo que muda no dia a dia está em **um único arquivo**:

### `src/data/site.ts`

| O que trocar | Campo |
| --- | --- |
| Nome do cartório | `siteConfig.name` |
| Cidade/UF | `siteConfig.city` |
| Endereço completo | `siteConfig.address` / `addressShort` |
| Telefone exibido | `siteConfig.phone` |
| Telefone do link `tel:` | `siteConfig.phoneHref` |
| Número do WhatsApp (só dígitos, com DDI) | `siteConfig.whatsapp` |
| E-mail | `siteConfig.email` |
| Instagram | `siteConfig.instagram` |
| Horário | `siteConfig.hours` |
| Link do Google Maps | `siteConfig.mapsUrl` |
| Domínio do site (SEO/OG) | `siteConfig.url` |
| **Serviços** (títulos, descrições, tópicos, CTAs) | array `services` |
| **Links úteis** | array `usefulLinks` |
| Mostrar/ocultar assinatura do desenvolvedor | `SHOW_AUTHOR_CREDIT` |
| Texto da assinatura | `AUTHOR_CREDIT` |

> O número do WhatsApp deve conter **apenas dígitos**, incluindo o código do país.
> Ex.: `5583993963957` (55 = Brasil, 83 = DDD).

### Outros pontos de conteúdo

- **Perguntas do FAQ** — `src/components/FAQSection.tsx` (array `faqs`).
- **Itens de "Acesso rápido"** — `src/components/QuickAccess.tsx`.
- **Blocos de valores (Sobre)** — `src/components/AboutSection.tsx`.
- **Links de navegação** — `src/components/nav-links.ts`.
- **Metadados / SEO / JSON-LD** — `src/app/layout.tsx`.
- **Imagem de compartilhamento (Open Graph)** — gerada dinamicamente em `src/app/opengraph-image.tsx`.

---

## Estrutura

```
src/
  app/
    layout.tsx            # fontes, metadata, JSON-LD (ProfessionalService)
    page.tsx              # composição das seções
    opengraph-image.tsx   # imagem OG dinâmica (1200x630)
    globals.css           # tokens de design, paleta, animações
  data/
    site.ts               # ⭐ configuração central (dados + serviços + links)
  lib/
    cn.ts                 # helper de classes (clsx + tailwind-merge)
  components/
    Header.tsx / MobileMenu.tsx / nav-links.ts
    Hero.tsx / QuickAccess.tsx / AboutSection.tsx
    ServicesSection.tsx / ServiceCard.tsx / ServiceSelector.tsx
    ContactSection.tsx / ContactFormToWhatsApp.tsx
    LocationSection.tsx / FAQSection.tsx / UsefulLinksSection.tsx
    Footer.tsx
    WhatsAppButton.tsx / FloatingWhatsApp.tsx
    Brand.tsx / Section.tsx / SectionHeading.tsx / Ornament.tsx / Reveal.tsx
```

### Como funciona o contato (sem backend)

- Os botões de WhatsApp usam `whatsappLink(mensagem)` (em `site.ts`), que gera
  um link `https://wa.me/<numero>?text=<mensagem-codificada>`.
- O formulário (`ContactFormToWhatsApp.tsx`) valida os campos no cliente e abre
  o WhatsApp com a mensagem montada. **Nada é salvo nem enviado a servidores.**
- O mapa não carrega `iframe` automaticamente: a seção de localização abre o
  Google Maps em nova aba ao clicar.

---

## Deploy (Vercel)

1. Faça push para o GitHub (já configurado neste repositório).
2. Em [vercel.com](https://vercel.com/new), importe o repositório `Dinah-Correa`.
3. A Vercel detecta Next.js automaticamente — não há variáveis de ambiente
   obrigatórias. Clique em **Deploy**.
4. Após publicar, atualize `siteConfig.url` em `src/data/site.ts` com o domínio
   final para que o SEO/Open Graph aponte para o endereço correto.

---

## Identidade visual

- **Paleta**: papel off-white, dourado discreto, preto institucional
  (definida em `globals.css` como variáveis CSS e tokens do Tailwind v4).
- **Tipografia**: Playfair Display (títulos, editorial) + Inter (texto/interface),
  via `next/font` (self-hosted, sem requisições externas).
- **Acessibilidade**: HTML semântico, navegação por teclado, foco visível,
  `prefers-reduced-motion`, accordion com `aria-expanded`/`inert`.

---

> Para ocultar a assinatura do desenvolvedor no rodapé, defina
> `SHOW_AUTHOR_CREDIT = false` em `src/data/site.ts`.
