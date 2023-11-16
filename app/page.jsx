'use client';

import { useEffect } from 'react'
import Image from 'next/image'

export default function Home() {

  useEffect(() => {
    window.location.href = "/gpts";
  }, []);

  return (
    <main className="">
      
      {/* <div className="container mx-auto px-4">
        <p>
          
        </p>
        <a href="/gpts" className="card w-96 bg-base-100 shadow-md">
          <div className="card-body">
            <h3 className="card-title">GPT Directory</h3>
          </div>
        </a>
      </div> */}
    </main>
  )
}
