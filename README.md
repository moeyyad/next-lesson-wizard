# next-lesson-wizard

Next Lesson Wizard is an open-source project that makes it easy to create interactive lessons using Next.js. 
It is designed to be as unopinionated as possible to provide a great developer experience 
for building the next "Duolingo for X."

![Lesson Wizard Screenshot](/public/screenshot.png)

## Getting Started

Copy and paste the following 4 lines of code into your terminal and you can get it running on `localhost`

###### npm

```bash
git clone https://github.com/moeyyad/next-lesson-wizard.git
cd next-lesson-wizard
npm install
npm run dev
```

## Lesson Design

Lessons are broken down into short and easily digestible "pages" of content that learners will step through one at a time.
Pages can have anything inside of them: text, images, videos, interactive React components, etc.

## Creating New Lessons

There are only two components in this project that you need to familiarize yourself with in order to 
create new lessons: `<LessonWizard>` and `<LessonPage>`

### LessonWizard

LessonWizard is the main component that is used to render the lesson. It takes in a series of LessonPage components
as children and renders them in order as learners step through the lesson. Besides children, LessonWizard only 
takes a single prop which is the title of the lesson.

Note that while LessonWizard is a client component, its children (the LessonPage components) 
are intended to be server components for better performance.

An example of how to use LessonWizard is shown below.

```tsx
// page.tsx

import LessonWizard from "@/components/LessonWizard";

import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";

export default function ExampleLesson() {
  return (
    <LessonWizard title="Example Lesson">
      <PageOne />
      <PageTwo />
      <PageThree />
    </LessonWizard>
  );
}
```

### LessonPage

LessonPage is a component that is used to wrap a single page of lesson content. The main purpose of this component is to 
provide consistent styling for all lesson pages. The styling of lesson pages is handled within `globals.css` 

An example of how to use LessonPage is shown below.

```tsx
// PageOne.tsx

import LessonPage from "@/components/LessonPage";

export default function PageOne() {
  return (
    <LessonPage>
      <h1>Example Page</h1>
      <h2>A Note On Style</h2>
      <p>The heading, subheading, and text inside of LessonPage is already styled for you.</p>
      <p>You can change the style as you like in globals.css</p>
    </LessonPage>
  );
}
```

## Quiz Component

A third Component `<LessonQuiz>` is also provided. It is only intended to be used inside of `<LessonPage>` components.

LessonQuiz uses the React Context API to communicate with LessonWizard so that LessonWizard knows if a quiz
is on the current lesson page, if it has been answered, and if the answer was correct or not. This allows LessonWizard
to handle UI updates and provides an easy way to implement features such as blocking progress if an
unanswered questions remains on the page.

An example of how to use LessonQuiz is shown below.

```tsx
import LessonPage from "@/components/LessonPage";
import LessonQuiz from "@/components/LessonQuiz";

export default function PageTwo() {
  return (
    <LessonPage>
      <LessonQuiz
        question="Example Question"
        options={[
          { id: 1, text: "Option 1" },
          { id: 2, text: "Option 2" }, 
          { id: 3, text: "Option 3" },
          { id: 4, text: "Option 4" },
        ]}
        correctOptionId={3}
        explanation="When in doubt, choose the third option."
      />
    </LessonPage>
  );
}
```

