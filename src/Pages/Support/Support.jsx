import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { Stack } from '@chakra-ui/react'
import SupportCard from './components/SupportCard'
import ContactCard from './components/ContactCard'
import { IoIosMail } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import InfoCard from './components/InfoCard'

const Support = () => {
  return (
    <DashboardLayout title="Support">
      <Stack spacing={'2rem'}>
        <SupportCard leftcomponent={<ContactCard/>} title={'Contact Us'} 
        text={' Have a question or just want to know more? Feel free to reach out to us.'}
        icon={IoIosMail}/>
        <SupportCard  leftcomponent={<InfoCard ImgUrl='/images/grid_bg.svg'
              text='Learn more about our real estate, mortage, and corporate account services.'
              tagText='Contact'
              inverted={false}/>} title={'Live Chat'} 
        text={'Don`t have time to wait for the answer? Chat with us now'}
        icon={TiMessages}/>
      </Stack>
    </DashboardLayout>
  )
}

export default Support
