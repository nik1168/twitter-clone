import type {NextPage} from 'next';
import Head from 'next/head';

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

        {/*feed*/}
        {/*widget*/}
      </main>
    </div>
  );
};

export default Home;
