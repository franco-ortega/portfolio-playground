import Image from 'next/image';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.About}>
      <h2>About</h2>
      <section>
        <div>
          <Image
            src='https://placekitten.com/300/300'
            alt='kitten'
            width='300'
            height='300'
          />
        </div>
        <div>
          <h3>First Last</h3>
          <div>email.me@email.com</div>
          <div>503-555-5555</div>
          <div>GitHub</div>
          <div>LinkedIn</div>
        </div>
      </section>
      <section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sint
          modi adipisci id odio omnis error alias culpa facere expedita neque
          consequatur enim, dolor totam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam illum
          neque aspernatur, eaque nulla inventore qui maiores labore dolorum
          odit rerum, minus laborum doloremque, in impedit. Natus accusamus eos
          recusandae quam odit ipsum consectetur necessitatibus?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
          possimus nihil quos!
        </p>
      </section>
    </div>
  );
};

export default About;
