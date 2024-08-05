import profile from '../../assets/sagar-image.jpg';
// import githubIcon from '';
// import linkedinIcon from ''; 
import pdf from '../../assets/resume.pdf'

const profileData = {
  image: profile,
  name: 'SAGAR SURI',
  title: 'Full Stack Web Developer',
  description: `Hello, I’m Sagar Suri, a dedicated web developer with extensive expertise in both frontend and backend technologies. My journey in web development has been driven by a passion for creating dynamic, high-performance web applications.

  With a strong foundation in React.js and Node.js, I excel in building scalable solutions that meet complex requirements. My proficiency in UI/UX design ensures that each project is not only functional but also provides an exceptional user experience.

  On this website, you’ll find a comprehensive portfolio showcasing my projects, detailed information about my professional journey, and my CV. Whether you’re interested in collaborative opportunities or exploring my work, I invite you to discover how my skills and innovative approach can contribute to the success of your digital projects.`,
  buttons: [
    { text: 'Download CV', link: pdf },
    { text: 'Contact', link: 'https://wa.me/8806116794' }
  ],
  socialLinks: [
    // { name: 'Github', link: 'https://linkedin.com/in/sagrsuri', icon: 'https://img.icons8.com/?size=256&id=MR3dZdlA53te&format=png' },
    // { name: 'Linkedin', link: 'https://github.com/sagrsuri/', icon: 'https://ouch-cdn2.icons8.com/W_FSxOuaSfBv7Ol6sCwJRD3-jYjicOpPgbE1p1Q7HJk/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDEw/LzY2ZThhYzc1LTJh/ZjAtNDk4MC1hNThl/LWMwOWY0NWIyM2Mz/NS5wbmc.png'}
  ]
};

export default profileData;
