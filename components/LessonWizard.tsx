"use client";

import { useState, createContext, Children } from "react";

type LessonPageStatus = 'default' | 'unanswered' | 'correct' | 'incorrect';

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

const LessonWizardContext = createContext<LessonWizardContextValue>({
  lessonPageStatus: 'default',
  setLessonPageStatus: () => {},
})

const LessonProgressBar = ({ percentage }: { percentage: number }) => (
  <div className="pt-4 sm:pt-8 sticky top-0 bg-white z-10">
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-blue-600 h-full rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

const LessonTitle = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center pt-2 pb-4">
    <h6 className="text-sm text-gray-600">{title}</h6>
  </div>
);

const LessonControlBar = ({ onPrevious, onNext, isFirstPage, isLastPage, lessonPageStatus }: LessonControlBarProps) => {
  return (
    <div>
      Control Bar
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
  const [lessonPageStatus, setLessonPageStatus] = useState<LessonPageStatus>('default');

  if (currentPageIndex === lessonPages.length) {
    return <LessonCompleteScreen />
  }

  const handleNextPage= () => {
    setCurrentPageIndex((prev) => Math.min(prev + 1, lessonPages.length));
    setLessonPageStatus('default');
  }

  const handlePreviousPage = () => {
    setCurrentPageIndex((prev) => Math.max(prev - 1, 0));
    setLessonPageStatus('default');
  }

  const currentPage = lessonPages[currentPageIndex];
  const isFirstPage = currentPageIndex === 0;
  const isLastPage = currentPageIndex === lessonPages.length - 1;
  const percentage = Math.round(((currentPageIndex + 1) / lessonPages.length) * 100);

  return (
    <>
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-8">
        <LessonProgressBar percentage={percentage} />
        <LessonTitle title={title} />
        <LessonWizardContext.Provider value={{ lessonPageStatus, setLessonPageStatus }}>
          {currentPage}
        </LessonWizardContext.Provider>
      </div>
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