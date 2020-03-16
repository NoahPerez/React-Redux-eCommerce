import React from 'react';

import Directory from '../../components/directory/directory.component';



import { HomePageContainer } from './homepage.styles' // styled component // it will give a unique string 

const HomePage = () => (
    <HomePageContainer>
        <Directory />
    </HomePageContainer>
)

export default HomePage;