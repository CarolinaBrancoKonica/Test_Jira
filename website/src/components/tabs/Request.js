import React from 'react';
import CustomButton from '../elements/CustomButton';
import InputBox from '../elements/InputBox';

const Request = () => {
    return (
        <div className='p-6 flex justify-center'>
            <div className='flex flex-col gap-4 px-2 items-start w-full md:w-2/4 justify-center text-center'>
              <InputBox
                value='Email'
                placeValue='carolina.branco@konicaminolta.pt'
              />
              
              <CustomButton
                    children='Send Message'
              />
            </div>
        </div>
    );
};

export default Request;
