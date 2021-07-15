export default {
  nav: {
    logo: 'SV',
    links: [
      {
        text: 'PROJECTS',
        to: '/projects',
      },
      {
        text: 'WORK',
        to: '/work',
      },
      {
        text: 'CONTACT',
        to: '/contact',
      },
    ],
  },
  landing: {
    img: {
      url: 'assets/pp.webp',
      alt: 'Niranjana',
    },
    text: ['Hi!', "I'm", 'Niranjana.', "I'm a"],
    typical: [
      'Developer 🚀',
      2000,
      'Computer Science Undergrad ✍',
      2000,
      'Technology Enthusiast 🤖',
      2000,
      'Cinephile 🍿',
      2000,
    ],
    btnText: 'Get in Touch',
  },
  about: [
    'A Fullstack Developer based in India. Currently pursuing BTech in Computer Science from Govt. Model Engineering College.',
    '',
    'I’m a technology enthusiast, with a keen interest in learning.',
    '',
    'I love making smooth apps with React and Svelte, and backend with Flask and Django.',
    '',
    'I also have a keen interest in public speaking.',
  ],
  techstack: [
    {
      img: '/assets/stack/flutter.svg',
      name: 'Flutter',
    },
    {
      img: '/assets/stack/kotlin.svg',
      name: 'Kotlin',
    },
    {
      img: '/assets/stack/go.svg',
      name: 'Go',
    },
    {
      img: '/assets/stack/fastapi.svg',
      name: 'FastAPI',
    },
    {
      img: '/assets/stack/python.svg',
      name: 'Python',
    },
    {
      img: '/assets/stack/react.svg',
      name: 'React',
    },
    {
      img: '/assets/stack/vue.svg',
      name: 'Vue',
    },
    {
      img: '/assets/stack/nextjs.svg',
      name: 'Next JS',
    },
    {
      img: '/assets/stack/nodejs.svg',
      name: 'Node',
    },
  ],
  contact: {
    heading: ['Get in ', 'Touch'],
    primary: [
      {
        img: '/assets/contact/Telegram.svg',
        link: 'https://t.me/niran_jana',
        name: 'Telegram',
      },
      {
        img: '/assets/contact/email.svg',
        link: 'mailto:niranjana687@gmail.com',
        name: 'Mail',
      },
    ],
    social: [
      {
        img: '/assets/contact/Github.svg',
        link: 'https://github.com/niranjana687',
        name: 'GitHub',
      },
      {
        img: '/assets/contact/Instagram.svg',
        link: 'https://instagram.com/niran._.jana',
        name: 'Instagram',
      },
      {
        img: '/assets/contact/Twitter.svg',
        link: 'https://twitter.com/niran_jana',
        name: 'Twitter',
      },
      {
        img: '/assets/contact/LinkedIN.svg',
        link: 'https://linkedin.com/in/niranjana687/',
        name: 'LinkedIN',
      },
    ],
  },
  resume: {
    file: 'https://sidv.dev/resume',
    btn: 'DOWNLOAD RESUME',
  },
  projects: [
    {
      title: 'OrgResearch',
      subtitle: 'Note taking, the Zettlekasten way.',
      img: 'assets/projects/gtasks.webp',
      redirect: 'https://youtu.be/trsdIUu3pMw',
      github: 'https://github.com/BRO3886/gtasks',
      link: 'https://github.com/BRO3886/gtasks',
    },
    {
      title: 'MiniGrep',
      subtitle: 'Rust implementation of GREP.',
      img: 'assets/projects/medium-api.webp',
      redirect: 'https://medium-rss-api.herokuapp.com/docs',
      github: 'https://github.com/BRO3886/Medium-API',
      link: 'https://medium-rss-api.herokuapp.com/docs',
    },
    {
      title: 'Pomodoro Task App',
      subtitle: 'A simple pomodoro timed task app built using svelte',
      img: 'assets/projects/akina.webp',
      redirect: 'https://youtu.be/rLHDL1hEmBw',
      github: 'https://github.com/BRO3886/Project-Hestia',
      link: 'https://akina.dscvit.com',
    },
    {
      title: 'Covid-19 and Happinex index',
      subtitle: 'A data analysis porject that correlates happiness index of a country with its positivity rate',
      img: 'assets/projects/katamari.webp',
      redirect: 'https://github.com/GDGVIT/katamari',
      github: 'https://github.com/GDGVIT/katamari',
      link: 'https://github.com/GDGVIT/katamari/releases',
    },
    {
      title: 'Brain Dump',
      subtitle:
        'A blog app built using flask',
      img: 'assets/projects/gin-template.webp',
      redirect: 'https://github.com/BRO3886/gin-template',
      github: 'https://github.com/BRO3886/gin-template',
      link: 'https://github.com/BRO3886/gin-template',
    },
    {
      title: 'QwickScan',
      subtitle: 'An app for making queues simpler during a pandemic.',
      img: 'assets/projects/qwickscan.webp',
      redirect: 'https://youtu.be/CCXDGFrspcs',
      github: 'https://github.com/BRO3886/Apptitude-QwickScan',
      link: 'https://github.com/BRO3886/qwickscan',
    },
  ],
  work: [
    {
      title: 'Spoon Money',
      url: 'https://winuall.com',
      img: 'assets/work/winuall.webp',
      duration: 'Apr 2021 - May 2021',
      role: 'Product Intern',
      about: [
        'Winuall is a startup based out of Bangalore. It specialises in helping coaching centers go digital.',
        'Currently working on the marketplace backend, jitsi integration and app deployment automation pipeline.',
      ],
    },
    {
      title: 'RevMeUp',
      url: 'https://www.withyouforyou.co.in/',
      img: 'assets/work/wyfy.jfif',
      duration: 'May 2019 - Aug 2019',
      role: 'Content and Social Media Management Intern',
      about: [
        'With You; For You is a SaaS product, which strives to make mental health services easily accessible. ',
        'I was handling the tech for WY;FY along with another dev.',
      ],
    },
    // {
    //   title: 'Nirmitee.io',
    //   url: 'https://www.nirmitee.io/',
    //   img: 'assets/work/nirmitee.png',
    //   duration: 'Sep 2020 - Nov 2020',
    //   role: 'Flutter Intern',
    //   about: [
    //     'Nirmitee.io is product development studio, based out of Pune. It offers Web dev, App dev and UX services to clients.',
    //     'I made the app for one of their clients, Byteseal.',
    //   ],
    // },
    // {
    //   title: 'OYO Rooms',
    //   url: 'https://www.oyorooms.com/',
    //   img: 'assets/work/oyo.png',
    //   duration: 'June 2019 - July 2019',
    //   role: 'Intern - Technology',
    //   about: [
    //     'Made the internal tech support portal, to raise issues about different technical services being offered to employees.',
    //     'Used Django for backend, and Freshdesk API to generate a ticket on their existing Freshdesk integration.',
    //   ],
    // },
  ],
};
