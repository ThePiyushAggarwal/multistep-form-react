function FormUserDetails({ nextStep, onChange, formData }) {
  const { firstName, lastName, email } = formData

  return (
    <div>
      User Details
      <form>
        <div>
          <label for='firstName'>First Name</label>
          <input
            type='text'
            onChange={onChange}
            value={firstName}
            id='firstName'
          />
        </div>
        <div>
          <label for='lastName'>Last Name</label>
          <input
            type='text'
            onChange={onChange}
            value={lastName}
            id='lastName'
          />
        </div>
        <div>
          <label for='email'>Email</label>
          <input type='text' onChange={onChange} value={email} id='email' />
        </div>
      </form>
      <button onClick={() => nextStep()}>Next</button>
    </div>
  )
}
export default FormUserDetails
