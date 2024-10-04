'use client';
import PostCard from '@/components/card/PostCard'
import { useGetPostsQuery } from '@/redux/api/post.api'
import React from 'react'

const Posts = () => {
    const {data,isLoading} = useGetPostsQuery(undefined)
    const posts = data?.data||[]
  return (
    <section className='py-5'>
       <div className='grid  grid-cols-1 md:grid-cols-3  gap-5'>
       {
           posts.map(post=>(
            <PostCard post={post}/>
           )) 
        }
        
       </div>
    </section>
  )
}

export default Posts