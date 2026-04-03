import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="max-w-4xl w-full mx-auto px-4 sm:px-8">
      <div className="py-8 space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold">Interactive Lessons</h1>
        <p className="text-neutral-900">
          This is a demo of next-lesson-wizard, an open-source project for creating interactive
          lessons with Next.js 16. 
        </p>
      </div>
      <div className="flex flex-col space-y-4">
        <Link 
          href="/intro-to-positive-psych"
          className="w-fit rounded-full bg-neutral-900 px-8 py-3 text-base text-white hover:bg-neutral-700 cursor-pointer"
        >
          Start Lesson
        </Link>
        <a
          href="https://github.com/moeyyad" // TODO: change to actual repo
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit rounded-full border border-neutral-200 px-8 py-3 text-base text-neutral-700 hover:bg-neutral-50 cursor-pointer"
        >
          View Source Code
        </a>
      </div>
    </div>
  );
}
