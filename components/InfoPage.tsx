import Link from "next/link";

export function InfoPage({
  title,
  introduction,
  children,
}: {
  title: string;
  introduction: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Link className="rounded-sm text-sm font-medium text-accent hover:text-white" href="/">
        ← Countries Market Cap
      </Link>
      <header className="mt-8 border-b border-border pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h1>
        <p className="mt-3 text-base leading-7 text-muted">{introduction}</p>
      </header>
      <div className="info-content mt-8 space-y-8">{children}</div>
    </main>
  );
}
