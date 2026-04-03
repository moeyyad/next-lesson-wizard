import LessonPage from "@/components/LessonPage";
import LessonQuiz from "@/components/LessonQuiz";

export default function FlowStateQuiz() {
  return (
    <LessonPage>
      <LessonQuiz
        question="Which condition is most essential for entering a flow state?"
        options={[
          { id: 1, text: "The activity provides external rewards" },
          { id: 2, text: "The person is in a positive mood beforehand" }, 
          { id: 3, text: "The task is relaxing and low effort" },
          { id: 4, text: "The challenge matches the individual's skill level" },
        ]}
        correctOptionId={4}
        explanation="Flow state requires a precise balance between the challenge of the task and the skill of the individual."
      />
    </LessonPage>
  );
}