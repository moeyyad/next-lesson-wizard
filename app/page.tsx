import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="max-w-2xl w-full mx-auto px-4 sm:px-8">
      <div className="pt-8 pb-6 space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold">Interactive Lessons</h1>
        <p className="text-neutral-900">
          This is a demo of NextLessonWizard, an open-source project for creating interactive
          lessons with Next.js 16. 
        </p>
      </div>
      <div className="flex flex-row flex-wrap gap-4">
        <Link 
          href="/intro-to-positive-psych"
          className="w-full sm:w-fit text-center rounded-md bg-neutral-900 px-8 py-3 text-base text-white hover:bg-neutral-700 cursor-pointer"
        >
          Start Demo
        </Link>
        <a
          href="https://github.com/moeyyad/next-lesson-wizard"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-fit text-center rounded-md border border-neutral-300 px-8 py-3 text-base text-neutral-900 hover:bg-neutral-50 cursor-pointer"
        >
          Source Code
        </a>
      </div>
    </div>
  );
}
