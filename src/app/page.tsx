import Link from 'next/link';

const features = [
  {
    title: 'Quick Reporting',
    description:
      'Simple, touch-friendly forms optimized for mobile devices with large tap targets and minimal data entry requirements.',
  },
  {
    title: 'Photo Upload & Search',
    description:
      'Upload photos directly from your phone or paste external URLs. Search by microchip ID, area, species, and owner information.',
  },
  {
    title: 'Care Tracking',
    description:
      'Track vet visits, foster assignments, feeder schedules, and medical conditions with detailed notes and status updates.',
  },
  {
    title: 'Team Coordination',
    description:
      'Assign trappers, feeders, and foster contacts. Track ownership of tasks and coordinate rescue efforts in one place.',
  },
  {
    title: 'Location Tracking',
    description:
      'Record GPS coordinates, area notes, addresses, and map references for organized and repeatable search efforts.',
  },
  {
    title: 'Owner Reunion',
    description:
      'Privacy-controlled owner contact details with consent-aware workflows for quick reunification communication.',
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-sky-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14 space-y-16">
        <section className="rounded-2xl border border-blue-200 bg-gradient-to-b from-white to-blue-50 p-8 md:p-12 shadow-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-600">DisasterPaws</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Reuniting lost animals with their families after natural disasters
          </h1>
          <p className="mt-4 max-w-3xl text-slate-700 text-lg">
            A field-ready platform for emergency responders, veterinarians, and shelter volunteers to track, care for,
            and reunite found animals with their owners during disaster recovery.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/login"
              className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500"
            >
              Get Started
            </Link>
            <a href="#features" className="rounded-lg border border-blue-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-blue-50">
              Learn More
            </a>
            <Link href="/review-queue" className="rounded-lg border border-blue-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-blue-50">
              Ops Dashboard
            </Link>
          </div>
        </section>

        <section id="features" className="space-y-5">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Built for Emergency Response</h2>
            <p className="mt-2 text-slate-700">
              Mobile-first tools designed for stressed users working in challenging field conditions.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-700">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-blue-200 bg-blue-50 p-8 md:p-10 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Ready to Help Animals in Crisis?</h2>
          <p className="mt-2 text-slate-700 max-w-3xl">
            Join emergency response teams, shelters, and volunteers using DisasterPaws to reunite families with their beloved pets after natural disasters.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/login"
              className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500"
            >
              Start Helping Now
            </Link>
            <Link href="/incidents" className="rounded-lg border border-blue-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-blue-100">
              Open Incident Queue
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
