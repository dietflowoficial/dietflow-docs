import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import { appName } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image
            src="/dietflow-logo.png"
            alt="DietFlow"
            width={24}
            height={24}
            className="shrink-0 rounded"
          />
          <span className="font-semibold">{appName}</span>
        </>
      ),
      url: '/',
    },
    links: [
      {
        text: 'DietFlow',
        url: 'https://dietflow.com.br',
        external: true,
      },
      {
        text: 'Suporte',
        url: 'mailto:dietflow.oficial@gmail.com',
        external: true,
      },
      {
        text: 'Instagram',
        url: 'https://instagram.com/dietflow.oficial',
        external: true,
      },
    ],
  };
}
