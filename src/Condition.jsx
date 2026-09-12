function Condition({ passed = true }) {
  return (
    <section>
      <h2>Result</h2>
      <p>{passed ? 'Passed' : 'Needs improvement'}</p>
    </section>
  )
}

export default Condition