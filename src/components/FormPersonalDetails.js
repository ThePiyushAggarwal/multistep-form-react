function FormPersonalDetails({ nextStep, prevStep }) {
  return (
    <div>
      FormPersonalDetails
      <br />
      <button onClick={() => prevStep()}>Previous</button>
      <button onClick={() => nextStep()}>Next</button>
    </div>
  )
}
export default FormPersonalDetails
