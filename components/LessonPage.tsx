type LessonPageProps = {
  children: React.ReactNode;
}

export default function LessonPage({ children }: LessonPageProps) {
  return (
    <div className="lesson-content">
      {children}
    </div>
  )
}