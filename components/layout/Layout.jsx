import Head from 'next/head';
import Header from '../header/Header';
import Nav from '../nav/Nav';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Head>
        <title>Portfolio Playground</title>
        <meta
          name="description"
          content="Playground for experimenting with portfolio ideas."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
