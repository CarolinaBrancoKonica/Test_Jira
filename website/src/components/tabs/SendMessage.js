import React from 'react';
import CustomButton from '../elements/CustomButton';
import InputBox from '../elements/InputBox';

const SendMessage = () => {
    return (
        <div className='p-4 flex justify-center'>
            <div className='flex flex-col gap-4 px-2 items-start w-full md:w-2/4 justify-center'>
              <InputBox
                value='Name'
                placeValue='Carolina'
              />
              <InputBox
                value='Email'
                placeValue='carolina.branco@konicaminolta.pt'
              />
              <InputBox
                value='Message'
                placeValue='Hello'
              />

              <div>
                <CustomButton
                    children='Send Message'
                />
              </div>
            </div>
        </div>
    );
};

export default SendMessage;
