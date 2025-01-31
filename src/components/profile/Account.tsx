import React from 'react'
import InputField from '../ui/Input'

const Account = () => {
  return (
    <div>Account

<InputField
          label="First Name"
          type="text"
          name="first_name"
          value={""}
          onChange={() => console.log('hello')}
          placeholder="Usman"
        />
    </div>
  )
}

export default Account