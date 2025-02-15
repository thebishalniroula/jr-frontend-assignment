import Link from "next/link"

const Nav = ()=>{
    return <nav className='flex justify-between max-w-7xl m-auto px-10 py-3'>
      <Link href={"/"} className='text-xl font-semibold'>MUSIC SANSAR</Link>
      <div className='flex gap-5'>
        <Link href="/">Home</Link>
        <Link href="/search">Search</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  }

  export default Nav
  