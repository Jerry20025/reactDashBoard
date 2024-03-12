import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Textarea,
  } from '@chakra-ui/react'
import {Button, Flex,Box,Stack,Icon,Text,HStack,Input,Card } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
const ContactCard = () => {
  return (
    <Card p={'6'} borderRadius={'1rem'} flexGrow={'1'}>
            <Stack spacing={'2'}>
                <Text>
                    You will receive response within 24 hours
                    of time of submit.
                </Text>
                <HStack p={'2'} flexDir={{
                    base:'column',
                    md:'row'
                }}>
                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input type='text' placeholder='Enter First Name...' />
                        
                    </FormControl>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input type='text' placeholder='Enter Last Name...' />
                        
                    </FormControl>
                </HStack>
                <FormControl p={'2'}>
                        <FormLabel>Email</FormLabel>
                        <Input type='email' placeholder='Enter Email...' />
                </FormControl>
                <FormControl p={'2'}>
                        <FormLabel>Message</FormLabel>
                        <Textarea placeholder='Enter Message...'></Textarea>
                </FormControl>
                <Checkbox p={'2'}>
                    <Text fontSize={'xs'}>
                    I agree with
                    <Box as='span' color={'p.purple'}> Terms & Conditions.</Box>
                    </Text>
                </Checkbox>
                <Stack>
                    <Button fontSize={{
                        base:'18px',
                        xl:'22px'
                    }}>Send a Message</Button>
                    <Button fontSize={{
                        base:'18px',
                        xl:'22px'
                    }}backgroundColor='black.60'>Book a Meeting</Button>
                </Stack>
            </Stack>
        </Card>
  )
}

export default ContactCard
