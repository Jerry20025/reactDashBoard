import {Button, Flex,Box,Stack,Icon,Text,HStack,Input } from '@chakra-ui/react'
import React from 'react'
import { IoIosMail } from "react-icons/io";
import { Card } from '@chakra-ui/react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Textarea,
  } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
const SupportCard = ({leftcomponent,icon,title,text}) => {
  return (
    <Flex p={4} justifyContent={'space-between'}
    flexDir={{
        base:'column',
        xl:'row'
    }}>
        <Stack maxW={'24rem'}>
            <Icon as={icon} color={'p.purple'} boxSize={'12'}/>
            <Text as='h1' fontWeight={'500'} textStyle={'h1'}>{title}</Text>
            <Text fontSize={'sm'} color={'black.60'}>
               {text}
            </Text>
        </Stack>
        <Box w={'full'} maxW={'600px'}>
        {leftcomponent}
        </Box>
    </Flex>
  )
}

export default SupportCard
