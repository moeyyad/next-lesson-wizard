"use client";

import { useState, useEffect, useRef, createContext, useContext, Children } from "react";
import { X, CircleCheckBig, XCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

type LessonPageStatus = "default" | "unanswered" | "correct" | "incorrect";

type LessonWizardContextValue = {
  lessonPageStatus: LessonPageStatus;
  setLessonPageStatus: (status: LessonPageStatus) => void;
}

type LessonControlBarProps = {
  onPrevious: () => void;
  onNext: () => void;
  isFirstPage: boolean;
  isLastPage: boolean;
  lessonPageStatus: LessonPageStatus;
}

type LessonWizardProps = {
  title: string;
  children: React.ReactNode;
}

const LessonWizardContext = createContext<LessonWizardContextValue | null>(null);

export const useLessonWizardContext = () => {
  const context = useContext(LessonWizardContext);
  if (!context) {
    throw new Error("useLessonWizardContext must be used within a LessonWizard");
  }
  return context;
}

const LessonHeader = ({ percentage, lessonTitle }: { percentage: number, lessonTitle: string }) => {
  const router = useRouter();
  return (
    <div className="sticky top-0 w-full bg-white z-10">
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-8 pt-4 sm:pt-8 pb-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => router.push('/')}
            className="pr-2 text-neutral-400 hover:text-neutral-700 transition-colors cursor-pointer"
          >
            <X size={24} />
          </button>
          <div className="w-full bg-neutral-200 rounded-full h-4">
            <div
              className="bg-neutral-900 h-full rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
        
        <div className="flex items-center justify-center pt-2">
          <h6 className="text-sm text-neutral-700 truncate">{lessonTitle}</h6>
        </div>
      </div>
    </div>
  );
};

const LessonControlBar = ({ onPrevious, onNext, isFirstPage, isLastPage, lessonPageStatus }: LessonControlBarProps) => {
  return (
    <div className="fixed bottom-0 w-full bg-white z-10">

      { lessonPageStatus === "correct" && (
        <div className="bg-emerald-200">
          <div className="max-w-4xl w-full mx-auto flex items-center gap-2 px-4 sm:px-8 py-2">
            <CircleCheckBig className="h-6 w-6 text-emerald-700" />
            <span className="text-base font-medium text-emerald-700">Well Done</span>
          </div>
        </div>
      )}

      { lessonPageStatus === "incorrect" && (
        <div className="bg-rose-200">
          <div className="max-w-4xl w-full mx-auto flex items-center gap-2 px-4 sm:px-8 py-2">
            <XCircle className="h-6 w-6 text-rose-700" />
            <span className="text-base font-medium text-rose-700">Not Quite</span>
          </div>
        </div>
      )}
      
      <div className="border-t border-neutral-200">
        <div className="max-w-4xl w-full mx-auto flex justify-end items-center gap-3 px-4 sm:px-8 py-4">
          <button 
            onClick={onPrevious} 
            className={`${isFirstPage && "hidden"} flex items-center gap-2 rounded-md border border-neutral-200 px-4 py-2 text-base text-neutral-700 hover:bg-neutral-50 cursor-pointer`}
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </button>
          <button 
            onClick={onNext}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-md border border-neutral-900 bg-neutral-900 px-4 py-2 text-base text-white hover:bg-neutral-700 cursor-pointer"
          >
            {isLastPage ? 'Finish Lesson' : 'Continue'}
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

const LessonCompleteScreen = () => {
  return (
    <div>
      Complete
    </div>
  )
}

export default function LessonWizard({ title, children }: LessonWizardProps) {
  const lessonPages = Children.toArray(children);

  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [lessonPageStatus, setLessonPageStatus] = useState<LessonPageStatus>("default");

  const correctAudioRef = useRef<HTMLAudioElement>(null);
  const incorrectAudioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPageIndex]);

  const playSound = (audioRef: React.RefObject<HTMLAudioElement | null>) => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = 0;
    void audioRef.current.play();
  }

  useEffect(() => {
    if (lessonPageStatus === "correct") {
      playSound(correctAudioRef);
    }
    if (lessonPageStatus === "incorrect") {
      playSound(incorrectAudioRef);
    }
  }, [lessonPageStatus]);

  if (currentPageIndex === lessonPages.length) {
    return <LessonCompleteScreen />
  }

  const handleNextPage= () => {
    setCurrentPageIndex((prev) => Math.min(prev + 1, lessonPages.length));
    setLessonPageStatus("default");
  }

  const handlePreviousPage = () => {
    setCurrentPageIndex((prev) => Math.max(prev - 1, 0));
    setLessonPageStatus("default");
  }

  const currentPage = lessonPages[currentPageIndex];
  const isFirstPage = currentPageIndex === 0;
  const isLastPage = currentPageIndex === lessonPages.length - 1;
  const percentage = Math.round(((currentPageIndex + 1) / lessonPages.length) * 100);

  return (
    <>
      <audio ref={correctAudioRef} src="/correct.mp3" preload="auto" />
      <audio ref={incorrectAudioRef} src="/incorrect.mp3" preload="auto" />
      
      <LessonHeader percentage={percentage} lessonTitle={title} />
      <LessonWizardContext.Provider value={{ lessonPageStatus, setLessonPageStatus }}>
        {currentPage}
      </LessonWizardContext.Provider>
      <LessonControlBar 
        onPrevious={handlePreviousPage} 
        onNext={handleNextPage} 
        isFirstPage={isFirstPage} 
        isLastPage={isLastPage} 
        lessonPageStatus={lessonPageStatus} 
      />
    </>
  );
}