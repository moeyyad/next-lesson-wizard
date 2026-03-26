import LessonWizard from "@/components/LessonWizard";
import Introduction from "./Introduction";
import LessonPage from "@/components/LessonPage";

export default function IntroToPositivePsych() {
  return (
    <LessonWizard title="Introduction to Positive Psychology">
      <Introduction />
      <LessonPage>Page 2</LessonPage>
      <LessonPage>Page 3</LessonPage>
      <LessonPage>Page 4</LessonPage>
      <LessonPage>Page 5</LessonPage>
    </LessonWizard>
  );
}