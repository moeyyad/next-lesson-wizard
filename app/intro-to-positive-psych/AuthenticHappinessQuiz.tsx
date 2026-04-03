import LessonPage from "@/components/LessonPage";
import LessonQuiz from "@/components/LessonQuiz";

export default function AuthenticHappinessQuiz() {

  const question = (
    <div className="space-y-3">
      <p>
        A student stops choosing courses because they are easy and stress-free 
        and instead enrolls in difficult courses that will intellectually challenge them.
      </p>
      <h3>Which shift does this most clearly reflect?</h3>
    </div>
  );
  return (
    <LessonPage>
      <LessonQuiz
        question={question}
        options={[
          { id: 1, text: "Engaged → Meaningful" },
          { id: 2, text: "Engaged → Pleasant" },
          { id: 3, text: "Pleasant → Meaningful" },
          { id: 4, text: "Pleasant → Engaged" },
        ]}
        correctOptionId={4}
        explanation="The student is trading off the pleasantness of easy courses for the engagement of difficult courses."
      />
    </LessonPage>
  );
}