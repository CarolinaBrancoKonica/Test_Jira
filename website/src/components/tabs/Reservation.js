import React from 'react';
import CustomButton from '../elements/CustomButton';
import InputBox from '../elements/InputBox';

const Reservation = () => {
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
                value='Account Number'
                placeValue='99 999 999 999'
              />
              <InputBox
                value='Phone Number'
                placeValue='123 456 789'
              />

              <div>
                <CustomButton
                    children='Make Reservation'
                />
              </div>
            </div>
        </div>
    );
};

export default Reservation;
