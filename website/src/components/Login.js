import React from 'react';
import {Link} from 'react-router-dom';
import CustomButton from './elements/CustomButton';
import InputBox from './elements/InputBox';

const Login = () => {
    return (
        <div className='w-full h-screen bg-slate-400 flex items-center justify-center'>
            <Link to='/' className='absolute text-white uppercase left-1 top-1'>home</Link>

            <div className='w-2/4 text-center uppercase'>
              <InputBox
                value='Email'
                placeValue='carolina.branco@konicaminolta.pt'
              />
              <InputBox
                value='Password'
                placeValue='Password'
                type='password'

              />

              <CustomButton
                children='Login'
                btnPadding='m-4'
              />
            </div>
        </div>
    );
};

export default Login;
