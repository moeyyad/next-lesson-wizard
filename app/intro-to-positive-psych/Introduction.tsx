import LessonPage from "@/components/LessonPage";
import LessonQuiz from "@/components/LessonQuiz";

export default function Introduction() {
  return (
    <LessonPage>
      <h1>Introduction to Positive Psychology</h1>

      <h2>What is positive psychology?</h2>
      <p>
        Positive Psychology is a relatively modern field of research within psychology 
        that focuses on understanding what allows individuals and communities to <i>thrive</i>. 
        While it does include the study of happiness, its scope is much broader.
        One of the main goals of Positive Psychology is to determine “What makes life worth living?”
      </p>
      <p>
        Researchers in this field study concepts such as meaning and purpose, engagement in activities, 
        gratitude, hope, optimism, forgiveness, and overall well-being. The goal is not just to understand what makes
        people feel good in the moment, but how someone can build a life characterized by 
        long-term fulfillment and psychological richness, often referred to as human flourishing.
      </p>
      <p>
        Two of the most influential figures in the development of Positive Psychology are Martin Seligman
        and Mihaly Csikszentmihalyi. In the late 1990s, they helped shift the focus of psychology away from
        a study of disease and pathology, and toward studying strengths, well-being, and optimal human functioning.
        While the field has expanded significantly since then, this lesson will focus primarily on their foundational ideas.
      </p>
      
      <h2>What you'll learn in this lesson</h2>
      <p>
        In the rest of this lesson, we will explore several key ideas that have shaped Positive Psychology:
      </p>
      <ul>
        <li>
          <b>Three Happy Lives</b> (from <i>Authentic Happiness</i> by Martin Seligman). We will learn about the 
          <i>The Pleasant Life, the Engaged Life, and the Meaningful Life</i>, a thought experiement on how people
          can pursue happiness differently.
        </li>
        <li>
          <b>The PERMA Model</b> (from <i>Flourish</i> by Martin Seligman). A framework describing
          five core elements of well-being.
        </li>
        <li>
          <b>Flow State</b> (from <i>Flow</i> by Mihaly Csikszentmihalyi).
          A state of deep immersion and focus in challenging, meaningful activities.
        </li>
        <li>
          <b>Toxic Positivity</b>. We will conclude the lesson by discussing one of the major criticisms
          of Positive Psychology, about how focusing too much on well-being can ironically be detrimental to it.
        </li>
      </ul>
    </LessonPage>
  );
}