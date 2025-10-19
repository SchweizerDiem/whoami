const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://SchweizerDiem.github.io/Portfolio',
  title: 'GR.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Gabriel Rocha',
  role: 'Computer Science and Engineering Student',
  picture: 'profile.png',

  description:
    "I am passionate about creating new solutions and colaborating with as many people as I can. I'm currently studying Computer Science and Engineering @ ISPGAYA (Porto, Portugal) and participating in a few BIP's (Blended Intensive Program) ᕙ(`▿´)ᕗ, tackling different problems with people from diverse fields.",
  resume: 'resume.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/gabriel-rocha-1b93a0348/',
    github: 'https://github.com/SchweizerDiem',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Url Shortener',
    description:
      'A full-stack web application designed to shorten URL. As well as manage users that use the application',
    stack: ['Java', 'PostgreSQL', 'SpringBoot'],
    sourceCode: 'https://github.com/url-shortener',
    image: 'car-vehicle.png',
  },
  {
    name: 'Predictive model through intrusion detection system in computer networks',
    description:
      '(Coming) COIL project made in colaboration with the Brazillian student team from Fatec Ipiranga',
    stack: [' '],
    sourceCode: 'https://github.com',
    image: 'predict.png',
  },
  {
    name: 'Multi Agent Traffic System',
    description:
      'A Multi Agent system that simulates traffic, control traffic lights in order to minimize waiting time according to traffic conditions and sudden disaster',
    stack: ['Python', 'Spade', 'Sumo'],
    sourceCode: 'https://github.com',
    image: 'agents.png'
  },
  {
    name: 'Independent Heart',
    description:
      "A drag n' drop video game designed to teach children about sustainable energy (҂◡̀_◡́)ᕤ  BIP Project",
    stack: ['GML'],
    sourceCode: 'https://github.com',
    // image: 'agents.png'
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'React',
  'Git',
  'Github',
  'Java',
  'Python',
  'PostgreSQL',
  'C#',
  'PHP',
  'SQL',
  'React',
  '.NET',
  'Maven',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'gabriel.jdrocha@gmail.com',
}

export { header, about, projects, skills, contact }
