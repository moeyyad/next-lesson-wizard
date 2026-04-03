import LessonWizard from "@/components/LessonWizard";

import Introduction from "./Introduction";
import AuthenticHappiness from "./AuthenticHappiness";
import AuthenticHappinessQuiz from "./AuthenticHappinessQuiz";
import PERMA from "./PERMA";
import PERMAQuiz from "./PERMAQuiz";
import FlowState from "./FlowState";
import FlowStateQuiz from "./FlowStateQuiz";
import LifeStatisfaction from "./LifeStatisfaction";
import ToxicPositivity from "./ToxicPositivity";
import Conclusion from "./Conclusion";

export default function IntroToPositivePsych() {
  return (
    <LessonWizard title="Introduction to Positive Psychology">
      <Introduction />
      <AuthenticHappiness />
      <AuthenticHappinessQuiz />
      <PERMA />
      <PERMAQuiz />
      <FlowState />
      <FlowStateQuiz />
      <LifeStatisfaction />
      <ToxicPositivity />
      <Conclusion />
    </LessonWizard>
  );
}