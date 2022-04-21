import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Headers from '../components/Headers'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Facebook 2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Headers />
      <main className="flex">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  )
}

export default Home
