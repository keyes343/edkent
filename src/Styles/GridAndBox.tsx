import styled, { css } from 'styled-components';

export const Div = styled.div`
width: 100%; height: 100%;
position: relative;
margin: auto;
border: 2px solid red;
`;

//-------------------------------------- Box

export type properties = {
    lh?:string,wd?:string,maxwd?:string,minwd?:string,ht?:string,pos?:string,mrgn?:string,bgcl?:string,bgcl2?:string,zindx?:string,
    pd?:string,top?:string,left?:string,right?:string,bottom?:string,br?:string,
    size?:string;cursor?:string, shadow?:string, wght?:string, ls?:string,va?:string,
    minht?:string,maxht?:string,cl?:string,bd?:string, flow?:string, dsply?:string,accht?:string,pdli?:string, transform?:string, transition?:string, 
    flex?:string, td?:string, font?:string, opacity?:string,  gc?:string,gr?:string,
    bdtop?:string,bdbottom?:string,bdright?:string,bdleft?:string, txt?:string, scrollht?:string, scrollwd?:string, bgimg?:string,

    sizee?:string, overflowY?:string,overflowX?:string,

    phfont?:string,phsize?:string,phbd?:string,blurbd?:string,focusbd?:string,phcl?:string,

    jc?:string,ai?:string,flexdir?:string,wrap?:string,

    red?:string|boolean,blue?:string|boolean,green?:string|boolean,yellow?:string|boolean,orange?:string|boolean,purple?:string|boolean;black?:string|boolean;
    cyan?:string|boolean;

    bgpos?:string,
    gap?:string,
    col?:string,
    grdar?:string,
    ac?:string,
    ji?:string,
    ws?:string,
    to?:string,
    row?:string,
    gar?:string,
    pi?:string,
    pdl?:string,
    gac?:string,
    bgsize?:string,

}



export const Box = styled.div`
${({lh,wd,maxwd,minwd,ht,pos,mrgn,bgcl,zindx,pd,top,left,right,bottom,br,size,cursor, shadow, wght, ls,va,
    minht,maxht,cl,bd, flow, dsply,accht,pdli, transform, transition, flex, td, font, opacity,  gc,gr,
    bdtop,bdbottom,bdright,bdleft, txt, scrollht, scrollwd}:properties)=>css`
    
    width: ${wd || '100%'}; height: ${ht || 'auto'};
    flex:${flex|| '0 1 auto'};
    
    min-height: ${minht || ''};         max-height: ${maxht || ''}; 
    min-width: ${minwd || ''};          max-width: ${maxwd || ''};          
    position: ${pos || 'relative'};     margin: ${mrgn||'0'}; padding: ${pd || '0'}; 
    /* border: ${bd || ''};   */
    box-shadow: ${shadow || 'none'}; 
    border-top: ${bdtop || ''}; border-bottom: ${bdbottom || ''}; border-left: ${bdleft || ''}; border-right: ${bdright || ''};
    background-color: ${bgcl || ''};   

    border: ${(props:properties)=>{
        if(props.bd){
            return props.bd;
        }else if(props.red){
            return '2px solid red';
        }else if(props.blue){
            return '2px solid blue';
        }else if(props.green){
            return '2px solid green';
        }else if(props.orange){
            return '2px solid orange';
        }else if(props.purple){
            return '2px solid purple';
        }else if(props.black){
            return '2px solid black'
        }else if(props.cyan){
            return '2px solid cyan';
        }else return '';
    }};

    
    
    z-index: ${zindx || '0'};
    top: ${top || ''};  left: ${left || ''}; right: ${right || ''}; bottom: ${bottom || ''}; 
    cursor: ${cursor || ''};            border-radius: ${br || '0'};
    overflow: ${flow||'inherit'};
    color: ${cl || 'inherit'};                 
    font-size: ${size || '1.1rem'};   
    letter-spacing: ${ls||''};
    line-height: ${lh || ''};           display: ${dsply || ''};    vertical-align: ${va||''};
    transition:  ${transition||'all .1s linear'}; text-align: ${txt || ''}; font-weight: ${wght || ''}; 
    font-family: ${font|| 'inherit'};
    text-decoration: ${td || ''};
    transform: ${transform||''};
    white-space: normal;
    opacity: ${opacity||''};
    background-image: ${props=>{
        if(props.bgimg){   
            return props.bgimg;
        }
    }};

    grid-column: ${gc || ''}; // start at the first grid column line and end at the second
    grid-row: ${gr || ''}



&.close{ max-height: '0rem'; }
&.open{ max-height: ${accht || ''}; }
ul>li { padding: ${pdli || ''};font-family: ${font|| 'inherit'}; display: list-item; list-style-position: inside; }
ol>li { padding: ${pdli || ''};font-family: ${font|| 'inherit'}; display: list-item; list-style-position: inside;}
    
