import styled, { css } from 'styled-components';
import {properties} from './GridAndBox';

// yellow button color ffde59

//LinkC = Link Custom
export const LinkC = styled.a`    
    ${({cl,size}:properties)=>css`
    cursor:pointer;
    color: ${cl || 'inherit'}; display:inline-block;
    font-size: ${size || ''};
    text-decoration: none;
`}
`;

//LinkD = Link Default
export const LinkD = styled.a`    
    ${({cl,size}:properties)=>css`
    cursor:pointer;
    color: ${cl || 'inherit'};
    font-size: ${size || ''};
`}
`;

export const Button = styled.button`    
    ${({cl,size, ht, wd,pd,bd,mrgn,bgcl}:properties)=>css`
    cursor:url('/cursor/blue cursor.cur'), auto;    border: none;
    color: ${cl || ''};                     outline: none; 
    font-size: ${size || '1.1rem'};         text-align: center;
    width: ${wd || 'auto'};                 height: ${ht || 'auto'};
    margin: ${mrgn||'0'};  padding: ${pd || '0.7rem 0.5rem'}; border: ${bd || ''};
    background-color: ${bgcl||'#ffde59'} ;
    &:active{border-style: none;}
    &:hover{
        background-color: black; color: white;
    }
`}
`;
export const ButtonMenu = styled.button`    
    ${({cl,size, ht, wd,pd,mrgn, bgcl}:properties)=>css`
    cursor:pointer; border: none; outline: none; 
    font-size: ${size || '0.9rem'};
    text-align: left;
    width: ${wd || '100%'};             height: ${ht || 'auto'};
    margin: ${mrgn||'0'}; padding: ${pd || '0.7rem 0.5rem'}; 
    background-color: ${bgcl||''}; color: ${cl || ''};
    &:active{border-style: none;}
    /* &:hover{
        background-color: white; color: black;
    } */
`}
`;
export const ButtonThumbnail = styled.button`    
    ${({cl,size, ht, wd,pd,bd,mrgn,bgcl}:properties)=>css`
    cursor:url('/cursor/blue cursor.cur'), auto;    border: none;
    color: ${cl || ''};                     outline: none; 
    font-size: ${size || '1.1rem'};         
    width: ${wd || '100%'};                 height: ${ht || '100%'};
    margin: ${mrgn||'0'};  padding: ${pd || '0.7rem 0.5rem'}; border: ${bd || ''};
    background-color: ${bgcl||'transparent'} ;
    &:active{border-style: none;}
    }
`}
`;

export const Span = styled.span`    
    ${({size,lh,wght,td,bgcl,cl,font,cursor}:properties)=>css`
    font-size: ${size || 'inherit'}; color: ${ cl || 'inherit'};
    line-height: ${lh || 'inherit'};
    font-family: ${font||  'inherit'};
    font-weight: ${wght || 'inherit'};
    text-decoration: ${td || 'inherit'};
    background-color: ${bgcl || 'inherit'};
    cursor: ${cursor || ''};
`}
`;
export const SpanHead = styled.span`    
    ${({size,lh,wght,td}:properties)=>css`
    font-size: ${size || '1rem'}; 
    line-height: ${lh || ''};
    font-weight: ${wght || '800'};
    text-decoration: ${td || ''};
`}
`;