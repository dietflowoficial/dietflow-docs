import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <h1 className="text-2xl font-bold mb-4">DietFlow Docs</h1>
      <p>
        Acesse a{' '}
        <Link href="/docs" className="font-medium underline">
          documentacao
        </Link>{' '}
        para comecar.
      </p>
    </div>
  );
}
