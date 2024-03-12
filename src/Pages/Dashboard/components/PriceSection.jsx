import React from 'react'
import { HStack,Stack ,Icon,Text,Tag,Button, Flex,Image} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {CustomCard} from '../../../chakra/CustomCard'
import { MdArrowOutward } from "react-icons/md";
import { BiSolidPlusCircle } from "react-icons/bi";
import { RxMinusCircled } from "react-icons/rx";
const PriceSection = () => {
    const timestamps=["7:15 PM","7:55 PM","8:55 PM","9:55 PM","10:55 PM"]
  return (
    <CustomCard h={'full'}>
        <Flex justifyContent={'space-between'} align={'start'}>
        <Stack >
            <HStack color={'black.80'} >
                <Text fontSize={'18px'}>Current Price</Text>
            </HStack>
            <HStack  spacing={'4'}
            align={{
            base:'flex-start',
            xl:'center'
            }}>
                <HStack >
                    <Text fontSize={{
                    base:'18px',
                    xl:'22px'
                    }} fontWeight={'medium'} >Rs. 26,670.25</Text>
                </HStack>
                <HStack>
                    <Icon as={MdArrowOutward}/>
                    <Text fontSize={'sm'} fontWeight={'bold'} color={'green.500'}>22%</Text>
                </HStack>
            </HStack>
        </Stack>
        <HStack spacing={'2'}>
                <Button fontWeight={'500'} fontSize={{
                base:'14px',
                xl:'18px'
                }}><Icon as={BiSolidPlusCircle}/>Buy</Button>
                <Button fontWeight={'500'} fontSize={{
                base:'14px',
                xl:'18px'
                }}><Icon as={RxMinusCircled}/>Sell</Button>
        </HStack>
        </Flex>
        <Tabs variant='soft-rounded'>
           <Flex justify={'end'} >
            <TabList bg={'black.5'}>
                {
                    ["1H","1D","1W","1M"].map((day)=>(
                        <Tab 
                        _selected={{bg:'white'}}
                         key={'days'}
                         fontSize={'sm'} 
                         p={'6px'} borderRadius={'4'} >{day}</Tab>
                    ))
                }
            </TabList>
           </Flex>
            <TabPanels>
                <TabPanel>
                <Image width={'100%'} src='/images/graph.svg' mt={'48px'}/>
                <HStack justifyContent={'space-between'}>
                    {timestamps.map((timestamps)=>(
                    <Text key={timestamps} fontSize={'sm'} color={'black.80'}>{timestamps}</Text>
                ))}
                </HStack> 
                </TabPanel>
                <TabPanel>
                <p>No API used</p>
                </TabPanel>
                <TabPanel>
                <p>No API used</p>
                </TabPanel>
                <TabPanel>
                <p>No API used</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
        
    </CustomCard>
  )
}

export default PriceSection
