"use client";

import { useEffect, useState } from "react";
import { useLessonWizardContext } from "./LessonWizard";

type LessonQuizProps = {
  question: string;
  options: string[];
  correctOptionId: number;
  explanation?: string;
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

  useEffect(() => {
    setLessonPageStatus("unanswered");
  }, []);

  const handleChoiceClick = (optionId: number) => {
    if (selectedOptionId !== null) return;
    
    setSelectedOptionId(optionId);
    if (optionId === correctOptionId) {
      setLessonPageStatus("correct");
    } else {
      setLessonPageStatus("incorrect");
    }
  };

  return (
    <div className="space-y-6">
      <h2>{question}</h2>

      {children && <div>{children}</div>}

      <div className="space-y-3">
        {options.map((option, index) => {
          const isSelected = selectedOptionId === index;
          const isCorrectChoice = index === correctOptionId;
          const showAnsweredState = selectedOptionId !== null;

          let buttonClassName =
            "w-full rounded-xl border p-4 text-left transition hover:bg-neutral-50";

          if (showAnsweredState) {
            if (isSelected && isCorrectChoice) {
              buttonClassName += " border-green-600";
            } else if (isSelected && !isCorrectChoice) {
              buttonClassName += " border-red-600";
            } else {
              buttonClassName += " border-neutral-300";
            }
          } else {
            buttonClassName += " border-neutral-300";
          }

          return (
            <button
              key={index}
              type="button"
              className={buttonClassName}
              onClick={() => handleChoiceClick(index)}
              disabled={selectedOptionId !== null}
            >
              {option}
            </button>
          );
        })}
      </div>

      {selectedOptionId !== null && explanation && (
        <p>{explanation}</p>
      )}
    </div>
  );
}