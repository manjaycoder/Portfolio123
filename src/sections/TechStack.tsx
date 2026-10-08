import { useRef } from "react";
import { Reveal } from "../components/layout/Reveal";
import { Container, Section } from "../components/layout/Section";
import { Accented } from "../components/ui/Accented";
import { useI18n } from "../i18n";
import { stagger } from "../lib/anim";
import { useStageSection } from "../stage/useStageSection";

function StackGroup({
  title,
  items,
  index,
}: {
  title: string;
  items: readonly string[];
  index: number;
}) {
  return (
    <div className="border-t border-[var(--stage-line)] pt-5 md:pt-6">
      <Reveal delay={stagger(index, 0.06)}>
        <h3 className="font-display text-[1.1rem] font-bold tracking-[-0.025em]">
          {title}
        </h3>
      </Reveal>
      <ul className="mt-5 flex flex-wrap gap-2">
        {items.map((item, itemIndex) => (
          <Reveal as="li" key={item} delay={stagger(index + itemIndex, 0.035, 0.36)}>
            <span className="inline-flex min-h-9 items-center border border-[var(--stage-line)] px-3 py-1.5 text-[0.88rem] leading-tight text-[var(--stage-fg-2)] transition-colors duration-300 hover:border-[var(--stage-fg-2)] hover:text-[var(--stage-fg)]">
              {item}
            </span>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

export function TechStack() {
  const { t } = useI18n();
  const ref = useRef<HTMLElement>(null);

  useStageSection(ref, "#f4f4f5");

  return (
    <Section
      id="stack"
      ref={ref}
      labelledBy="stack-title"
      className="bg-[var(--color-paper-2)] py-28 md:py-36 lg:py-44"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-24">
          <div>
            <Reveal>
              <p className="mb-5 text-[0.75rem] font-medium uppercase tracking-[0.12em] text-[var(--stage-fg-2)]">
                {t.techStack.label}
              </p>
              <h2
                id="stack-title"
                className="font-display max-w-[10ch] text-[clamp(2.4rem,5.5vw,4.5rem)] font-extrabold"
              >
                <Accented text={t.techStack.title} />
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-[30ch] text-[0.98rem] leading-[1.65] text-[var(--stage-fg-2)]">
                {t.techStack.lead}
              </p>
            </Reveal>
          </div>

          <div className="grid gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-12">
            {t.techStack.groups.map((group, index) => (
              <StackGroup key={group.title} {...group} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}