import * as React from 'react';
import { useState, useEffect } from 'react';
import { s } from './index';
import CalendarView from './CalendarView';
import GraphView from './GraphView';

export interface HomepageProps {
    
}
 
const Homepage: React.FC<HomepageProps> = () => {
    return ( 
        <s.Box>
            <s.Flex >
                <CalendarView />
                <s.Box ht='1rem' />

                <GraphView />
            </s.Flex>
        </s.Box>
     );
}
 
export default Homepage;