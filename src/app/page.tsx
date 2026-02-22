import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-sky-50 text-slate-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-14 md:px-10">
        <section className="rounded-2xl border border-blue-200 bg-gradient-to-b from-white to-blue-50 p-8 shadow-sm md:p-12">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-600">DisasterPaws</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Project Intent</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-700">
            DisasterPaws is focused on helping teams reunite lost animals with their families after natural disasters,
            with an interface that supports field responders and human-in-the-loop decision making.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/login" className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500">
              Get Started
            </Link>
            <Link href="/dashboard" className="rounded-lg border border-blue-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-blue-50">
              View UI Skeleton
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
