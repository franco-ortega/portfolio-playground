import Head from 'next/head';
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
      <header>Header?</header>
      <main>{children}</main>
      <footer>Footer!</footer>
    </div>
  );
};

export default Layout;
