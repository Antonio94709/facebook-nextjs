
import Head from 'next/head'
import Image from 'next/image'
import Headers from '../components/Headers'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import { getSession } from "next-auth/react"
import Login from '../components/Login'

const Home = ({ session }) => {
  // if(!session) return <Login/>
  return (
    <div>
      <Head>
        <title>Facebook 2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Headers session={session} />
      <main className="flex">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  )
}

export default Home

export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
    props: {
      session
    }
  }
}
