import LessonWizard from "@/components/LessonWizard";

import Introduction from "./Introduction";
import AuthenticHappiness from "./AuthenticHappiness";
import AuthenticHappinessQuiz from "./AuthenticHappinessQuiz";
import Conclusion from "./Conclusion";

export default function IntroToPositivePsych() {
  return (
    <LessonWizard title="Introduction to Positive Psychology">
      <Introduction />
      <AuthenticHappiness />
      <AuthenticHappinessQuiz />
      <Conclusion />
    </LessonWizard>
  );
}