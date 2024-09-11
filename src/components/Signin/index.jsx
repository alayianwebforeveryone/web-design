'use client'
import React from "react";
import { useForm } from 'react-hook-form';
import Input from '../Input/Input'

const Signin = () => {

    const { register,  handleSubmit,  formState: { errors } } = useForm();
  
    const formSubmit = (data) => {
      console.log(data)
  
    }

    return (
        <div className='w-full max-w-xl mt-80 mx-auto bg-white shadow-lg  rounded px-8 pt-6 pb-8  mb-4 space-y-5'>
            <h1 className='text-3xl font-bold  text-headColor text-center mt-8 mb-12'>Login</h1>
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
                {errors.password && <p className="text-[#FFCB46">{errors.password.message}</p>}
               

               

                <button className='rounded-xl py-2 px-3  block bg-iconColor font-bold  text-headColor  md:w-[15%] mx-auto '> Submit </ button >

            </form>
        </div>
    )
}

export default Signin