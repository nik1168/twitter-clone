import type {NextPage} from 'next';
import Head from 'next/head';

import Feed from '../components/feed/Feed';
import SideBar from '../components/side-bar/SideBar';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter clone</title>
      </Head>
      <main>
        <h1>Twitter Clone</h1>
        <SideBar />
        <Feed />
      </main>
    </div>
  );
};

export default Home;
