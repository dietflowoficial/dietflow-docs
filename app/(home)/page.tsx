import Link from 'next/link';
import Image from 'next/image';
import { Rocket, BookOpen, Layers } from 'lucide-react';

const features = [
  {
    title: 'Comecando',
    description: 'Primeiro login, tour rapido e conceitos basicos.',
    href: '/docs/comecando/o-que-e-dietflow',
    icon: Rocket,
  },
  {
    title: 'Guias',
    description: 'Passo a passo para cada funcionalidade.',
    href: '/docs/guias/cadastrar-paciente',
    icon: BookOpen,
  },
  {
    title: 'Referencia',
    description: 'Modulos, atalhos e detalhes tecnicos.',
    href: '/docs/referencia/modulos-clinicos',
    icon: Layers,
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="flex flex-col items-center justify-center gap-6 px-6 pt-24 pb-16 text-center sm:pt-32 sm:pb-20">
        <Image
          src="/dietflow-logo.png"
          alt="DietFlow"
          width={80}
          height={80}
          className="rounded-2xl"
          priority
        />

        <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight text-fd-foreground sm:text-5xl">
          Documentacao DietFlow
        </h1>

        <p className="max-w-xl text-lg text-fd-muted-foreground">
          Tudo que voce precisa para dominar o DietFlow &mdash; o sistema de
          gestao nutricional mais completo do Brasil.
        </p>

        <Link
          href="/docs/comecando/o-que-e-dietflow"
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-fd-primary px-6 py-3 text-sm font-semibold text-fd-primary-foreground shadow-sm transition-colors hover:opacity-90"
        >
          Comecar
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </section>

      {/* Feature Cards */}
      <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-20 sm:grid-cols-3">
        {features.map(({ title, description, href, icon: Icon }) => (
          <Link
            key={title}
            href={href}
            className="group flex flex-col gap-3 rounded-xl border border-fd-border bg-fd-card p-6 shadow-sm transition-colors hover:bg-fd-accent"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-fd-primary/10 text-fd-primary">
              <Icon className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-fd-card-foreground">
              {title}
            </h2>
            <p className="text-sm text-fd-muted-foreground">{description}</p>
          </Link>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-fd-border bg-fd-card/50 px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-sm text-fd-muted-foreground sm:flex-row sm:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a
              href="https://dietflow.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-fd-foreground"
            >
              DietFlow
            </a>
            <a
              href="mailto:dietflow.oficial@gmail.com"
              className="transition-colors hover:text-fd-foreground"
            >
              Suporte
            </a>
            <a
              href="https://instagram.com/dietflow.oficial"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-fd-foreground"
            >
              @dietflow.oficial
            </a>
          </div>
          <p>&copy; 2026 DietFlow. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
