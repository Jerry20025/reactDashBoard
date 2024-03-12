import React from 'react'
import Sidenav from './Sidenav'
import Topnav from './Topnav'
import Sidedrawer from './Sidedrawer'
import './DashboardLayout.css'
import { Flex,Box, Container, useDisclosure, calc } from '@chakra-ui/react'
const DashboardLayout = ({title, children}) => {
    const {isOpen,onClose,onOpen}=useDisclosure();
    return (
    <div>
      <Flex>
       <Box
        display={{
            base:"none",
            md:'none',
            lg:"flex"
          }} >
            <Sidenav/>
       </Box>
        <Sidedrawer isOpen={isOpen} onClose={onClose}/>
        <Box flexGrow={'1'}>
          <Topnav title={title} onOpen={onOpen}/>
          <Container className='scrolling' maxW={'70rem'} px={'32px'} overflowX={'hidden'} overflowY={'auto'}  h="calc(100vh - 88px)" mt={'6'}
          scrollBehavior={'smooth'}
          >{children}</Container>
        </Box>
      </Flex>
    </div>
  )
}

export default DashboardLayout
