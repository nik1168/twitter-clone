import type {GetServerSideProps} from 'next';
import Head from 'next/head';
import {FC} from 'react';
import {Toaster} from 'react-hot-toast';

import Feed from '../components/feed/Feed';
import SideBar from '../components/side-bar/SideBar';
import Widgets from '../components/widgets/Widgets';
import {fetchTweets} from '../lib/fetchTweets';
import {Tweet} from '../typings';

export interface IndexProps {
  tweets: Tweet[];
}

const Home: FC<IndexProps> = ({tweets}): JSX.Element => {
  return (
    <div className="mx-auto lg:max-w-6xl max-h-screen overflow-hidden">
      <Head>
        <title>Twitter clone</title>
      </Head>
      <Toaster />
      <main className="grid grid-cols-9">
        <SideBar />
        <Feed tweets={tweets} />
        <Widgets />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const tweets = await fetchTweets();

  return {
    props: {
      tweets,
    },
  };
};
