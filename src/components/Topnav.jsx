import { Icon,Heading,Container ,Menu,MenuButton,MenuList,MenuItem, HStack, Box} from '@chakra-ui/react'
import React from 'react'
import { FaBars } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
const Topnav = ({title,onOpen}) => {
  return (
    <Box px={'4'} bg={'white'}>
        <HStack
        justify={'space-between'}
        px={'32px'}
        mx={'auto'}
        maxW={'70rem'}
        h={'16'}
        >
    <Icon as={FaBars} onClick={onOpen}
    display={{
        base:"block",
        lg:"none"
    }}
    />
     <Heading fontSize={'28px'} fontWeight={'700'} justifyContent={'flex-end'}>{title} </Heading>
        <Menu>
            <MenuButton>
               <Icon as={FaRegCircleUser} fontSize={'28px'}/>
            </MenuButton>
            <MenuList>
                <MenuItem>Logout</MenuItem>
                <MenuItem>Support</MenuItem>
            </MenuList>
        </Menu>
   
    </HStack>
    </Box>
  )
}

export default Topnav