&::-webkit-scrollbar-track { -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,1); background-color:  #5D7983; }
&::-webkit-scrollbar { height:${scrollht||'0.2rem'}; width: ${ scrollwd || '0.4rem'}; background-color: ; }
&::-webkit-scrollbar-thumb { background-color: #81BBCF; }
&::-webkit-scrollbar:hover { width: 1rem; background-color: red; }

`}
`;


// -------------------------------------- Flex Box
/* width: ${wd?wd :auto?'auto': '100%'}; height: ${ht?ht :auto?'auto': '100%'}; max-height: ${maxht || ''};
min-width: ${minwd || ''};           max-width: ${maxwd || ''};       */
export const Flex = styled(Box)`
${({mrgn,jc,ai,ht,wd,bd,flexdir,flex,wrap,cursor,minwd,maxwd,maxht,dsply,gc,gr,cl }:properties)=>css`
width: ${wd || '100%'}; height: ${ht || 'auto'};
color: ${ cl || 'inherit' };
display: ${dsply || 'flex'}; flex-wrap: ${wrap|| 'nowrap'}; flex:${flex|| '0 1 auto'};
border: ${bd || ''}; margin: ${mrgn||'0'}; cursor: ${cursor || ''};
flex-direction: ${flexdir || 'column'}; justify-content: ${jc || 'center'}; align-items: ${ai || 'center'};
grid-column: ${gc || ''}; // start at the first grid column line and end at the second
grid-row: ${gr || ''};

    
`}
`;

export const FlexC = styled(Flex)`
${({mrgn,jc,ai,ht,wd,bd,flexdir,flex,wrap,cursor,minwd,maxwd,maxht,dsply,size }:properties)=>css`
    display: ${dsply || 'flex'}; flex-wrap: ${wrap|| 'nowrap'}; flex:${flex|| '0 1 auto'};
    width: ${wd || '100%'}; height: ${ht || 'auto'}; max-height: ${maxht || ''};
    min-width: ${minwd || ''};           max-width: ${maxwd || ''};      
    border: ${bd || ''}; margin: ${mrgn||'0'}; cursor: ${cursor || ''};
    font-size: ${size || 'inherit'};
    flex-direction: ${flexdir || 'column'}; justify-content: ${jc || 'flex-start'}; align-items: ${ai || 'flex-start'};
    `}
`;
export const FlexR = styled(Flex)`
${({mrgn,jc,ai,ht,wd,bd,flexdir,flex,wrap,cursor,minwd,maxwd,maxht,dsply,size,cl }:properties)=>css`
    display: ${dsply || 'flex'}; flex-wrap: ${wrap|| 'nowrap'}; flex:${flex|| '0 1 auto'};
    color: ${ cl || 'inherit' };
    width: ${wd || '100%'}; height: ${ht || 'auto'}; max-height: ${maxht || ''};
    min-width: ${minwd || ''};           max-width: ${maxwd || ''};      
    border: ${bd || ''}; margin: ${mrgn||'0'}; cursor: ${cursor || ''};
    font-size: ${size || 'inherit'};
    flex-direction: ${flexdir || 'row'}; justify-content: ${jc || 'flex-start'}; align-items: ${ai || 'flex-start'};
    `}
`;

export const Image = styled(Box)`
${({bgimg,bgpos,bgsize,cursor,bd,ht,wd}:properties) => css`
    background: url("https://drive.google.com/uc?export=view&id=${bgimg}");
    background-size: ${bgsize || 'cover'}; background-position: ${bgpos || 'center'};
    cursor: ${cursor||''};
    height: ${ht || '100%'} ; width: ${wd || '100%'};
    border: ${bd || ''}; background-repeat: no-repeat;
`}
`;

export const Img = styled.img`
${({bgimg,bgpos,bgsize,cursor,bd,ht,wd,pos,top,bottom,left,right,zindx}:properties) => css`
    content:url("https://drive.google.com/uc?export=view&id=${bgimg}");
    object-fit :  ${bgsize || 'cover'};
    object-position : ${bgpos || '50% 50%'};
    display:block; position: ${pos||'absolute'};
    cursor: ${cursor||''}; z-index : ${zindx || ''};
    top: ${top || ''};  left: ${left || ''}; right: ${right || ''}; bottom: ${bottom || ''}; 
    height: ${ht || '100%'} ; width: ${wd || '100%'};
    border: ${bd || ''}; background-repeat: no-repeat;
`}
`;

// ------------------------------------- GRID
export const Grid = styled.div`
${({dsply,gap,mrgn,col,ht,wd,bgcl,grdar,bgimg,cl,pos, jc,ac,ji,ai, br, minwd,ws,to, maxht,maxwd,gc,gr, font, flow,
    row,pd,minht,gar,pi,bd,pdl,gac,size}:properties)=>css`
display: ${dsply || 'grid'};
background-color: ${bgcl || ''};
grid-gap: ${gap || ''};
margin: ${mrgn||'0'};
padding: ${pd || '0'};
padding-left: ${pdl || ''};

white-space: ${ws || 'nowrap'};
text-overflow: ${to || 'string'};

grid-template-columns: ${col || 'auto'};
grid-template-rows: ${row || ''};
grid-auto-columns: ${gac || 'auto'};
grid-auto-rows: ${gar || 'auto'};

grid-column: ${gc || ''}; // start at the first grid column line and end at the second
grid-row: ${gr || ''};

height: ${ht||'auto'}; min-height: ${minht || ''}; max-height: ${maxht || ''};
width: ${wd||'100%'}; min-width: ${minwd || ''}; max-width: ${maxwd || ''};
grid-area: ${grdar||''};
background-image: ${bgimg || 'none'};
/* color: ${cl || 'inherit'}; */
font-size: ${size || ''};
font-family: ${font || 'inherit'};
position: ${pos || 'relative'};
border-radius: ${br || ''};
border: ${bd || ''};
overflow: ${flow||'inherit'};

justify-content: ${jc || ''};
justify-items: ${ji || ''};
align-content: ${ac || ''};
align-items: ${ai || ''};
place-items: ${pi || ''};

`}
`;