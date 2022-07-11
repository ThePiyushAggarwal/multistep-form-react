import { useState } from 'react'
import Confirm from './Confirm'
import FormPersonalDetails from './FormPersonalDetails'
import FormUserDetails from './FormUserDetails'
import Success from './Success'

function UserForm() {
  const [step, setStep] = useState(1)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: '',
  })

  const { firstName, lastName, email, occupation, city, bio } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  // Changing steps
  const nextStep = () => setStep((prevState) => prevState + 1)
  const prevStep = () => setStep((prevState) => prevState - 1)

  return (
    <>
      <div>React Multi Step Form</div>
      {/* Using switch to render the required component */}
      {/* Please look at the solution carefully */}
      {/* switch cannot be directly used INSIDE JSX */}
      {/* So, I had to convert it into a function and call it */}
      {/* There can be many other methods */}
      {(() => {
        switch (step) {
          case 1:
            return (
              <FormUserDetails
                nextStep={nextStep}
                onChange={onChange}
                firstName={firstName}
                lastName={lastName}
                email={email}
              />
            )
          case 2:
            return (
              <FormPersonalDetails
                nextStep={nextStep}
                prevStep={prevStep}
                onChange={onChange}
                occupation={occupation}
                city={city}
                bio={bio}
              />
            )
          case 3:
            return <Confirm nextStep={nextStep} prevStep={prevStep} />
          case 4:
            return <Success setStep={setStep} />
          default:
            return <FormUserDetails />
        }
      })()}
    </>
  )
}
export default UserForm
