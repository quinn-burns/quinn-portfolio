import Link from "next/link";
import { IconArrowLeft } from "@/components/Icons";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <p className="text-label font-medium uppercase text-terracotta-deep">
        404
      </p>
      <h1 className="mt-3 font-display text-title font-medium text-ink">
        This page is still a{" "}
        <span className="underline-sketch">sketch</span>.
      </h1>
      <p className="mt-4 max-w-xl text-body text-stone">
        Whatever you were looking for isn&rsquo;t here — but the work is one
        click away.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-terracotta-deep px-5 py-2.5 text-label font-medium uppercase text-cream transition-colors hover:bg-terracotta"
      >
        <IconArrowLeft />
        Back to the work
      </Link>
    </div>
  );
}
