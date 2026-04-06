"use client";

import { useEffect, useRef, useState } from "react";
import { Puzzle, Brain, Redo2 } from "lucide-react";

import { useLessonWizardContext } from "./LessonWizard";


type Option = {
  id: number;
  text: string;
};

type LessonQuizProps = {
  question: string | React.ReactNode;
  options: Option[];
  correctOptionId: number;
  explanation: string | React.ReactNode;
  children?: React.ReactNode;
};

export default function LessonQuiz({
  question,
  options,
  correctOptionId,
  explanation,
  children,
}: LessonQuizProps) {
  const { setLessonPageStatus } = useLessonWizardContext();
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
  const explanationRef = useRef<HTMLDivElement>(null);

  const answered = selectedOptionId !== null;

  useEffect(() => {
    setLessonPageStatus("unanswered");
  }, []);

  const handleOptionClick = (optionId: number) => {
    if (answered) return;
    
    setSelectedOptionId(optionId);
    if (optionId === correctOptionId) {
      setLessonPageStatus("correct");
    } else {
      setLessonPageStatus("incorrect");
    }

    setTimeout(() => {
      explanationRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const handleTryAgain = () => {
    setSelectedOptionId(null);
    setLessonPageStatus("unanswered");
  }

  const getOptionStyle = (option: Option) => {
    if (!answered) {
      return "w-full rounded-xl border border-neutral-200 p-4 text-left cursor-pointer hover:bg-neutral-50";
    }

    if (option.id === selectedOptionId) {
      return option.id === correctOptionId
        ? "w-full rounded-xl border border-emerald-400 bg-emerald-200 p-4 text-left"
        : "w-full rounded-xl border border-rose-400 bg-rose-200 p-4 text-left"
    }

    return "w-full rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-left text-neutral-700";
  }


  return (
    <div className="space-y-6">
      <div className="p-4 border border-neutral-200 rounded-xl space-y-4">
        <div className="flex items-center gap-2">
          <Puzzle className="h-5 w-5 text-neutral-400" />
          <h3>Question</h3>
        </div>
        
        {typeof question === "string" 
          ? <h4>{question}</h4> 
          : question
        }

        {children}

        <div className="space-y-3">
          {options.map((option) => 
              <button
                key={option.id}
                type="button"
                className={getOptionStyle(option)}
                onClick={() => handleOptionClick(option.id)}
                disabled={answered}
              >
                {option.text}
              </button>
          )}
        </div>
      </div>

      {answered && (
        <div ref={explanationRef} className="p-4 border border-neutral-200 rounded-xl space-y-4">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-neutral-400" />
            <h3>Explanation</h3>
          </div>
          {typeof explanation === "string" 
            ? <p>{explanation}</p> 
            : explanation
          }
          {selectedOptionId !== correctOptionId && (
            <button
              onClick={handleTryAgain}
              className="flex items-center gap-2 rounded-md border border-neutral-200 px-4 py-2 hover:bg-neutral-50 cursor-pointer"
              disabled={!answered}
            >
              <Redo2 className="h-4 w-4 text-neutral-700" />
              Try Again
            </button>
          )}
        </div>
      )}
    </div>
  );
}