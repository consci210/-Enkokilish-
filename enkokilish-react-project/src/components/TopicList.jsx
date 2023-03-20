import React from 'react'
import { Link } from 'react-router-dom'

const TopicList = () => {
  return (
    <>
    <div> <div className='pick'>Pick your challenge ...</div></div>
    <div className='homepage topics'>
      <div className="choices">
        <Link className='links' to={'/math'}>Math</Link>
        <Link className='links' to={'/geography'}>Geography</Link>
        <Link className='links' to={'/computer'}>Computers</Link>
        <Link className='links' to={'/history'}>History</Link>
        <Link className='links' to={'/sports'}>Sports</Link>
        <Link className='links' to={'/general-knowledge'}>General Knowledge</Link>
      </div>
    </div>
    
    </>
  )
}

export default TopicList