function ArrayofObj() {
  const marks = [
    { subject: 'Maths', score: 85 },
    { subject: 'Science', score: 90 },
    { subject: 'English', score: 78 },
  ]

  return (
    <section>
      <h2>Marks</h2>
      <ul>
        {marks.map(({ subject, score }) => (
          <li key={subject}>
            {subject}: {score}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ArrayofObj