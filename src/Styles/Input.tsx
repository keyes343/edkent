import styled, { css } from 'styled-components';
import {properties} from './GridAndBox';


export const Input = styled.input<properties>`    
    ${({lh,size,wght,td,bgcl,bgcl2,cl,ht,wd,pd,mrgn, bdbottom,minwd,minht,maxwd,maxht,bd,br, font,
    phfont,phsize,phbd }:properties)=>css`
    
    font-size: ${size?size:''}; font-family: ${font||''} ;
    color: ${ cl || ''}; 
    font-weight: ${wght || ''}; 
    
    line-height: ${lh || ''}; border:${bd||''};
    border-bottom: ${bdbottom ||'none'}; border-top:none; border-left:none; border-right:none;
    border-radius: ${br ||''}; outline:none; 
    text-decoration: ${td || ''}; 
    background-color: ${bgcl||'rgba(255,255,255,0.1)'};
    
    width: ${wd||'100%'}; height: ${ht||'auto'};
    min-width: ${minwd ||''}; min-height: ${minht ||''};
    max-width: ${maxwd ||''}; max-height: ${maxht ||''};
    padding: ${pd||''}; 
    margin: ${mrgn||'0'};
    
    &:placeholder-shown{
        background-color: ${bgcl||''};
        border: ${phbd||'#d18864'};
        font-family: 'Alegreya Sans SC', sans-serif;
        &::placeholder{
            color: ${cl||''};        
            font-style: italic;
            font-size: ${size || ''};
        }
    }
    &:focus{
        /* border: 2px solid #d18864; */
        color: black;  
        background-color: ${bgcl2||'rgba(255,255,255,0.1)'};
        &::placeholder{
            color: black;        
    }
`}
`;

export const Textarea = styled.textarea`    
    ${({size,lh,wght,td,bgcl,cl,phcl,ht,wd,pd,mrgn, bd, br,font,phbd, blurbd,focusbd  }:properties)=>css`
    font-size: ${size || ''}; color: ${ cl || ''}; 
    font-family: ${font||''};
    line-height: ${lh || ''}; 
    border: ${bd||'#bdbdbd'};  
    border-radius: ${br ||''};

    font-weight: ${wght || ''};
    text-decoration: ${td || ''};
    background-color: transparent;
    width: ${wd||'100%'}; height: ${ht||'auto'};
    padding: ${pd||''}; 
    margin: ${mrgn||'0'};
    outline: none; resize:none;
    &:placeholder-shown{
        background-color: ${bgcl||''};
        border: ${blurbd||'2px solid #d18864'};
        &::placeholder{
            font-style: italic;
            color: ${phcl||'#B8B8B8'};        
        }
    }
    &:focus{
        border: ${focusbd||'2px solid #d18864'};
    }
`}
`;

