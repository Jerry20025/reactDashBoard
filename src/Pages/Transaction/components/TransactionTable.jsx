import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Card,
  } from '@chakra-ui/react'
import { Stack,Text,Tag } from '@chakra-ui/react'
import DashboardLayout from '../../../components/DashboardLayout'
const TransactionTable = () => {
    const tableData = [
        {
          id: "HD82NA2H",
          date: "2023-06-20",
          time: "07:00 AM",
          type: {
            name: "INR Deposit",
            tag: "E-Transfer",
          },
          amount: "+₹81,123",
          status: "pending",
        },
        {
          id: "HD82NA4H",
          date: "2023-06-18",
          time: "07:00 AM",
          type: {
            name: "INR Widthdraw",
            tag: "Wire Transfer",
          },
          amount: "-₹55,123",
          status: "processing",
        },
        {
          id: "HD82NA5H",
          date: "2023-06-18",
          time: "07:00 AM",
          type: {
            name: "Buy",
            tag: "BTC",
          },
          amount: "12.0554484 BTC",
          status: "cancelled",
        },
        {
          id: "HD82NA6H",
          date: "2023-06-18",
          time: "07:00 AM",
          type: {
            name: "Sell",
            tag: "BTC",
          },
          amount: "-2.0554484 BTC",
          status: "completed",
        },
        {
          id: "HD82NA7H",
          date: "2023-06-20",
          time: "07:00 AM",
          type: {
            name: "BTC Deposit",
          },
          amount: "+15.5000000",
          status: "pending",
        },
        {
          id: "HD82NA8H",
          date: "2023-06-18",
          time: "07:00 AM",
          type: {
            name: "BTC Widthdraw",
          },
          amount: "-5.05555544",
          status: "completed",
        },
      ];
    
      const statusColor = {
        pending: "#797E82",
        processing: "#F5A50B",
        completed: "#059669",
        cancelled: "#DC2626",
      };
    
  return (
        <Card>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Date & Time</Th>
                        <Th>Type</Th>
                        <Th>Amount</Th>
                        <Th>Status</Th>
                    </Tr>
                    </Thead>
                    <Tbody color={'p.black'}>
                        {tableData.map(data=>(
                            <Tr key={data.id}>
                                <Td fontSize={'sm'} fontWeight={'medium'}>
                                    {data.id}
                                </Td>
                                <Td>
                                    <Stack>
                                        <Text fontSize={'sm'} fontWeight={'medium'}>{data.date}</Text>
                                        <Text fontSize={'sm'} fontWeight={'medium'}>{data.time}</Text>
                                    </Stack>
                                </Td>
                                <Td>
                                    <Stack>
                                        <Text fontSize={'sm'} fontWeight={'medium'}>{data.type.name}</Text>
                                        <Text fontSize={'sm'} fontWeight={'medium'}>{data.type?.tag}</Text>
                                    </Stack>
                                </Td>
                                <Td fontSize={'sm'} fontWeight={'medium'}>
                                    {data.amount}
                                </Td>
                                <Td>
                                    <Tag background={statusColor[data.status]} color={'white'} border={'full'}>{data.status}</Tag>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Card>

  )
}

export default TransactionTable
