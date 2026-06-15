/**
 * Configuração central do site.
 * Para atualizar telefone, endereço, e-mail ou links úteis,
 * edite os valores abaixo — eles se propagam por toda a landing page.
 */

export const siteConfig = {
  name: "Cartório Dinah Corrêa",
  shortName: "Dinah Corrêa",
  city: "Solânea - PB",
  address: "R. José Amâncio Ramalho, 269, Centro, Solânea - PB",
  addressShort: "R. José Amâncio Ramalho, 269, Centro",
  phone: "+55 83 99396-3957",
  phoneHref: "tel:+5583993963957",
  whatsapp: "5583993963957",
  email: "contato@cartoriodcorrea.com.br",
  instagram: "https://www.instagram.com/cartoriodinahcorrea/",
  hours: "Segunda a sexta, das 8h às 17h",
  hoursShort: "Seg. a sex., 8h às 17h",
  serviceModes: "Atendimento presencial, remoto e telefônico",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=R.+Jos%C3%A9+Am%C3%A2ncio+Ramalho%2C+269%2C+Centro%2C+Sol%C3%A2nea+-+PB",
  url: "https://cartoriodcorrea.com.br",
} as const;

/** Assinatura discreta do desenvolvedor no footer. Troque para `false` para ocultar. */
export const SHOW_AUTHOR_CREDIT = true;
export const AUTHOR_CREDIT = "Design & desenvolvimento por Jota Chaves.";

/**
 * Monta um link de WhatsApp com mensagem pré-preenchida.
 */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMessage = `Olá, ${siteConfig.name}. Gostaria de atendimento. Poderiam me orientar sobre os próximos passos?`;

export type Service = {
  slug: "registro-imoveis" | "notas" | "protesto" | "rtd-pj";
  title: string;
  short: string;
  description: string;
  cta: string;
  topics: string[];
};

export const services: Service[] = [
  {
    slug: "registro-imoveis",
    title: "Registro de Imóveis",
    short: "Imóveis e propriedade",
    description:
      "Formalização e segurança jurídica em atos relacionados a imóveis, como compra e venda, doações, financiamentos, averbações e registros de propriedade.",
    cta: "Consultar atendimento",
    topics: ["Compra e venda", "Doações", "Financiamentos", "Averbações"],
  },
  {
    slug: "notas",
    title: "Tabelionato de Notas",
    short: "Escrituras e firmas",
    description:
      "Lavratura de escrituras públicas, procurações, reconhecimento de firma, autenticações, testamentos, atas notariais e demais atos notariais.",
    cta: "Falar sobre notas",
    topics: ["Escrituras", "Procurações", "Reconhecimento de firma", "Autenticações"],
  },
  {
    slug: "protesto",
    title: "Protesto de Títulos",
    short: "Títulos e dívidas",
    description:
      "Registro formal de inadimplência de títulos e documentos de dívida, com efeitos jurídicos e financeiros previstos em lei.",
    cta: "Solicitar orientação",
    topics: ["Apresentação de títulos", "Intimações", "Quitação", "Certidões"],
  },
  {
    slug: "rtd-pj",
    title: "RTD / PJ",
    short: "Documentos e pessoas jurídicas",
    description:
      "Registro de títulos, documentos e pessoas jurídicas, garantindo publicidade, conservação, validade e segurança para documentos diversos.",
    cta: "Entender serviço",
    topics: ["Contratos", "Documentos", "Pessoas jurídicas", "Publicidade legal"],
  },
];

export const usefulLinks = [
  {
    label: "RTDPJ Brasil",
    href: "https://rtdpjbrasil.org.br/",
    description: "Central de Registro de Títulos e Documentos e Pessoas Jurídicas.",
  },
  {
    label: "Cenprot",
    href: "https://www.cenprotnacional.org.br/",
    description: "Central Nacional de Serviços Eletrônicos dos Tabeliães de Protesto.",
  },
  {
    label: "e-Not Assina",
    href: "https://www.enotassina.org.br/",
    description: "Plataforma de assinatura eletrônica notarial.",
  },
  {
    label: "e-Notariado",
    href: "https://www.e-notariado.org.br/",
    description: "Atos notariais eletrônicos do Colégio Notarial do Brasil.",
  },
  {
    label: "Certificado Digital",
    href: "https://www.gov.br/iti/pt-br/assuntos/certificado-digital",
    description: "Informações oficiais sobre certificação digital (ICP-Brasil).",
  },
] as const;
