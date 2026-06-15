import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { ServiceCard } from "./ServiceCard";
import { ServiceSelector } from "./ServiceSelector";
import { services } from "@/data/site";

export function ServicesSection() {
  return (
    <Section id="servicos" className="border-y border-border bg-taupe">
      <SectionHeading
        eyebrow="Serviços"
        title={
          <>
            Serviços cartorários com orientação clara e{" "}
            <span className="text-gold">atendimento seguro</span>.
          </>
        }
        description="Conheça as principais áreas de atuação. Para confirmar documentos e procedimentos, fale com nossa equipe."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <ServiceCard key={service.slug} service={service} index={i} />
        ))}
      </div>

      <div className="mt-12">
        <ServiceSelector />
      </div>
    </Section>
  );
}
