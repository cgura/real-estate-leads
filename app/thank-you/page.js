import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-20">
      <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">Thank you for your submission!</h1>
        <p className="mt-3 text-slate-600">
          We&apos;ve received your details and will reach out soon with your best property options.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-md bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
