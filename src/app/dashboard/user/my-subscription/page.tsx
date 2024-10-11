import { getCurrentUserLatestSubscription } from '@/services/subscriptionService'
import React from 'react'

async function page() {
    const subscription  = await getCurrentUserLatestSubscription()
    const subPackage = subscription.package
    
  return (
    <div className='text-black dark:text-white'>
       <h1 className='text-3xl font-bold text-black dark:text-white'>My Subscription</h1>
   {
    subscription ?
    <section className='p-10 mt-20 lg:w-1/2 mx-auto border-2 border-primary-color rounded-lg'>
    <h1 className=' text-4xl md:text-5xl font-bold'>
        {
           subPackage.name
        }

    </h1>
   <div className='md:flex items-center gap-3'>
    <h1 className='text-info-color  font-bold text-2xl'>Subscription Date:</h1>
   <h1 className='text-2xl font-bold'>
        {
        new Date(subscription.subscription_date).toUTCString()
        }
        
    </h1>
    
   </div>
   <h1 className='text-3xl font-bold'>Ends in</h1>
   <h1 className=' text-3xl md:text-5xl font-bold text-center'>30 Days</h1>
   </section>
   :
   <h1 className='mt-10 dark:text-white text-3xl'>You have no subscription</h1>
   }
    </div>
  )
}

export default page