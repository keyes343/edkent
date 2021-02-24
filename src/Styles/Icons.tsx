import styled, { css } from 'styled-components';
import { FaWikipediaW, FaYoutube, FaPlus, FaMinusSquare,FaAngleDown, FaAngleUp,
FaChevronLeft,FaChevronRight,FaChevronUp,FaChevronDown, FaRocketchat, FaPizzaSlice, FaPhoneAlt,FaArrowCircleLeft,FaArrowCircleRight,FaHome,FaAngleLeft
 } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { GoSearch } from 'react-icons/go';
import { IoIosMenu, IoIosPeople,IoMdClose, IoLogoWhatsapp } from 'react-icons/io';
import { BsChatSquareDotsFill, BsFillHouseDoorFill, BsArrowRight, BsArrowLeft, BsLayoutSidebarInset, 
    BsLayoutSidebarInsetReverse } from 'react-icons/bs';
import { MdAddBox, MdLibraryAdd, MdTextsms } from 'react-icons/md';
import { FiEdit3,FiCheckSquare,FiSquare, FiExternalLink } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { GoPrimitiveDot, GoTriangleDown } from 'react-icons/go';
import { AiFillSetting, AiOutlineMail, AiOutlineBulb, AiOutlineLaptop } from 'react-icons/ai';
import { HiPhotograph } from 'react-icons/hi';

import {properties} from './GridAndBox';



export const ExternalLink = styled( FiExternalLink )` ${( {cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;
export const Laptop = styled( AiOutlineLaptop )` ${( {cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;
export const Bulb = styled( AiOutlineBulb )` ${( {cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;
export const Email = styled( AiOutlineMail )` ${( {cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;
export const Callout = styled( MdTextsms )` ${( {cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;
export const Dropdown = styled( GoTriangleDown )` ${( {cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;
export const Pic = styled( HiPhotograph )` ${( {cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;
export const Settings = styled( AiFillSetting )` ${( {cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;
export const ArrowRightCircle = styled( FaArrowCircleRight )` ${( {cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;
export const ArrowLeftCircle = styled( FaArrowCircleLeft )` ${( {cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;
export const ArrowLeft = styled( BsArrowLeft )` ${( {cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;
export const ArrowRight = styled( BsArrowRight )` ${( {cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;

export const AngleRight = styled( FaChevronRight )` ${( {cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;
export const AngleLeft = styled(FaChevronLeft)`  ${({cl,size }:properties)=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;
export const AngleUp = styled(FaChevronUp)`  ${({cl,size }:properties)=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;
export const AngleDown = styled(FaChevronDown)`  ${({cl,size }:properties)=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;

// export const AngleLeft = styled( FaAngleLeft )`  ${( {cl,size} )=>css` color: ${cl || ''}; font-size: ${size || ''}; `} `;
export const Phone = styled( FaPhoneAlt )` ${( {cl,size }:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;
export const Whatsapp = styled( IoLogoWhatsapp )` ${( {cl,size }:properties)=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;
export const SidebarOpen = styled( BsLayoutSidebarInsetReverse)` ${( {cl,size }:properties)=>css` color: ${cl || ''}; font-size: ${size || ''}; `} `;
export const SidebarClosed = styled( BsLayoutSidebarInset)` ${( {cl,size }:properties)=>css` color: ${cl || ''}; font-size: ${size || ''}; `} `;

export const GoogleLogo = styled( FcGoogle)` ${( {cl,size }:properties)=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;

export const Dot = styled(GoPrimitiveDot)` ${({cl,size }:properties)=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;

export const Cross = styled(IoMdClose)`  ${({cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;

export const Checked = styled(FiCheckSquare)`  ${({cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;

export const UnChecked = styled(FiSquare)`  ${({cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;

export const Edit = styled(FiEdit3)`  ${({cl,size}:properties )=>css` color: ${cl || ''}; font-size: ${size || 'inherit'}; `} `;

export const Open = styled(MdAddBox)`  ${({cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;

export const Add = styled(MdLibraryAdd)`  ${({cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;

export const Delete = styled(RiDeleteBin6Line)`  ${({cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;

export const House = styled(BsFillHouseDoorFill)`  ${({cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;

export const Pizza = styled(FaPizzaSlice)`  ${({cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;

export const Issues = styled(BsChatSquareDotsFill)`  ${({cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;

export const Staff = styled(IoIosPeople)`  ${({cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;

export const Menu = styled(IoIosMenu)`  ${({cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;
export const Search = styled(GoSearch)`  ${({cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;
export const Home = styled(FaHome)`  ${({cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;

export const Chat = styled(FaRocketchat)`  ${({cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;


export const UpAngle = styled(FaAngleUp)`  ${({cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;

export const DownAngle = styled(FaAngleDown)`  ${({cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;

export const Wiki = styled(FaWikipediaW)`  ${({cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;

export const PlayButton = styled(FaYoutube)`  ${({cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;

export const Shrink = styled(FaMinusSquare)`  ${({cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;

export const Expand = styled(FaPlus)`  ${({cl,size}:properties )=>css` color: ${cl || 'inherit'}; font-size: ${size || 'inherit'}; `} `;