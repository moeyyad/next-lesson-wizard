import LessonPage from "@/components/LessonPage";
import LessonQuiz from "@/components/LessonQuiz";

export default function Introduction() {

  const question = (
    <div className="space-y-3">
      <p>
        Meadowlands Neighborhood is a community of people who live in the same neighborhood.
        The community is made up of people of all ages, races, and backgrounds.
        There are many different types of people in the community, but they all have one thing in common:
        they all live in the same neighborhood.
      </p>
      <h3>Which of the following answers is most correct?</h3>
    </div>
  );

  return (
    <LessonPage>
      <LessonQuiz
        question={question}
        options={[
          { id: 1, text: "The study of mental illness" },
          { id: 2, text: "The study of happiness" },
          { id: 3, text: "The study of human flourishing" },
          { id: 4, text: "The study of personality" },
        ]}
        correctOptionId={3}
        explanation="Positive psychology is the scientific study of human flourishing and well-being."
      />
    </LessonPage>
  );
}