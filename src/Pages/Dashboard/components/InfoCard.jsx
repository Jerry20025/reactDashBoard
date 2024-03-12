import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { HStack,Stack ,Icon,Text,Tag,Button, Flex,Image} from '@chakra-ui/react'

const InfoCard = ({ImgUrl,text,tagText,inverted}) => {
  return (
    <CustomCard  bgImage={ImgUrl} bgSize={'cover'}bgRepeat={'no-repeat'}
    background={inverted?'white':'p.purple'}
    >
      <Tag bg={
        inverted ? 'p.purple':'white'
      } color={
        inverted?'white':'p.purple'
      } borderRadius={'full'}>{tagText}</Tag>
      <Text mt={'4'} fontWeight={'500'} textStyle={'h5'}
      color={inverted?'black.80':'white'}>{text}</Text>
    </CustomCard>
  )
}

export default InfoCard
