function Confirm({ prevStep, nextStep }) {
  return (
    <div>
      Confirm
      <br />
      <button onClick={() => prevStep()}>Previous</button>
      <button onClick={() => nextStep()}>Next</button>
    </div>
  )
}
export default Confirm
