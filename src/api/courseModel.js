const courseModel = [
    {
      id: 1,
      name: 'Web Development Fundamentals',
      img:require('../images/courseImages/1.jpeg'),
      instructor: 'Sarah Miller',
      description: 'Master the basics of web development and create your first website.',
      enrollmentStatus: 'Open',
      thumbnail: 'your.image.here',
      duration: '10 weeks',
      schedule: 'Mondays and Wednesdays, 6:30 PM - 8:30 PM',
      location: 'Online',
      prerequisites: ['Basic HTML and CSS knowledge', 'Familiarity with JavaScript'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Web Development',
          content: 'Overview of web technologies, setting up your development environment.',
        },
        {
          week: 2,
          topic: 'HTML and CSS Fundamentals',
          content: 'Creating the structure and styling of web pages.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 101,
          name: 'Alice Johnson',
          email: 'alice@example.com',
        },
        {
          id: 102,
          name: 'Bob Smith',
          email: 'bob@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 2,
      name: 'Mobile App Development with React Native',
      img:require('../images/courseImages/2.jpeg'),
      instructor: 'John Doe',
      description: 'Learn how to build mobile apps using React Native.',
      enrollmentStatus: 'Closed',
      thumbnail: 'your.image.here',
      duration: '12 weeks',
      schedule: 'Tuesdays and Thursdays, 7:00 PM - 9:00 PM',
      location: 'Online',
      prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to React Native',
          content: 'Overview of React Native, setting up your development environment.',
        },
        {
          week: 2,
          topic: 'Building Your First App',
          content: 'Creating a simple mobile app using React Native components.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 201,
          name: 'Alice Johnson',
          email: 'eva@example.com',
        },
        {
          id: 202,
          name: 'David Brown',
          email: 'david@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 3,
      img:require('../images/courseImages/3.jpeg'),
      name: 'Data Science for Beginners',
      instructor: 'Maria Garcia',
      description: 'Introduction to data science and its applications.',
      enrollmentStatus: 'Open',
      thumbnail: 'your.image.here',
      duration: '8 weeks',
      schedule: 'Fridays, 5:00 PM - 7:00 PM',
      location: 'Online',
      prerequisites: ['Basic math knowledge', 'No programming experience required'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Data Science',
          content: 'Overview of data science concepts and tools.',
        },
        {
          week: 2,
          topic: 'Data Analysis with Python',
          content: 'Getting started with data analysis using Python.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 301,
          name: 'Sophia Johnson',
          email: 'sophia@example.com',
        },
        {
          id: 302,
          name: 'Michael Lee',
          email: 'michael@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 4,
      name: 'Digital Marketing Strategies',
      img:require('../images/courseImages/4.jpeg'),
      instructor: 'Alex Turner',
      description: 'Learn effective digital marketing strategies for businesses.',
      enrollmentStatus: 'Open',
      thumbnail: 'your.image.here',
      duration: '6 weeks',
      schedule: 'Thursdays, 4:00 PM - 6:00 PM',
      location: 'Online',
      prerequisites: ['No prior marketing experience required'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Digital Marketing',
          content: 'Overview of digital marketing channels and concepts.',
        },
        {
          week: 2,
          topic: 'Social Media Marketing',
          content: 'Strategies for effective social media marketing.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 401,
          name: 'Olivia Davis',
          email: 'olivia@example.com',
        },
        {
          id: 402,
          name: 'William Wilson',
          email: 'william@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 5,
      name: 'Introduction to Machine Learning',
      img:require('../images/courseImages/5.jpeg'),
      instructor: 'David Clark',
      description: 'Explore the basics of machine learning and its applications.',
      enrollmentStatus: 'Open',
      thumbnail: 'your.image.here',
      duration: '9 weeks',
      schedule: 'Wednesdays, 6:30 PM - 8:30 PM',
      location: 'Online',
      prerequisites: ['Basic programming knowledge', 'No machine learning experience required'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Machine Learning',
          content: 'Overview of machine learning and its types.',
        },
        {
          week: 2,
          topic: 'Supervised Learning',
          content: 'Understanding and implementing supervised learning algorithms.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 501,
          name: 'Liam Harris',
          email: 'liam@example.com',
        },
        {
          id: 502,
          name: 'Ava Martinez',
          email: 'ava@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 6,
      name: 'Graphic Design Essentials',
      img:require('../images/courseImages/6.jpeg'),
      instructor: 'Emily Turner',
      description: 'Learn the fundamentals of graphic design and create stunning visuals.',
      enrollmentStatus: 'Open',
      thumbnail: 'your.image.here',
      duration: '7 weeks',
      schedule: 'Tuesdays, 5:00 PM - 7:00 PM',
      location: 'Online',
      prerequisites: ['No prior design experience required'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Graphic Design',
          content: 'Understanding design principles and tools.',
        },
        {
          week: 2,
          topic: 'Creating Visuals with Adobe Creative Cloud',
          content: 'Exploring Adobe Photoshop and Illustrator for design.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 601,
          name: 'Alice Johnson',
          email: 'noah@example.com',
        },
        {
          id: 602,
          name: 'Oliver Taylor',
          email: 'oliver@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 7,
      name: 'Entrepreneurship & Startup Strategies',
      img:require('../images/courseImages/7.jpeg'),
      instructor: 'Sophia Lewis',
      description: 'Learn how to start and grow a successful business.',
      enrollmentStatus: 'Closed',
      thumbnail: 'your.image.here',
      duration: '11 weeks',
      schedule: 'Thursdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['No prior entrepreneurship experience required'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Entrepreneurship',
          content: 'Understanding the entrepreneurial mindset and opportunities.',
        },
        {
          week: 2,
          topic: 'Business Planning & Strategy',
          content: 'Creating a business plan and setting strategic goals.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 701,
          name: 'Mia Brown',
          email: 'mia@example.com',
        },
        {
          id: 702,
          name: 'Lucas White',
          email: 'lucas@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 8,
      name: 'Photography Fundamentals',
      img:require('../images/courseImages/8.jpeg'),
      instructor: 'Ella Davis',
      description: 'Master the art of photography and capture stunning moments.',
      enrollmentStatus: 'Closed',
      thumbnail: 'your.image.here',
      duration: '8 weeks',
      schedule: 'Saturdays, 10:00 AM - 12:00 PM',
      location: 'Online',
      prerequisites: ['No prior photography experience required'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to Photography',
          content: 'Exploring camera basics and composition.',
        },
        {
          week: 2,
          topic: 'Photography Techniques',
          content: 'Learning various photography techniques and styles.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 801,
          name: 'Jack Thomas',
          email: 'jack@example.com',
        },
        {
          id: 802,
          name: 'Sophia Miller',
          email: 'sophia@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 9,
      name: 'Financial Planning & Investment',
      img:require('../images/courseImages/9.jpeg'),
      instructor: 'Matthew Wilson',
      description: 'Learn how to manage your finances and make smart investments.',
      enrollmentStatus: 'Open',
      thumbnail: 'your.image.here',
      duration: '10 weeks',
      schedule: 'Tuesdays and Thursdays, 7:30 PM - 9:30 PM',
      location: 'Online',
      prerequisites: ['No prior financial knowledge required'],
      syllabus: [
        {
          week: 1,
          topic: 'Personal Financial Planning',
          content: 'Setting financial goals and creating a budget.',
        },
        {
          week: 2,
          topic: 'Investment Strategies',
          content: 'Exploring different investment options and risk management.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 901,
          name: 'WAlice Johnson',
          email: 'william@example.com',
        },
        {
          id: 902,
          name: 'Olivia Turner',
          email: 'olivia@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 10,
      name: 'Creative Writing Workshop',
      img:require('../images/courseImages/10.png'),
      instructor: 'Liam Davis',
      description: 'Unleash your creativity and improve your writing skills.',
      enrollmentStatus: 'Open',
      thumbnail: 'your.image.here',
      duration: '6 weeks',
      schedule: 'Fridays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['No prior writing experience required'],
      syllabus: [
        {
          week: 1,
          topic: 'Getting Started with Creative Writing',
          content: 'Exploring different forms of creative writing and inspiration.',
        },
        {
          week: 2,
          topic: 'Character Development and Plotting',
          content: 'Creating compelling characters and storylines.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 1001,
          name: 'Sophia Martin',
          email: 'sophia@example.com',
        },
        {
          id: 1002,
          name: 'Liam Harris',
          email: 'liam@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 11,
      name: 'Introduction to UX Design',
      img:require('../images/courseImages/11.jpeg'),
      instructor: 'Olivia Wilson',
      description: 'Learn the principles of user experience design and create user-friendly products.',
      enrollmentStatus: 'Open',
      thumbnail: 'your.image.here',
      duration: '9 weeks',
      schedule: 'Saturdays, 2:00 PM - 4:00 PM',
      location: 'Online',
      prerequisites: ['No prior design experience required'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to UX Design',
          content: 'Overview of user experience and its importance.',
        },
        {
          week: 2,
          topic: 'User Research and Usability Testing',
          content: 'Conducting user research and usability testing.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 1101,
          name: 'Jack Robinson',
          email: 'jack@example.com',
        },
        {
          id: 1102,
          name: 'Ava Clark',
          email: 'ava@example.com',
        },
        // Additional enrolled students...
      ],
    },
    {
      id: 12,
      name: 'Introduction to Artificial Intelligence',
      img:require('../images/courseImages/12.jpeg'),
      instructor: 'Eva Harris',
      description: 'Explore the fundamentals of artificial intelligence and its applications.',
      enrollmentStatus: 'Open',
      thumbnail: 'your.image.here',
      duration: '10 weeks',
      schedule: 'Mondays and Wednesdays, 5:30 PM - 7:30 PM',
      location: 'Online',
      prerequisites: ['Basic programming knowledge', 'No AI experience required'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to AI and Machine Learning',
          content: 'Overview of AI and its subfields.',
        },
        {
          week: 2,
          topic: 'Machine Learning Algorithms',
          content: 'Understanding and implementing machine learning algorithms.',
        },
        // Additional weeks and topics...
      ],
      students: [
        {
          id: 1201,
          name: 'Oliver White',
          email: 'oliver@example.com',
        },
        {
          id: 1202,
          name: 'Mia Harris',
          email: 'mia@example.com',
        },
        // Additional enrolled students...
      ],
    },
    // Add more courses here...
  ];
  
  export default courseModel;
  