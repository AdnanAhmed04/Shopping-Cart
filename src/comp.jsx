import React from 'react'

import { CiStar } from "react-icons/ci";


const Comp3 = (props) => {
    let my_arr = [{
        img: '',
        title: '',
        price: '',
        contry: ''
    }]
    return (
        <div className=' w-[300px] '>
            <div className='rounded-md  w-[270px] bg-white py-2 px-3'>
                <img className=' w-[250px] h-[320px] bg-cover bg-center ' src={props.imglink} alt="Description" />
                <div className='flex justify-between m-1'>
                    <p className='font-semibold px-2'>{props.title}</p>
                    <CiStar />
                </div>


                <hr></hr>
                <p className='text-green-700 font-semibold px-2'>{props.price}</p>
                <p className='px-2'>{props.city}</p>
                <button className='bg-blue-400 px-4 rounded h-10'>Add to cart</button>

            </div>


        </div>

    )
}

export default Comp3