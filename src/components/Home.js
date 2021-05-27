import React from 'react'
import styled from 'styled-components'

import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Existing Inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Existing Inventory"
            />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Existing Inventory"
            />
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftButtonText="Custom Order"
                rightButtonText="Existing Inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftButtonText="Order Now"
                rightButtonText="Learn More"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftButtonText="Order Now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div `
    height: 100vh;
`