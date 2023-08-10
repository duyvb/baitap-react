import React from 'react'

export default function Banner() {
  return (
    <div className='container py-5'>
        <div className='p-4 p-lg-5 bg-light text-center'>
          <h1 className='fw-bold'>A warm welcome!</h1>
          <p className='text-center fs-4'>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
          <button className='btn btn-primary'>Call to action</button>
        </div>
    </div>
  )
}
