import styled, { css } from 'styled-components';
import {FcSpeaker} from 'react-icons/fc';
import {IoMdHeadset,IoMdCart,IoMdBatteryCharging} from 'react-icons/io';
import {MdLocationOn} from 'react-icons/md';
import {FaPlug} from 'react-icons/fa';
import {MdUsb,MdDevicesOther} from 'react-icons/md';
import {ImMobile2} from 'react-icons/im';
import {properties} from './GridAndBox';


export const Mobile = styled(ImMobile2)` ${({cl,size }:properties)=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;
export const Others = styled(MdDevicesOther)` ${({cl,size }:properties)=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;
export const Cart = styled(IoMdCart)` ${({cl,size }:properties)=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;
export const Cable = styled(MdUsb)` ${({cl,size }:properties)=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;
export const Charger = styled(FaPlug)` ${({cl,size }:properties)=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;
export const Speaker = styled(FcSpeaker)` ${({cl,size }:properties)=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;
export const Headset = styled(IoMdHeadset)` ${({cl,size }:properties)=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;
export const Gps = styled(MdLocationOn)` ${({cl,size }:properties)=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;
export const Battery = styled(IoMdBatteryCharging)` ${({cl,size }:properties)=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;
