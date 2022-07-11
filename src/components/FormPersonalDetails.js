function FormPersonalDetails({ nextStep, prevStep, onChange, formData }) {
  const { occupation, city, bio } = formData

  return (
    <div>
      Personal Details
      <form>
        <div>
          <label for='occupation'>Occupation</label>
          <input
            type='text'
            onChange={onChange}
            value={occupation}
            id='occupation'
          />
        </div>
        <div>
          <label for='city'>City</label>
          <input type='text' onChange={onChange} value={city} id='city' />
        </div>
        <div>
          <label for='bio'>Bio</label>
          <input type='text' onChange={onChange} value={bio} id='bio' />
        </div>
      </form>
      <button onClick={() => prevStep()}>Previous</button>
      <button onClick={() => nextStep()}>Next</button>
    </div>
  )
}
export default FormPersonalDetails
