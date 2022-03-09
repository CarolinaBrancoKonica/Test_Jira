import React, {useState} from 'react';
import CustomButton from './elements/CustomButton';
import Header from './Header';
import Request from './tabs/Request';
import Reservation from './tabs/Reservation';
import SendMessage from'./tabs/SendMessage';

const Information = () => {

    const [tab, setTab] = useState('sendMessage');

    return (
        <div>
            <Header/>
            <div className='w-full min-h-screen bg-info-bg bg-cover bg-center text-white uppercase p-8 text-center'>
                <div className='children:m-4 mt-20'>
                
                <CustomButton
                        children='Send Message'
                        onClickItem={() =>setTab('sendMessage')}
                />
                <CustomButton
                        children='Request Info'
                        onClickItem={() =>setTab('requestInfo')}
                />
                <CustomButton
                        children='Make Reservation'
                        onClickItem={() =>setTab('makeRes')}
                />
                </div>

                {tab === 'sendMessage' && <SendMessage/>}
                {tab === 'requestInfo' && <Request/>}
                {tab === 'makeRes' && <Reservation/>}
            </div>
        </div>
    );
};

export default Information;
