import React from 'react';

const InputBox = ({type, value, palceValue}) => {
    return (
        <div className='w-full'>
            <label className='text-white'>{value}</label>
            <input type={type} className='w-full p-4 text-slate-100 outline-none border-2 bg-transparent' placeholder={palceValue}/>
        </div>
    );
};

export default InputBox;
