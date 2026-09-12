function Filter() {
  const marks = [45, 72, 88, 39, 94]
  const passingMarks = marks.filter((mark) => mark >= 50)

  return (
    <section>
      <h2>Passing marks</h2>
      <p>{passingMarks.join(', ')}</p>
    </section>
  )
}

export default Filter