/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { c_desk } from './index';

import {createBrowserHistory} from 'history';
import { Route, BrowserRouter } from 'react-router-dom';
// import ReactGA from 'react-ga';

export const history = createBrowserHistory();

export interface RouterProps {
    
}
 
const Router: React.FC<RouterProps> = () => {

    // const [ device, set_device ] = React.useState<false|'mobile'|'desktop'>(false);
    // React.useEffect(() => {
        
    //     // const width:string = window.innerWidth.toString();
    //     if(device === false){
    //         if (window.innerWidth<700){
    //             set_device('mobile')
    //         } else set_device('desktop');
    //     }
    // },[device])

    return ( 
        <c_desk.ContextDesktop />
     );
}
 
export default Router;
