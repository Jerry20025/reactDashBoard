import { Card ,HStack,Button,Tag,Flex,Icon} from '@chakra-ui/react'
import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { FaFileDownload } from "react-icons/fa";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TransactionTable from './components/TransactionTable';
import { Input,InputGroup ,InputLeftElement} from '@chakra-ui/react'
import { FaSearch } from "react-icons/fa";

const TransactionPage = () => {
  const tabs=[
    {
      id:1,
      name:'All',
      count:'349'
    },
    {
      id:2,
      name:'Deposite',
      count:'114'
    },
    {
      id:3,
      name:'Withdraw',
      count:'55'
    },
    {
      id:4,
      name:'Trade',
      count:'50'
    }
  ]
  
  return (
      <DashboardLayout title={'Transaction'}>
        <Flex justify={'flex-end'} mt={'6'} mb={'3'}>
          <Button leftIcon={<Icon as={FaFileDownload}/>}>Export CV</Button>
        </Flex>
        <Card borderRadius={'1rem'}>
        <Tabs h={'full'}>
          <TabList pt={'2'} px={'2'} w={'full'} justifyContent={'space-between'}>
            <HStack>
              {tabs.map(tabs=><Tab gap={'2'} key={tabs.id}>{tabs.name}<Tag background={'black.20'}>{tabs.count}</Tag></Tab>)}
            </HStack>
            <HStack mb={'2'}>
            <InputGroup >
              <InputLeftElement pointerEvents='none'>
              <Icon as={FaSearch} color='gray.300' />
              </InputLeftElement>
              <Input maxW={'400px'} type='tel' placeholder='Search...' />
            </InputGroup>
            </HStack>
          </TabList>
          
          <TabPanels>
            <TabPanel>
              <TransactionTable/>
            </TabPanel>
            <TabPanel>
              <TransactionTable/>
            </TabPanel>
            <TabPanel>
              <TransactionTable/>
            </TabPanel>
            <TabPanel>
             <TransactionTable/>
            </TabPanel> 
          </TabPanels>
       </Tabs>
        </Card>
      </DashboardLayout>
  )
}

export default TransactionPage
