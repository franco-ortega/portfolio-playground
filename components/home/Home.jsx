import Image from 'next/image';
import profilePic from '../../assets/FrancoOrtega.jpg';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.Home}>
      <section>
        <p>
          Welcome! My name is <span>Franco Ortega</span>.
        </p>
        <div>
          <Image src={profilePic} alt="" width="1160" height="1160"></Image>
        </div>
      </section>
      <section>
        <p>
          I&apos;m a Full Stack Software Engineer who leans into the frontend. I
          love to create intuitive interfaces paired with proper guidance. I
          appreciate well-documented and efficient processes that offer both
          structure and flexibility. I value clear and kind communication,
          creativity, cross-functional collaboration, and supportive
          environments that foster diversity and nurture growth. Optimism guides
          my efforts while practicality ensures that my goals are brought to
          fruition. Helping others brings me great joy.
        </p>
      </section>
    </div>
  );
};

export default Home;
