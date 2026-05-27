export default function Home() {
  return (
    <main className="flex-1">
      <section className="bg-slate-900 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 md:flex-row md:items-center md:justify-between md:px-10">
          <div className="max-w-2xl space-y-5">
            <p className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm font-medium">
              Real Estate Lead Generation
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Connect with your ideal property faster.
            </h1>
            <p className="text-lg text-slate-200">
              Tell us what you need and our team will match you with curated homes, financing guidance, and a dedicated agent.
            </p>
            <div className="grid gap-3 text-sm text-slate-200 sm:grid-cols-3">
              <div className="rounded-lg border border-white/20 bg-white/5 p-3">Curated listings</div>
              <div className="rounded-lg border border-white/20 bg-white/5 p-3">Local market experts</div>
              <div className="rounded-lg border border-white/20 bg-white/5 p-3">Fast response time</div>
            </div>
          </div>

          <div className="w-full max-w-xl rounded-2xl bg-white p-6 text-slate-900 shadow-2xl md:p-8">
            <h2 className="text-2xl font-semibold">Get matched with properties</h2>
            <p className="mt-2 text-sm text-slate-600">Complete this form and we will contact you within one business day.</p>

            <form
              name="real-estate-lead"
              method="POST"
              action="/thank-you"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="mt-6 grid gap-4"
            >
              <input type="hidden" name="form-name" value="real-estate-lead" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you&apos;re human: <input name="bot-field" />
                </label>
              </p>

              <label className="grid gap-1 text-sm font-medium">
                Name
                <input
                  type="text"
                  name="name"
                  required
                  className="rounded-md border border-slate-300 px-3 py-2 outline-none ring-slate-400 focus:ring"
                />
              </label>

              <label className="grid gap-1 text-sm font-medium">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  className="rounded-md border border-slate-300 px-3 py-2 outline-none ring-slate-400 focus:ring"
                />
              </label>

              <label className="grid gap-1 text-sm font-medium">
                Phone Number (optional)
                <input
                  type="tel"
                  name="phone"
                  className="rounded-md border border-slate-300 px-3 py-2 outline-none ring-slate-400 focus:ring"
                />
              </label>

              <label className="grid gap-1 text-sm font-medium">
                Budget (optional)
                <input
                  type="text"
                  name="budget"
                  placeholder="e.g., $350,000 - $450,000"
                  className="rounded-md border border-slate-300 px-3 py-2 outline-none ring-slate-400 focus:ring"
                />
              </label>

              <label className="grid gap-1 text-sm font-medium">
                Message
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="rounded-md border border-slate-300 px-3 py-2 outline-none ring-slate-400 focus:ring"
                />
              </label>

              <button
                type="submit"
                className="mt-2 rounded-md bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-slate-700"
              >
                Submit Lead Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
