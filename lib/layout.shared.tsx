import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image
            src="/dietflow-icon.svg"
            alt="DietFlow"
            width={24}
            height={22}
            className="shrink-0"
          />
          <span className="font-semibold">{appName}</span>
        </>
      ),
      url: '/',
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      {
        text: 'DietFlow App',
        url: 'https://app.dietflow.com.br',
        external: true,
      },
      {
        text: 'Suporte',
        url: 'mailto:contato@dietflow.com.br',
        external: true,
      },
    ],
  };
}
