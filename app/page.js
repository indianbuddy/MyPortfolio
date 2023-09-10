import Image from 'next/image'
import Landing from "./components/landing"
import About from "./components/about"
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
    <Landing/> 
    <About/> 
  </main>
  )
}
