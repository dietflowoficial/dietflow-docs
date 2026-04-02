import { RootProvider } from 'fumadocs-ui/provider/next';
import '@fontsource-variable/inter';
import '@fontsource-variable/fira-code';
import './global.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://docs.dietflow.com.br'),
  title: {
    default: 'DietFlow Docs',
    template: '%s | DietFlow Docs',
  },
  description:
    'Documentacao oficial do DietFlow — Sistema de Gestao Nutricional',
  icons: {
    icon: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'DietFlow Docs',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
