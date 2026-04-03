# next-lesson-wizard

This is an open-source project for building interactive lessons with Next.js 16.
The goal of this project is to make it easier for anyone to create and share educational content online
in a way that is highly engaging to the learner.

![Lesson Wizard Screenshot](/public/screenshot.png)

## Lesson Design

Inspired by the design of Duolingo and Brilliant.org, lessons are broken down into short and easily digestible 
"pages" of content that learners will step through one at a time. By breaking down complex, lengthy, and intimidating topics into these smaller pieces, we can make the learning experience more approachable and engaging.

## Components

There are only three components in this project that you need to familiarize yourself with in order to 
create new lessons:

- LessonWizard
- LessonPage
- LessonQuiz

#### LessonWizard

LessonWizard is the main component that is used to render the lesson. It takes in a series of LessonPage components as children and renders them in order.

#### LessonPage

LessonPage is a component that is used to wrap a single page of content. The main purpose of this component is to provide a consistent layout and styling for all lesson pages.

#### LessonQuiz

LessonQuiz is a component that is used to render a quiz and must be used inside of a LessonPage component.

