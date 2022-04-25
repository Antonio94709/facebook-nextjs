import React from 'react'
import { useSession } from 'next-auth/react'
import SidebarRow from "../components/SidebarRow"
import { ChevronDownIcon , ShoppingBagIcon , UserGroupIcon } from '@heroicons/react/outline'
import { CalendarIcon , ClockIcon , DesktopComputerIcon , UserIcon } from '@heroicons/react/solid'


const Sidebar = () => {
    const {data: session} = useSession()
    return (
        <div className='p-2 mt-5 w-20 md:w-48 xl:min-w-min'>
            {/* <SidebarRow src={session.user.image} Icon={UserIcon} title={session.user.name}/> */}
            <SidebarRow Icon={UserIcon} title="friends"/>
            <SidebarRow Icon={UserGroupIcon} title="Groups"/>
            <SidebarRow Icon={ShoppingBagIcon} title="Marketplace"/>
            <SidebarRow Icon={DesktopComputerIcon} title="Watch"/>
            <SidebarRow Icon={CalendarIcon} title="Events"/>
            <SidebarRow Icon={ClockIcon} title="Memories"/>
            <SidebarRow Icon={ChevronDownIcon} title="See more"/>
        </div>
    )
}

export default Sidebar