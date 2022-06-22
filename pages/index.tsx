import type {NextPage} from 'next';
import Head from 'next/head';

import Feed from '../components/feed/Feed';
import SideBar from '../components/side-bar/SideBar';
import Widgets from '../components/widgets/Widgets';

const Home: NextPage = () => {
  return (
    <div className="mx-auto lg:max-w-6xl max-h-screen overflow-hidden">
      <Head>
        <title>Twitter clone</title>
      </Head>
      <main className="grid grid-cols-9">
        <SideBar />
        <Feed />
        <Widgets />
      </main>
    </div>
  );
};

export default Home;
