"use client";

import { useState, createContext } from "react";

type LessonPageStatus = 'default' | 'unanswered' | 'correct' | 'incorrect';

type LessonWizardContextValue = {
  lessonPageStatus: LessonPageStatus;
  setLessonPageStatus: (status: LessonPageStatus) => void;
}

const LessonWizardContext = createContext<LessonWizardContextValue>({
  lessonPageStatus: 'default',
  setLessonPageStatus: () => {},
})

const LessonProgressBar = ({ progress }: { progress: number }) => (
  <div className="pt-4 sm:pt-8 pb-4 sticky top-0 bg-white z-10">
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-blue-600 h-full rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);

const LessonControlBar = () => {
  return (
    <div>
      Control Bar
    </div>
  )
}

export default function LessonWizard({ children }: { children: React.ReactNode }) {
  const [index, setIndex] = useState(0);
  const [lessonPageStatus, setLessonPageStatus] = useState<LessonPageStatus>('default');


  return (
    <div className="max-w-4xl w-full mx-auto px-4 sm:px-8">
      <LessonProgressBar progress={50} />
      <LessonWizardContext.Provider value={{ lessonPageStatus, setLessonPageStatus }}>
        {children}
      </LessonWizardContext.Provider>
    </div>
  );
}