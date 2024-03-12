import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import PortfolioSection from './components/PortfolioSection'
import PriceSection from './components/PriceSection'
import { Grid, GridItem } from '@chakra-ui/react'
import Transactions from './components/Transactions'
import InfoCard from './components/InfoCard'
const Dashboard = () => {
  return (
    <DashboardLayout title='Dashboard'>
       <Grid
       gridTemplateColumns={{
        base:'repeat(1,1fr)',
        md:'repeat(1,1fr)',
        xl:'repeat(2,1fr)'
       }} gap={{
        base:'4',
        xl:'6'
       }}>
          <GridItem colSpan={{
            base:'1',
            xl:'2'
          }}>
            <PortfolioSection/>
          </GridItem>
          <GridItem colSpan={'1'}>
            <PriceSection/>
          </GridItem>
          <GridItem colSpan={'1'} >
          <Transactions/>
          </GridItem>
          <GridItem colSpan={'1'}>
            <InfoCard ImgUrl='/images/dot_bg.svg'
            text='Learn more about Loans - Keep your Bitcoin, access its value without selling it.'
            tagText='Loan'
            inverted={true}
            />
          </GridItem>
          <GridItem colSpan={'1'}>
            <InfoCard ImgUrl='/images/grid_bg.svg'
            text='Learn more about our real estate, mortage, and corporate account services.'
            tagText='Contact'
            inverted={false}
            />
          </GridItem>
      </Grid>
    </DashboardLayout>
  )
}

export default Dashboard
