import { memo, useCallback, useState } from 'react'
import update from 'immutability-helper'
import * as yup from 'yup'

import  AuthForm  from '../components/AuthForm/AuthForm'

const formSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  website: yup.string().url().required()
})

const AuthPage = memo(() => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    website: ''
  })
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    website: false
  })

  const onFieldChange = useCallback((fieldName, value) => {
    setValues((prevValues) =>
      update(prevValues, {
        [fieldName]: {
          $set: value
        }
      })
    )
  }, [])

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault()
      const isFormValid = await formSchema.isValid(values, {
        abortEarly: false
      })

      if (isFormValid) {
        console.log('Form is legit')
        console.log(values)
      } else {
        formSchema
          .validate(values, { abortEarly: false })
          .catch((err) => {
            const errors = err.inner.reduce((acc, error) => {
              return {
                ...acc,
                [error.path]: true
              }
            }, {})

            setErrors((prevErrors) =>
              update(prevErrors, {
                $set: errors
              })
            )
          })
      }
    },
    [values]
  )

  return (
    <AuthForm
      values={values}
      errors={errors}
      onFieldChange={onFieldChange}
      onSubmit={onSubmit}
    />
  )
})
export default AuthPage;