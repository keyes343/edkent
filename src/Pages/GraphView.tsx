import * as React from 'react';
import { useState, useEffect } from 'react';
import { t,s } from './index';

export interface GraphViewProps {
    
}
 
const GraphView: React.FC<GraphViewProps> = () => {

    const years = [ 2000,2001,2002,2003,2004,2005,2006,2007,2008,2009 ];

    const weight_ramesh = [ 45,50,55,74,79,68,82,80,64,62 ];
    const weight_suresh = [ 105,98,85,72,78,70,63,68,70,65 ];

    const cell_fontSize = '1.4rem';
    const cell_margin = '0.3rem 0';

    const [ramesh, setRamesh] = useState(weight_ramesh);
    const [suresh, setSuresh] = useState(weight_suresh);

    const alter = (btn:'Add 5'|'Remove 5', name:'ramesh'|'suresh', indx:number ) => {
        // console.log({
        //     btn, name, indx
        // })

        if(btn==='Add 5'){
            console.log('adding');
            if(name === 'ramesh'){
                console.log('ramesh');
                let toAlter = [...ramesh];
                const added = toAlter[indx] + 5;
                toAlter.splice(indx,1, added);
                console.log({toAlter})
                setRamesh(toAlter);
            }else{
                console.log('suresh');
                let toAlter = [...suresh];
                const added = toAlter[indx] + 5;
                toAlter.splice(indx,1, added);
                setSuresh(toAlter);
            }
        }else{
            console.log('removing');
            if(name === 'ramesh'){
                console.log('ramesh');
                let toAlter = [...ramesh];
                const removed = toAlter[indx] - 5;
                if(removed>0){
                    toAlter.splice(indx,1, removed);
                    setRamesh(toAlter);
                }
            }else{
                console.log('suresh');
                let toAlter = [...suresh];
                const removed = toAlter[indx] - 5;
                if(removed>0){
                    toAlter.splice(indx,1, removed);
                    setSuresh(toAlter);
                }
            }
        }
    }

    return ( 
        <s.Flex red  >

            <s.Grid col='1fr 3fr' wd='900px' >
                <div>
                    <s.Box size='2rem' font='var(--muli)' >
                        Years
                    </s.Box>
                </div>
                <div>
                    <s.Flex size='2rem' font='var(--muli)' >
                        <s.Box pd='0 2rem' >
                            Weight
                        </s.Box>

                        <s.FlexR mrgn='1rem 0 0' >
                            {
                                ['Ramesh', 'Suresh'].map((name,i)=>{
                                    return(
                                        <s.Box key={i} mrgn='0.3rem' >
                                            {name}
                                        </s.Box>
                                    )
                                })
                            }
                        </s.FlexR>
                    </s.Flex>
                </div>
                <div>
                    <s.Flex font='var(--muli)' >
                        {
                            years.map((year,i)=>{
                                return(
                                    <s.Box key={i} mrgn={cell_margin} >
                                        {year}
                                    </s.Box>
                                )
                            })
                        }
                    </s.Flex>
                </div>

                {/* multiple people in this div */}
                <div>
                    <s.FlexR font='var(--muli)' >
                        {
                            [ramesh, suresh].map((name,i)=>{
                                return(
                                    <s.Flex key={i} >
                                        <s.FlexC >
                                            {
                                                name.map((weight,j)=>{
                                                    return(
                                                        <s.FlexR ai='center' key={`${i} ${j}`} mrgn={cell_margin} >
                                                            <s.Flex wd='auto' ht='100%' mrgn='0 0.5rem'>
                                                                {weight}
                                                            </s.Flex>

                                                            {/* BUTTONS */}
                                                            <s.Flex flexdir='row' flex='1'>
                                                                {
                                                                    ['Add 5', 'Remove 5'].map((btn,k)=>{
                                                                        return(
                                                                            <s.FlexR key={`${i} ${j} ${k}`} 
                                                                            wd='auto' 
                                                                            pd='0.1rem 0.3rem' 
                                                                            br='10px' 
                                                                            mrgn='0 0.3rem' 
                                                                            bd='1px solid rgba(0,0,0,0.4)'
                                                                            cursor='pointer'

                                                                            onMouseEnter={(e)=>{
                                                                                e.currentTarget.style.backgroundColor = 'Moccasin';
                                                                            }}

                                                                            onMouseLeave={(e)=>{
                                                                                e.currentTarget.style.backgroundColor = '';
                                                                            }}
                                                                            
                                                                            onClick={()=> alter(btn as any, i===0?'ramesh':'suresh', j ) }
                                                                            >
                                                                                {btn}
                                                                            </s.FlexR>
                                                                        )
                                                                    })
                                                                }
                                                            </s.Flex>

                                                        </s.FlexR>
                                                    )
                                                })
                                            }
                                        </s.FlexC>
                                    </s.Flex>
                                )
                            })
                        }
                    </s.FlexR>
                </div>
            </s.Grid>

        </s.Flex>
     );
}
 
export default GraphView;