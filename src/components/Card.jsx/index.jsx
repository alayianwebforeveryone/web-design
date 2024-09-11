
"use Client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

function Card({ icon, title, description, block = '' , padding =''  }) {
    return (
        <> 
        <motion.div
          whileHover={{borderType: "solid", borderWidth: '1px', borderColor: '#95DDDF' }}
        className='py-2 px-4 bg-white shadow-xl gray-300  rounded-3xl    w-[70%] '>
            <div className= {`flex flex-col md:flex-row justify-center gap-8 items-center py-8  ${block} `  }>
                 <Image src= {icon} alt = {icon} />
                <h2 className='text-2xl text-headColor font-bold'>{title}</h2>
            </div>
            <div className='my-4 text-sm font-light'>
                <p className={`text-justify  ${padding}`} >{description}</p>
            </div>

        </motion.div>


        </>
    )
}

export default Card
