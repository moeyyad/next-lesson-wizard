import LessonWizard from "@/components/LessonWizard";

import Introduction from "./Introduction";
import AuthenticHappiness from "./AuthenticHappiness";

export default function IntroToPositivePsych() {
  return (
    <LessonWizard title="Introduction to Positive Psychology">
      <Introduction />
      <AuthenticHappiness />
    </LessonWizard>
  );
}