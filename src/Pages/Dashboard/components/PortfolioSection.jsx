import { HStack,Stack ,Icon,Text,Tag,Button} from '@chakra-ui/react'
import React from 'react'
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
const PortfolioSection = () => {
  return (
    <HStack bg={"white"} borderRadius={"xl"} p='4' justifyContent={{
      base:'space-evenly',
      xl:'space-between'
    }}
    align={{
      base:'flex-start',
      xl:'center'
    }}
    flexDir={{
      base:'column',
      xl:'row'
    }}
    >
      <Stack>
        <HStack color={'black.80'}>
          <Text fontSize={'18px'}>Total Portfolio Value</Text>
          <Icon as={IoIosInformationCircleOutline}/>
        </HStack>
        <Text fontSize={{
              base:'18px',
              xl:'22px'
            }}fontWeight={'medium'}>Rs. 112,312.24</Text>
      </Stack>
      <Stack >

        <HStack color={'black.80'} >
          <Text fontSize={'18px'}>Wallet Balances</Text>
        </HStack>
        <HStack  spacing={'4'}
        align={{
          base:'flex-start',
          xl:'center'
        }}
        flexDir={{
          base:'column',
          xl:'row'
        }} >
          <HStack >
            <Text fontSize={{
              base:'18px',
              xl:'22px'
            }} fontWeight={'medium'} >22.39401000</Text><Tag color={'black.80'} backgroundColor={'black.40'} fontSize={'10px'} width={'35px'}>BTC</Tag>
          </HStack>
          <HStack>
            <Text fontSize={{
              base:'18px',
              xl:'22px'
            }} fontWeight={'medium'}>Rs. 1,300,00 <Tag color={'black.80'} backgroundColor={'black.40'} fontSize={'10px'} width={'35px'}>INR</Tag> </Text>
          </HStack>
        </HStack>
      </Stack>
        <Stack>
        <HStack spacing={'2'}>
            <Button fontWeight={'500'} fontSize={{
              base:'14px',
              xl:'18px'
            }}><Icon as={FaArrowDown}/>Deposite</Button>
            <Button fontWeight={'500'} fontSize={{
              base:'14px',
              xl:'18px'
            }}><Icon as={FaArrowUp}/>Withdraw</Button>
        </HStack>
        </Stack>
    </HStack>
  )
}

export default PortfolioSection
