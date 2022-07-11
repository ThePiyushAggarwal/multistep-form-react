function Confirm({ prevStep, nextStep, formData }) {
  const { firstName, lastName, email, occupation, city, bio } = formData
  return (
    <div>
      Confirm
      <div>
        <strong>First Name</strong>
        <br />
        <p>{firstName}</p>
      </div>
      <div>
        <strong>Last Name</strong>
        <br />
        <p>{lastName}</p>
      </div>
      <div>
        <strong>Email</strong>
        <br />
        <p>{email}</p>
      </div>
      <div>
        <strong>Occupation</strong>
        <br />
        <p>{occupation}</p>
      </div>
      <div>
        <strong>City</strong>
        <br />
        <p>{city}</p>
      </div>
      <div>
        <strong>Bio</strong>
        <br />
        <p>{bio}</p>
      </div>
      <button onClick={() => prevStep()}>Confirm & Save</button>
      <button onClick={() => nextStep()}>Next</button>
    </div>
  )
}
export default Confirm
