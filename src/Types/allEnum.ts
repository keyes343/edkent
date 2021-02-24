import { css } from './enums/css';
export { css };

export enum allPath {
    home='/',
    pricing='/pricing',
    petProjects='/petProjects',
    why='/uses_of_software',
    
    why_food='/uses_of_software/food',

        why_food_industry='/uses_of_software/food/industry',
        why_food_industry_restaurants='/uses_of_software/food/industry/public_restaurants',
        why_food_industry_chefs='/uses_of_software/food/industry/private_chefs',
        why_food_industry_tiffin='/uses_of_software/food/industry/tiffin_mess',
        why_food_industry_homeDelivery='/uses_of_software/food/industry/home_deliver_cloud_kitchen',

    why_doctor='/uses_of_software/doctor',
        why_doctor_industry='/uses_of_software/doctor/industry',
        why_doctor_interface='/uses_of_software/doctor/interface', // interface chooser
        why_doctor_interface_users='/uses_of_software/doctor/interface/users', // list of things visible to cutomers
        why_doctor_interface_admin='/uses_of_software/doctor/interface/admin', // list of things visible to admin
    

    why_manufacturer='/uses_of_software/manufacturer',
    why_broker='/uses_of_software/broker',
    why_counsellor='/uses_of_software/counsellor',
    why_teacher='/uses_of_software/teacher',
    why_advertiser='/uses_of_software/advertiser',
}

export enum filters {
    today='Today', yesterday='Yesterday', last7days='Last 7 Days', lastWeek = 'Last Week', last2weeks = 'Last 2 Weeks', thisMonth = 'This Month', 
    lastMonth = 'Last Month', customRange = 'Custom Range'
}