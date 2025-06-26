import React from 'react'

const Likes = () => {
  if (typeof window !== undefined) {
    console.log("server component");
  } else {
    console.log("client component");
  }
  return (
    <div>10k likes</div>
  )
}

export default Likes