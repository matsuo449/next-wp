import Link from 'next/link'

const Home = () => {
  return (
    <ul>
        <li><Link href="/"><a href="/">Home</a></Link></li>
        <li><Link href="/posts"><a href="/posts">Posts</a></Link></li>
    </ul>
  )
}


export default Home