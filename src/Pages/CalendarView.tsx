import * as React from 'react';
import { useState, useEffect } from 'react';
import { s,t,e } from './index';

import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';
import './datepicker.css';
import moment from 'moment';

export interface CalendarViewProps {
    
}
 
const CalendarView: React.FC<CalendarViewProps> = () => {

    const [startDate, setStartDate] = useState<moment.Moment|null>(moment());
    const [endDate, setEndDate] = useState<moment.Moment|null>(null);
    const [focusedInput, setFocusedInput] = useState<any>('startDate');

    const [selectedFilter, setSelectedFilter] = useState('');

    const [initialVisibleMonth, setInitialVisibleMonth] = useState( moment(new Date()) );
    

    const filterNow = React.useCallback((filter:e.filters) => {
        setSelectedFilter(filter)
        const oneDay = 86400000;

        let newStartDate:moment.Moment|null = startDate;
        let newEndDate:moment.Moment|null = startDate;
        
        let today: number = Date.now(); 
        let today_m = moment().date( new Date(today).getDate() );
        
        let yesterday: number = today - oneDay; 
        let yesterday_m = moment().date( new Date (yesterday).getDate() );

        let last7days = {
            start : new Date(today - (oneDay * 7)).getTime(),
            end: today
        }

        let last14days = {
            start : new Date(today - (oneDay * 14)).getTime(),
            end: today
        }

        let date:Date,firstDay:Date,lastDay:Date, y:number,m:number;

        switch(filter) {
            case e.filters.today: 
                newStartDate = today_m;

                if(startDate){
                    if( startDate.date() !== newStartDate.date() ){
                        setStartDate(newStartDate);
                        setEndDate(null);
                    }
                }else{
                    setStartDate(newStartDate);
                    setEndDate(null);
                }
                    break;
            case e.filters.yesterday: 
                newStartDate = yesterday_m;

                if(startDate){
                    if( startDate.date() !== newStartDate.date() ){
                        setStartDate(newStartDate);
                        setEndDate(null);
                    }
                }else{
                    setStartDate(newStartDate);
                    setEndDate(null);
                }
                break;
            case e.filters.lastWeek:
            case e.filters.last7days:
                newStartDate = moment().year( new Date(last7days.start).getFullYear() )
                .month( new Date(last7days.start).getMonth() )
                .date( new Date(last7days.start).getDate() );

                newEndDate = moment().year( new Date(last7days.end).getFullYear() )
                .month( new Date(last7days.end).getMonth() )
                .date( new Date(last7days.end).getDate() );

                // START DATE
                if(startDate){
                    if( startDate.date() !== newStartDate.date() ){
                        setStartDate(newStartDate);
                    }
                }else{
                    setStartDate(newStartDate);
                }

                // END DATE
                if(endDate){
                    if( endDate.date() !== newEndDate.date() ){
                        setEndDate(newEndDate);
                    }
                }else{
                    setEndDate(newEndDate);
                }
                break;

            case e.filters.last2weeks:
                newStartDate = moment().year( new Date(last14days.start).getFullYear() )
                .month( new Date(last14days.start).getMonth() )
                .date( new Date(last14days.start).getDate() );

                newEndDate = moment().year( new Date(last14days.end).getFullYear() )
                .month( new Date(last14days.end).getMonth() )
                .date( new Date(last14days.end).getDate() );

                // START DATE
                if(startDate){
                    if( startDate.date() !== newStartDate.date() ){
                        setStartDate(newStartDate);
                    }
                }else{
                    setStartDate(newStartDate);
                }

                // END DATE
                if(endDate){
                    if( endDate.date() !== newEndDate.date() ){
                        setEndDate(newEndDate);
                    }
                }else{
                    setEndDate(newEndDate);
                }
                break;

            case e.filters.thisMonth:
                // date = new Date();
                date = new Date(); 
                y = date.getFullYear();
                m = date.getMonth();
                firstDay = new Date(y, m, 1);
                lastDay = new Date(y, m + 1, 0);

                newStartDate = moment()
                .year( new Date().getFullYear() )
                .month( new Date().getMonth() )
                .date( firstDay.getDate() );

                newEndDate = moment().year( new Date().getFullYear() )
                .month( new Date().getMonth() )
                .date( lastDay.getDate() );

                // START DATE
                if(startDate){
                    if( startDate.date() !== newStartDate.date() ){
                        setStartDate(newStartDate);
                    }
                }else{
                    setStartDate(newStartDate);
                }

                // END DATE
                if(endDate){
                    if( endDate.date() !== newEndDate.date() ){
                        setEndDate(newEndDate);
                    }
                }else{
                    setEndDate(newEndDate);
                }
                break;

            case e.filters.lastMonth:
                date = new Date( Date.now()- (oneDay*31) ); 
                y = date.getFullYear(); 
                m = date.getMonth();
                firstDay = new Date(y, m, 1);
                lastDay = new Date(y, m + 1, 0);

                // console.log({firstDay, lastDay})

                newStartDate = moment([y,m,firstDay.getDate()]);
                // .year( new Date(date).getFullYear() )
                // .month( new Date(date).getMonth() )
                // .date( firstDay.getDate() );

                newEndDate = moment([y,m,lastDay.getDate()]);
                // .year( new Date(date).getFullYear() )
                // .month( new Date(date).getMonth() )
                // .date( lastDay.getDate() );



                // START DATE
                if(startDate){
                    if( startDate.date() !== newStartDate.date() ){
                        console.log(`setting start date to = ${newStartDate}`)
                        setStartDate(newStartDate);
                    }else{
                        console.log('date already set correctly')
                    }
                }else{
                        console.log(`setting start date to = ${newStartDate}`)
                        setStartDate(newStartDate);
                }

                // END DATE
                if(endDate){
                    if( endDate.date() !== newEndDate.date() ){
                        setEndDate(newEndDate);
                    }
                }else{
                    setEndDate(newEndDate);
                }

                // CONTINUE HERE - NOW SWITCHING MONTH AUTOMATICALLY
                console.log(`should switch mount to = ${newStartDate.month()}`)
                setInitialVisibleMonth( newStartDate )
                break;

            default: break;
        }
    },[endDate, startDate])
    

    return ( 
        <s.Flex minht='50vh' >

            <s.FlexR wd='80%' >

                <s.Box flex='1' >
                    <s.FlexC>
                        {
                            [
                                e.filters.today,e.filters.yesterday,e.filters.last7days,e.filters.lastWeek,e.filters.last2weeks,e.filters.thisMonth,e.filters.lastMonth
                            ].map((filter: e.filters,i)=>{
                                return(
                                    <s.Box key={i} 
                                    bd='2px solid rgba(0,0,0,0.2)' br='10px'
                                    wd='auto' 
                                    font='var(--muli)' 
                                    size='1.2rem' 
                                    pd='0.3rem 1rem' 
                                    cursor='pointer'
                                    cl={selectedFilter === filter ? 'white' : 'rgba(0,0,0,0.9)' }
                                    mrgn='0.2rem 0'
                                    bgcl={selectedFilter === filter? 'midnightblue':''}

                                    onClick={(e)=>{
                                        filterNow(filter); 
                                        if(selectedFilter !== filter) {
                                            setSelectedFilter(filter)
                                        }
                                    }}
                                    
                                    onMouseEnter={(e)=>{
                                        e.currentTarget.style.background = 'maroon';
                                        e.currentTarget.style.color = 'white';
                                    }}
                                    onMouseLeave={(e)=>{
                                        e.currentTarget.style.background = '';
                                        e.currentTarget.style.color = '';
                                    }}
                                    
                                    >
                                        {filter}
                                    </s.Box>
                                )
                            })
                        }
                    </s.FlexC>
                </s.Box>

                
                <s.Box wd='900px' >
                    <div>
                        <DateRangePicker

                        // withPortal={true}
                        // withFullScreenPortal={true}
                        keepOpenOnDateSelect={true}
                        isOutsideRange={day => false}
                        initialVisibleMonth={()=> initialVisibleMonth}
                        // initialVisibleMonth={()=> moment( selectedFilter === e.filters.lastMonth? new Date( Date.now()- (86400000*31) ) : Date.now() ) }
                        
                        startDate={startDate} // momentPropTypes.momentObj or null,
                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                        endDate={endDate} // momentPropTypes.momentObj or null,
                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                        onDatesChange={({ startDate, endDate }) => {
                            setStartDate(startDate);
                            setEndDate(endDate);
                            // this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                        }}            
                        focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput =>{
                            if(!focusedInput) return;
                            setFocusedInput( focusedInput )} // PropTypes.func.isRequired,
                        }                            
                        />
                    </div>
                </s.Box>

            </s.FlexR>
        </s.Flex>
     );
}
 
export default CalendarView;