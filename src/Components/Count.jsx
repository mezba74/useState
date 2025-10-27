import React, { useState } from 'react';

const Count = () => {

    const [count,setCount]= useState(0)
    const handleIncrement= function(){
        setCount(count+1)
        console.log(count)
    }

    const handleDecrement=function(){
        if(count>0){
           setCount(count-1) 
        }
        
    }

    const handelReset=function(){
        setCount(0)
    }
    return (
        <div className=''>
            <h1 className='text-center text-4xl'>Count:{count}</h1>
            <div className='flex gap-10 justify-center mt-10'>
                <button onClick={handleIncrement}  className='text-4xl bg-blue-600 rounded-xl w-20 flex justify-center pb-1 cursor-pointer'>+</button>
                <button onClick={handleDecrement} className='text-4xl bg-blue-600 rounded-xl w-20 flex justify-center pb-1 cursor-pointer'>-</button>
                <button onClick={handelReset} className='text-2xl bg-blue-600 rounded-xl w-20 flex justify-center pt-1 cursor-pointer'>Reset</button>
            </div>
        </div>
    );
};

export default Count;