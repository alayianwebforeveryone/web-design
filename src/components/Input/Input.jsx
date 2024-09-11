import React, { forwardRef } from 'react'
import { useId } from 'react'

function Input({
    label,
    type,
    className = '',

    ...props
}, ref) {
    const id = useId()
    return (
        <div className='flex flex-col  md:flex-row  justify-center gap-8'>
            {label && <label
                htmlFor={id}
                className={`md:bg-iconColor text-headColor font-bold text-left  min-w-[90px] mr-[30%] md:mr-0    pt-2 rounded-md px-2 md:text- ${className}`}
            >
                {label}
            </label>}
            <input
                id={id}
                type={type}
                className={`shadow    appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                {...props}
                ref={ref} />
        </div>
    )
}

export default forwardRef(Input)
