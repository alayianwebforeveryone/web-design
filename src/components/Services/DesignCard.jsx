"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const DesignCard = ({alt, src})=>{
    return(

        <motion.div
        whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 }
        }}
        className = "rounded-xl  p-6  ">
        <Image className="bg-white shadow-lg rounded-3xl" src = {src} alt = {alt} height = {500} width = {400} />
        </motion.div>
    )
}

export default DesignCard