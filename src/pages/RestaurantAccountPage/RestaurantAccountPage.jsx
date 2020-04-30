import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import RestaurantInfo from '../../components/RestaurantInfo/RestaurantInfo'
import ResNavBar from '../../components/NavBar/ResNavBar'

const RestaurantAccountPage = (props) => (
  <>
    <ResNavBar />
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={3}>
          <Image src='https://i.imgur.com/jpvc6Ee.png' />
        </Grid.Column>
        <Grid.Column width={13}>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={3}>
          <RestaurantInfo />
        </Grid.Column>
        <Grid.Column width={9}>

        </Grid.Column>
        <Grid.Column width={4}>
          <Image src='/images/wireframe/image.png' />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
)

export default RestaurantAccountPage;