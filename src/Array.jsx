function ArrayExample() {
  const subjects = ['Maths', 'Science', 'English']

  return (
    <section>
      <h2>Subjects</h2>
      <ul>
        {subjects.map((subject) => (
          <li key={subject}>{subject}</li>
        ))}
      </ul>
    </section>
  )
}

export default ArrayExample