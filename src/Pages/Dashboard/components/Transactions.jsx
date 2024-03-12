import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Text ,Stack, Flex,Grid,Icon,Button} from '@chakra-ui/react'
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaBtc } from "react-icons/fa";
const Transactions = () => {
    const transactions=[
        {
            id:"1",
            icon:FaIndianRupeeSign,
            text:"INR Deposite",
            amount:"+ Rs. 81,123.10",
            timestamp:"2024-03-09 7:06 PM"
        },
        {
            id:"2",
            icon:FaBtc,
            text:"BTC Sell",
            amount:"- Rs. 12.48513391 BTC",
            timestamp:"2024-03-09 7:06 PM"
        },
        {   id:"3",
            icon:FaIndianRupeeSign,
            text:"INR Deposite",
            amount:"+ Rs. 81,123.10",
            timestamp:"2024-03-09 7:06 PM"
        },   
    ]
  return (
    <CustomCard h={'full'}>
      <Text mb={'6'} fontSize={'18px'} color={'black.80'}>
        Recent Transaction
      </Text>
      <Stack spacing={'8'}>
        {transactions.map((transactions)=>(
            <Flex key={transactions.id} gap={'4'}>
                <Grid boxSize={'10'} borderRadius={'full'} bg={'black.5'} placeItems={'center'} >
                    <Icon as={transactions.icon}/>
                </Grid>
                <Flex justify={'space-between'} w={'full'}>
                    <Stack spacing={'0'}>
                        <Text textStyle={'h6'} color={'black.80'}>{transactions.text}</Text> 
                        <Text textStyle={'h6'} color={'black.80'}>{transactions.timestamp}</Text> 
                    </Stack> 
                    <Text textStyle={'h6'} color={'black.80'}>{transactions.amount}</Text>   
                </Flex>
            </Flex>

        ))}
      </Stack>
      <Button width={'full'} bg={'black.80'} mt={'6'}>View All</Button>
    </CustomCard>
  )
}

export default Transactions
