import LessonPage from "@/components/LessonPage";
import LessonQuiz from "@/components/LessonQuiz";

export default function Introduction() {
  return (
    <LessonPage>
      <LessonQuiz
        question="What is positive psychology?"
        options={[
          "The study of mental illness",
          "The study of happiness",
          "The study of human flourishing",
          "The study of personality",
        ]}
        correctOptionId={2}
        explanation="Positive psychology is the scientific study of human flourishing and well-being."
      />
    </LessonPage>
  );
}