import Feed from '@components/Feed'
import React from 'react'

const Home = () => {
  return (
    <section className="flex-center flex-col  w-full">
        <h1 className='head_text text-center'>Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
            AI Powered Prompts
        </span>
        <p className="desc text-center">
            DailyPrompt is an open-source AI promting tool to discover modern world, create and share creative prompt.  
        </p>
        </h1>
        <Feed />
    </section>
  )
}

export default Home