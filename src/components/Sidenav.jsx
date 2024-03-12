import React from 'react'
import {Box, Stack,HStack, Heading,Icon,Text, background} from '@chakra-ui/react'
import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from 'react-router-dom';
function Sidenav(){
  const location=useLocation();
  const isActiveLink=(link)=>{
    return location.pathname == link;
  }
  const navLinks=[
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/"
    },
    {
      icon: GrTransaction,
      text: "Transactions",
      link: "/transaction"
    },
  
  ]
  return (
   <Stack justifyContent={'space-between'} 
   bg={'white'}
   boxShadow={{
    base:"none",
    lg:"lg"
   }}
   h="100vh"
    w={{
      base:"full",
      lg:"16rem"
    }}
    >
      <Box >
        <Heading textAlign={'center'} fontSize={'20px'} as={'h1'} pt={'3.5rem'}>
          @JERRY
        </Heading>
        <Box mt={'6'} mx={'3'}>
            {navLinks.map(nav=>
            <Link key={nav.text} to={nav.link}>
            <HStack  py={'3'} px={'4'}
            bg={isActiveLink(nav.link)?"#F3F3F7":'transparent'}
            _hover={{
              background:"#F3F3F7",
              color:'#171717',
              borderRadius:'10px'
            }}
            color={'#797E82'}
            >
              <Icon as={nav.icon}/>
              <Text fontSize={'14px'} fontWeight={'500'}>{nav.text}</Text>
            </HStack>
            </Link> 
          )}
          
        </Box>
        
      </Box>
        <Box mt={'6'} mx={'3'} mb={'6'}>
          <Link to='/support'>
          <HStack py={'3'} px={'4'} 
          bg={isActiveLink('/support')?"#F3F3F7":'transparent'}
              _hover={{
                background:"#F3F3F7",
                color:'#171717',
                borderRadius:'10px'
              }}
              color={'#797E82'}
              >
                <Icon as={BiSupport}/>
                <Text fontSize={'14px'} fontWeight={'medium'}>Support</Text>
          </HStack>
          </Link>  
        </Box>
    
   </Stack>

  )
}
export default Sidenav
