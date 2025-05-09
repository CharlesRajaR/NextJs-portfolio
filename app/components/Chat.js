import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { UnorderedList, ListItem, Link, Text, Box ,Heading} from '@chakra-ui/react';
// import { CheckIcon } from '@chakra-ui/icons';

export default function Chat() {
  const theme = {
    zIndex: 999,
    background: '#fff',
    headerBgColor: '#1da1f2',
    headerFontColor: '#fff',
    headerFontSize: '25px',
    botBubbleColor: '#1da1f2',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

  const projects = [
    {
      name: 'Muthumani Pickles',
      description: 'Developed a website for Muthumani Pickles showcasing our own products Pickles and Kasthuri Manjal Powder.',
      link: 'https://muthumanipickles.in/',
    },
    {
      name: 'Tatvika Tattoo',
      description: 'Freelance project for Tatvika Tattoo. Created a website showcasing tattoo designs and services.',
      link: 'https://rahul-raj9367.github.io/tatvika-tattoo/',
    },
    {
      name: 'VV Rice Mill',
      description: 'Freelance project for VV Rice Mill. Created a website showcasing rice products.',
      link: 'https://rahul-raj9367.github.io/my-vue-app/',
    },
    {
      name: 'Instagram Clone',
      description: 'Created a clone of Instagram to showcase post and Instagram UI with responsive design.',
      link: 'https://rahul-raj9367.github.io/instagram-clone/',
    }
  ];

  const projectList = projects.map((project, index) => (
    <ListItem key={index} mb={4}>
    <Text fontWeight="bold">{project.name}</Text>
    <Text>{project.description}</Text>
    <Link href={project.link} target="_blank" rel="noopener noreferrer" color="#1da1f2">
      View Project
    </Link>
  </ListItem>
));

const LinkedInMessage = (props) => (
  <Box>
    <Text>You can reach out to me and connect with me on LinkedIn:</Text>
    <Heading as='h3' size='lg'>RAHUL RAJ</Heading>
    <Link href="https://www.linkedin.com/in/rahul-rajj/" target="_blank" rel="noopener noreferrer" color="#1da1f2">
      LinkedIn 🔗
    </Link>
    <br />
    <Link href="mailto:rahulselvan0810@gmail.com" color="#1da1f2">
      Email 📧
    </Link>
  </Box>
);

const ResumeDownload = () => (
  <Box>
    <Text>You can download my resume here:</Text>
    <Link  href="pdf/RahulRaj-Resume.pdf"
    download
    color="#1da1f2"
    fontWeight="bold"
    textDecoration="none"
    _hover={{ textDecoration: 'underline' }}
    _focus={{ outline: 'none' }}>
      Download Resume
    </Link>
  </Box>
);

// const FAQSection = () => (
//   <Box>
//     <Text fontWeight="bold" mb={4}>Here are some frequently asked questions:</Text>
//     <UnorderedList>
//       <ListItem>
//         <Link onClick={() => handleAnswer('webDeveloper')}>
//           What is your experience as a web developer?
//         </Link>
//       </ListItem>
//       <ListItem>
//         <Link onClick={() => handleAnswer('finalYear')}>
//           What are you currently studying?
//         </Link>
//       </ListItem>
//       {/* Add more FAQ questions here if needed */}
//     </UnorderedList>
//   </Box>
// );

// const handleAnswer = (value, previousStep) => {
//   switch (value) {
//     case 'webDeveloper':
//       return {
//         id: 'webDeveloperAnswer',
//         message: 'As a web developer, I have experience with frontend and backend technologies such as HTML, CSS, JavaScript, React, Node.js, and more.',
//         trigger: 'faqList',
//       };
//     case 'finalYear':
//       return {
//         id: 'finalYearAnswer',
//         message: 'I am currently in my final year of studying Electrical and Electronics Engineering (EEE) B.E.',
//         trigger: 'faqList',
//       };
//     // Add more cases for other FAQ questions if needed
//     default:
//       break;
//   }
// };
  
  const steps = [
    {
      id: 'welcome',
      message: '👋 Welcome to my portfolio chatbot! How can I assist you today?',
      trigger: 'intro',
    },
    {
      id: 'intro',
      message: 'I am here to help you learn more about me and my portfolio. Feel free to ask me anything!',
      trigger: 'options',
    },
    {
      id: 'options',
      message: 'Here are some things you can do:',
      trigger: 'optionsList',
    },
    {
      id: 'optionsList',
      options: [
        { value: 'portfolio', label: 'View my portfolio projects', trigger: 'portfolio' },
        { value: 'contact', label: 'Get in touch with me', trigger: 'contact' },
        { value: 'resume', label: 'Download my resume', trigger: 'resume' },
        { value: 'faq', label: 'Read FAQs', trigger: 'faq' },
        { value: 'bye', label: 'That\'s it for now. Goodbye!', trigger: 'end' },
      ],
    },
    {
      id: 'portfolio',
      message: 'Here are some of my portfolio projects:',
      trigger: 'portfolioList',
    },
    // Define your portfolio projects list here
    {
        id: 'portfolioList',
        component: (
          <UnorderedList>
            {projectList}
          </UnorderedList>
        ),
        trigger: 'options',
      },
    {
      id: 'contact',
      component: <LinkedInMessage />,
      trigger: 'options',
    },
    {
      id: 'resume',
      component: (<ResumeDownload />),
      trigger: 'options',
    },
    {
      id: 'faq',
      message: 'Here are some frequently asked questions:',
      trigger: 'faqList',
    },
    // Define your FAQs list here
      {
        id: 'faqList',
        options: [
          { value: 'webDeveloper', label: 'What is your experience as a web developer?', trigger: 'webDeveloperAnswer' },
          { value: 'finalYear', label: 'What are you currently studying?', trigger: 'finalYearAnswer' },
          { value: 'dsaAlgo', label: 'What are you currently preparing for?', trigger: 'dsaAlgoAnswer' },
          { value: 'back', label: 'Back to main menu', trigger: 'options' },
        ],
      },
      {
        id: 'webDeveloperAnswer',
        message: 'As a web developer, I have experience with frontend and backend technologies such as HTML, CSS, Bootstrap , JavaScript, React js , chakra UI, Node.js, Express js and MongoDB .',
        trigger: 'faqList',
      },
      {
        id: 'finalYearAnswer',
        message: 'I am currently in my final year of studying Electrical and Electronics Engineering (EEE) B.E. at Einstein College of Engineering.',
        trigger: 'faqList',
      },
      {
        id: 'dsaAlgoAnswer',
        message: 'I am currently preparing for DSA (Data Structures and Algorithms) to improve my problem-solving skills.',
        trigger: 'faqList',
      },
    {
      id: 'end',
      message: `
      Thank you for visiting my portfolio chatbot! 
      Feel free to explore more or get in touch with me anytime.
      If you have any inquiries about freelance work, don't hesitate to ask.
      Goodbye and have a great day!
      `,
      end: true,
    },
  ];
  

  return (
    <ThemeProvider theme={theme} >
      <ChatBot
        headerTitle="Charles Raja R (Chat_Bot)"
        speechSynthesis={{ enable: false, lang: 'en' }}
        recognitionEnable={true}
        steps={steps}
        floating={true}
      />
    </ThemeProvider>
  );
}