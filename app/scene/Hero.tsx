'use client'
import Button from '@/components/Button'
import { useEffect, useState } from "react";

import React, { ChangeEvent } from 'react'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import { motion } from 'framer-motion'

export default function Hero() {

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
      });
      const [cursorVariant, setCursorVariant] = useState("default");
    

    useEffect(() => {
        const mouseMove = (e:any) => {
            setMousePosition({
                x:e.clientX,
                y:e.clientY
            })

        }

        window.addEventListener("mousemove" ,mouseMove)
        return () => {
            window.removeEventListener("mousemove",mouseMove)
        }
    }, [])


    const variant:any ={
        default: {
            x: mousePosition.x -16,
            y: mousePosition.y -16,
        },
        text: {
            height: 150,
            width: 150,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            backgroundColor: "rgb(244, 244, 244)",
            mixBlendMode:"difference"
        }
    }
const textEnter = () => setCursorVariant("text")
const textLeave = () => setCursorVariant("default")


  return (
    <div>
        <motion.div initial="hidden" whileInView="show" viewport={{once:false, amount:0.25}} className='flex flex-col items-center justify-center h-[88vh] px-[5%] select-none '>
            <div>
                <motion.div className='cursor' variants={variant} animate={cursorVariant}/>
                <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className='md:text-[6rem] text-[3rem] uppercase leading-[1.2]'>
                    <span className='text-gray-500'>Freelance</span> <span>Web Designer</span> <span className='text-gray-500'>&</span> <span>Software Engineering</span>
                </h1>
            </div>
            <div className='flex md:flex-row flex-col justify-between w-full pt-16'>
                <div className='w-[330px]' onMouseEnter={textEnter} onMouseLeave={textLeave}>
                    <p>FREELANCE WEB DESIGNER HARNESSING THE POWER OF DESIGN TO ACHIEVE ONLINE GOALS.</p>

                </div>
                <div className='md:w-[500px] w-[370px] flex flex-col gap-6 items-start'>
                    <p onMouseEnter={textEnter} onMouseLeave={textLeave}>I create successful digital presences for innovative startups and established businesses with cutting-edge UI/UX design and Webflow development.</p>
                    <Button
                    onClick={() => {}}      
                    label='Book a free strategy call'
                    icon={BsFillArrowRightCircleFill}
                    black                                                               
                    />

                </div>
            </div>
        </motion.div>
      
    </div>
  )
}
