function ObjectExample() {
  const student = {
    name: 'Student',
    total: 253,
  }

  return (
    <section>
      <h2>{student.name}</h2>
      <p>Total marks: {student.total}</p>
    </section>
  )
}

export default ObjectExample