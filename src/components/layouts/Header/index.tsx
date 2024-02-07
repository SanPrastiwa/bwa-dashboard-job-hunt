"use client"

import { Button } from '@/components/ui/button'
import { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import { FaPlus } from 'react-icons/fa'

interface HeaderProps {}

const Header: NextPage<HeaderProps> = ({}) => {

    const router = useRouter()

    const navCreateJobPage = () => router.push('/post-a-job')

  return (
    <div className="pb-3 mb-8 border-b border-border flex flex-row items-center justify-between">
        <div>
            <div>Compnay</div>
            <div className="font-semibold">Twitter</div>
        </div>
        <div>
            <Button onClick={navCreateJobPage} className='rounded-none py-3 px-6'>
                <FaPlus className='mr-2 w-4 h-4 text-xl'/>
                Dashboard
            </Button>
        </div>
    </div>
  )
}

export default Header