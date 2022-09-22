import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Ticker from 'react-ticker';
import { useState } from 'react';
// import component
import Drawer from 'react-modern-drawer';
//import styles
import 'react-modern-drawer/dist/index.css';

const Home: NextPage = () => {
  const [text, setText] = useState('Add new text..');
  const [move, setMove] = useState(true);
  const [speed, setSpeed] = useState(10);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Ticker App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Ticker speed={speed} move={move}>
        {({ index }) => (
          <>
            <h1>{`${text}  `}</h1>
          </>
        )}
      </Ticker>
      <main className={styles.main}>
        <div>
          <div>
            <button
              style={{
                width: 200,
                height: 100,
                backgroundColor: move ? 'red' : 'green',
                borderColor: move ? 'red' : 'green',
                borderRadius: 5,
              }}
              onClick={() => setMove((prev: boolean) => !prev)}
            >
              <p>{move ? 'Stop' : 'Start'}</p>
            </button>
          </div>

          <div style={{ width: 100, marginTop: 10 }}>
            <div>
              <label htmlFor="Speed">Speed</label>
            </div>

            <input
              type="range"
              id="speed"
              name="speed"
              min="0"
              max="100"
              onChange={(event) => setSpeed(parseInt(event.target.value))}
              style={{ width: 198 }}
            />
          </div>
        </div>

        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Ticker</a>
        </h1>
        <div>
          <button
            style={{
              width: 200,
              height: 100,
              backgroundColor: 'gray',
              borderColor: 'gray',
              borderRadius: 5,
            }}
            onClick={toggleDrawer}
          >
            <p>Add New Text</p>
          </button>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            size={300}
          >
            <form style={{ padding: 5 }} onSubmit={handleSubmit}>
              <p>
                <label htmlFor="text" style={{ color: 'black' }}>
                  New Text
                </label>
              </p>
              <textarea
                id="w3review"
                value={text}
                name="w3review"
                rows={30}
                cols={32}
                onChange={(event) => setText(event.target.value)}
              >
                At w3schools.com you will learn how to make a website. They
                offer free tutorials in all web development technologies.
              </textarea>
              <br />
              <input type="submit" value="Submit" />
            </form>
          </Drawer>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by {'wawle'}
        </a>
      </footer>
    </div>
  );
};

export default Home;
