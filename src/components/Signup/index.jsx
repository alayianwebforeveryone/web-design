
'use client'
import { useForm } from 'react-hook-form'
import Input from '../Input/Input'

function Signup() {

  const form = useForm();

  const { register,  handleSubmit,  formState: { errors } } = form;

  const formSubmit = (data) => {
    console.log(data)

  }

  return (
    <div className='w-full max-w-xl mt-80 mx-auto bg-white shadow-lg  rounded px-8 pt-6 pb-8  mb-4 space-y-5'>
      <h1 className='text-3xl text-headColor font-bold mt-8 mb-12 mc text-center'>Sign Up</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        noValidate
        className='space-y-8'
      >

        <Input
          type="email"
          label='Email'
          placeholder="Enter your Email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required"
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email"
            }
          })}

        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <Input
          type="password"
          label='Password'
          placeholder="Enter your password"
          {...register("password", {
            required: {
              value: true,
              message: "password is required"
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message: "Please should include lower case, uppercase, number and character"
            }
          })}
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        <Input
          type="password"
          label='Confirm Password'
          className='w-[50%]'
          placeholder="Enter password again"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "Confirm password  is required"
            },
            validate: (value) =>
              value === password || "Passwords do not match",
          })}

        />
        {errors.confirmPassword && <p className="text-red-500" > {errors.confirmPassword.message}</p>}

        <button className='rounded-xl py-2 px-3  block bg-iconColor font-bold  text-headColor  md:w-[15%] mx-auto '> Submit </ button >

      </form>
    </div>
  )
}

export default Signup
