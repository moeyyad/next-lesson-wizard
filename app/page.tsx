import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="max-w-4xl w-full mx-auto px-4 sm:px-8">
      <div className="py-8 space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold">Interactive Lessons</h1>
        <p className="text-neutral-900">
          This is a demo of next-lesson-wizard, an open-source project for creating interactive
          lessons with Next.js 16. The source code is available on{" "}
          <a
            href="https://github.com/moeyyad" // TODO: change to actual repo
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 font-medium underline underline-offset-4 hover:text-sky-400"
          >
            GitHub
          </a>
        </p>
      </div>
      <div className="flex flex-col space-y-4">
        <Link href="/intro-to-positive-psych">
          <span className="text-sky-500 font-medium underline underline-offset-4 hover:text-sky-400">Introduction to Positive Psychology</span>
        </Link>
      </div>
    </div>
  );
}
