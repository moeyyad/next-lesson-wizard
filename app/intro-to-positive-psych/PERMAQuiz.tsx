import LessonPage from "@/components/LessonPage";
import LessonQuiz from "@/components/LessonQuiz";

export default function PERMAQuiz() {

  const question = (
    <div className="space-y-3">
      <p>
        An entrepreneur achieves every major goal (high A), feels deeply engaged in their work (high E), 
        feels their work serves a great purpose (high M), and has strong relationships with their team (high R). 
        However, the constant stress means they haven't felt genuine joy or relaxation in years (low P).
      </p>
      <h3>What does the PERMA model suggest?</h3>
    </div>
  );

  return (
    <LessonPage>
      <LessonQuiz
        question={question}
        options={[
          { id: 1, text: "Their well-being is high because most PERMA components are strong" },
          { id: 2, text: "Their well-being is incomplete despite their success" },
          { id: 3, text: "High meaning can fully compensate for low positive emotion" },
          { id: 4, text: "Well-being is subjective, so the entrepreneur is flourishing as long as they reach their own goals" },
        ]}
        correctOptionId={2}
        explanation="The PERMA model suggests that the five components are independent and not interchangeable. This means being strong in some areas does not fully compensate for deficits in others. Their well-being is still incomplete because Positive Emotion is chronically low."
      />
    </LessonPage>
  );
}