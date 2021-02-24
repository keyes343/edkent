/* eslint-disable react/jsx-pascal-case */
import React, { Dispatch } from 'react';
import Router from './Router';
// import { t } from './incoming';
// import axios from 'axios';

import { Homepage } from './index';

export interface ContextDesktopProps {

}

export enum act {
    sidebar='sidebar', modal='modal', expand='expand',stack_add='stack_add',stack_remove='stack_remove',stact_toggle='stact_toggle',
    select='select', hover='hover',
    login='login', userVerified='userVerified', logout='logout',
    headerTitle='headerTitle',
    toggle_quicklinks='show_quicklinks',
}

export type initialState_type = {
    drive: string,   

    sidebarOpen:boolean, sidebarContent:any, modalOpen:boolean, modalContent:any,
    show_quicklinks:boolean,
    expand:boolean|string, stack:any[], select:string, hover:string;

    //variables
    vars:{
        popup_blue:string,
    }
}

const reducer = (state: initialState_type,action:{type:act,payload?:any})=> {
    let newState = {...state};
    const {type,payload} = action;
    switch (type){
        case act.sidebar: // Sidebar
            newState.sidebarOpen = payload.open;
            newState.sidebarContent = payload && payload.content;
            break;

        case act.expand: 
            newState.expand =  payload ?? !newState.expand; break;

        case act.stack_add:
            newState.stack = [...newState.stack, payload]; break;
        case act.stack_remove:
            const indx = newState.stack.indexOf(payload);
            let temp_arr = [...newState.stack];
            temp_arr.splice(indx, 1);
            newState.stack = [...temp_arr]; break;
        case act.stact_toggle:
            if (newState.stack.includes(payload)){
                const indx = newState.stack.indexOf(payload);
                let temp_arr = [...newState.stack];
                temp_arr.splice(indx, 1);
                newState.stack = [...temp_arr];
            }else{
                newState.stack = [...newState.stack, payload];
            };break;
        case act.hover:
            if(payload){
                newState.hover = payload;
            }else{
                newState.hover = '';
            };break;

        case act.select: 
            if(newState.select === payload) {
                newState.select = ''; break;
            }else newState.select = payload; break;
        case act.modal: // Modal
            newState.modalOpen = payload ? true : false;
            newState.modalContent = payload ? payload: null;
            break;
        
        default : break;
    }
    return newState;
}


const initialState:initialState_type = {
    drive: 'https://drive.google.com/uc?id=',
    

    sidebarOpen:false, sidebarContent:null, modalOpen:false, modalContent:null,
    show_quicklinks:false,
    expand:false, stack:[],select:'', hover:'',

    // plain variables
    vars:{
        popup_blue:'linear-gradient(128deg, rgba(103,89,125,1) 0%, rgba(17,18,39,1) 100%)'
    }
};
export const c2state = React.createContext<initialState_type|null>(null);
export const c2dispatch = React.createContext<Dispatch<{ type: act; payload?: any; }>|null>(null);

const ContextDesktop: React.FC<ContextDesktopProps> = () => {
    
    const [state,dispatch] = React.useReducer(reducer,initialState);

    return ( 
        <c2state.Provider value={{...state}} >
            <c2dispatch.Provider value={dispatch} >
                <Homepage />
            </c2dispatch.Provider>
        </c2state.Provider>
     );
}

const UseState = () =>{
    const ctx = React.useContext(c2state);
    return ctx;
}
const UseDispatch = () =>{
    const ctx = React.useContext(c2dispatch);
    return ctx;
}
 
export {ContextDesktop, UseDispatch, UseState};