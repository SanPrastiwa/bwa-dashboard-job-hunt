import { Button } from '@/components/ui/button'
import { NextPage } from 'next'
import { CiLogout } from 'react-icons/ci'
import { FaBuilding, FaUserCircle } from 'react-icons/fa'
import { FaGears } from 'react-icons/fa6'
import { FiMessageSquare } from 'react-icons/fi'
import { IoDocumentOutline, IoHomeOutline } from 'react-icons/io5'
import { SlCalender } from 'react-icons/sl'

interface Sidebarprops {}

const Sidebar: NextPage<Sidebarprops> = ({}) => {
  return (
    <div className="pb-12 min-h-screen">
        <div className="space-y-4 py-4">
            <div className="px-3 py-2">
                <h2 className="mb-2 px-4 text-lg font-semibold">
                    Dashboard
                </h2>
                <div className="space-y-3">
                    <Button variant={"ghost"} className="w-full justify-start rounded-none hover:text-primary">
                        <IoHomeOutline className='mr-2 text-lg' />
                        Home
                    </Button>
                    <Button variant={"ghost"} className="w-full justify-start rounded-none hover:text-primary">
                        <FiMessageSquare className='mr-2 text-lg' />
                        Messages
                    </Button>
                    <Button variant={"ghost"} className="w-full justify-start rounded-none hover:text-primary">
                        <FaBuilding className='mr-2 text-lg' />
                        Company Profiles
                    </Button>
                    <Button variant={"ghost"} className="w-full justify-start rounded-none hover:text-primary">
                        <FaUserCircle className='mr-2 text-lg' />
                        All Applicants
                    </Button>
                    <Button variant={"ghost"} className="w-full justify-start rounded-none hover:text-primary">
                        <IoDocumentOutline className='mr-2 text-lg' />
                        Job Listing
                    </Button>
                    <Button variant={"ghost"} className="w-full justify-start rounded-none hover:text-primary">
                        <SlCalender className='mr-2 text-lg' />
                        My Schedule
                    </Button>
                </div>
            </div>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold">
                        Settings
                    </h2>
                    <Button variant={"ghost"} className="w-full justify-start rounded-none hover:text-primary">
                        <FaGears className='mr-2 text-lg' />
                        Settings
                    </Button>
                    <Button variant={"ghost"} className="text-red-500 w-full justify-start rounded-none hover:text-red-200">
                        <CiLogout className='mr-2 text-lg' />
                        Logout
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar