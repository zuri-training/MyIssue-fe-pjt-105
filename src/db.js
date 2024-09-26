const Users = [
    {
        id: 1,
        profilePicture: '/assets/userProfileImage1.png',
        username: 'Tolulope Daniel',
        jobRole: 'Software Developer',
        topics: [
            {
                id: 5,
                name: 'After Zuri Training',
                topicPicture: '/assets/communityImage1.png', 
            },
            {
                id: 3,
                name: 'Zuri Training OGs',
                topicPicture: '/assets/communityImage2.png', 
            },
            {
                id: 4,
                name: 'Breaking Into Tech',
                topicPicture: '/assets/communityImage4.png',
            },
        ],
        communities: [
            {
                id: 1,
                name: 'Learning React',
                communityPicture: '/assets/communityImage3.png', 
            },
            {
                id: 2,
                name: 'Learning JavaScript',
                communityPicture: '/assets/communityImage2.png', 
            }
        ],
    },
    {
        id: 2,
        profilePicture: '/assets/userProfileImage2.png',
        username: 'Maryam Khalid',
        jobRole: 'Senior Software Developer',
        topics: [
            {
                id: 3,
                name: 'Zuri Training OGs',
                topicPicture: '/assets/communityImage2.png', 
            },
            {
                id: 4,
                name: 'Breaking Into Tech',
                topicPicture: '/assets/communityImage4.png',
            },
        ],
        communities: [
            {
                id: 1,
                name: 'Learning React',
                communityPicture: '/assets/communityImage3.png', 
            },
        ],
    },
    {
        id: 3,
        profilePicture: '/assets/userProfileImage2.png',
        username: 'Praise Phebe',
        jobRole: 'Ui/UX Designer',
        topics: [
            {
                id: 5,
                name: 'After Zuri Training',
                topicPicture: '/assets/communityImage1.png', 
            },
            {
                id: 3,
                name: 'Zuri Training OGs',
                topicPicture: '/assets/communityImage2.png', 
            },
            {
                id: 4,
                name: 'Breaking Into Tech',
                topicPicture: '/assets/communityImage4.png',
            },
        ],
        communities: [
            {
                id: 3,
                name: 'Top UI/UX Deigners',
                communityPicture: '/assets/communityImage1.png',
            }
        ],
    },
    {
        id: 4,
        profilePicture: '/assets/userProfileImage2.png',
        username: 'Tomi Bakare',
        jobRole: 'Web Developer',
        topics: [
            {
                id: 5,
                name: 'After Zuri Training',
                topicPicture: '/assets/communityImage1.png', 
            },
            {
                id: 3,
                name: 'Zuri Training OGs',
                topicPicture: '/assets/communityImage2.png', 
            },
            {
                id: 4,
                name: 'Breaking Into Tech',
                topicPicture: '/assets/communityImage4.png',
            },
        ],
        communities: [
            {
                id: 1,
                name: 'Learning React',
                communityPicture: '/assets/communityImage3.png', 
            },
            {
                id: 2,
                name: 'Learning JavaScript',
                communityPicture: '/assets/communityImage2.png', 
            }
        ],
    },
    {
        id: 5,
        profilePicture: '/assets/userProfileImage2.png',
        username: 'Chetachi Blessing',
        jobRole: 'Frontend Developer',
        topics: [
            {
                id: 5,
                name: 'After Zuri Training',
                topicPicture: '/assets/communityImage1.png', 
            },
            {
                id: 3,
                name: 'Zuri Training OGs',
                topicPicture: '/assets/communityImage2.png', 
            },
            {
                id: 4,
                name: 'Breaking Into Tech',
                topicPicture: '/assets/communityImage4.png',
            },
        ],
        communities: [
            {
                id: 1,
                name: 'Learning React',
                communityPicture: '/assets/communityImage3.png', 
            },
            {
                id: 2,
                name: 'Learning JavaScript',
                communityPicture: '/assets/communityImage2.png', 
            }
        ],
    },
];




export const posts = [
    {
        id: 1,
        title: 'What is the best way to get into tech?',
        userId: 1,
        timeStamp: '5 mins ago',
        likes: 3,
        isLiked: true,
        comments: [
            {
                id:1,
                userId: 2,
                body: 'The best way for me will be to learn how do something tech-related, like building a website.',
                likes: 5,
                isLiked: true,
            },
            {
                id:2,
                userId: 5,
                body: 'Go learn a relevant skill.',
                likes: 10,
                isLiked: false,
            },
            {
                id:3,
                userId: 3,
                body: 'Look for a profession within the tech space you like and start learning what you need to master the skills required to be the best in that profession.',
                likes: 2,
                isLiked: false,
            }
        ]
    },
    {
        id: 2,
        title: 'What was your first role in tech?',
        body: 'I took a journey down the memory lane with a colleague last week friday when a friend of ours decided to make the question of the day "how far have you come from your first job?". It kind of made me really pay attention to the changes I had been ignorant of.',
        userId: 4,
        timeStamp: '54 minutes ago',
        likes: 102,
        isLiked: false,
        comments: []
    },
    {
        id: 3,
        title: 'What is the best I can receive as a Junior Developer?',
        userId: 5,
        timeStamp: '55 minutes ago',
        likes: 54,
        comments: [
            {
                id:1,
                userId: 3,
                body: 'This I feel varies based on the company you find yourself',
                likes: 5,
                isLiked: false,
            },
            {
                id:2,
                userId: 5,
                body: 'ITry checking out reliable sources like glasshouse',
                likes: 10,
                isLiked: false,
            },
        ]
    },
    {
        id: 4,
        title: 'What is the best companies to get a job as a dev?',
        userId: 3,
        timeStamp: '2 days ago',
        likes: 23,
        isLiked: false,
        comments: [
            {
                id: 1,
                userId: 2,
                body: 'This is dependent on preference.',
                likes: 10,
                isLiked: false,
            },
        ]
    },
    {
        id: 5,
        title: 'What is UX Design about??',
        userId: 5,
        timeStamp: '2 days ago',
        likes: 53,
        isLiked: false,
        comments: []
    },
    {
        id: 6,
        title: 'How can initiate a contract re-negotiation with my boss?',
        userId: 1,
        timeStamp: '5 days ago',
        likes: 34,
        isLiked: false,
        comments: [
            {
                id:1,
                userId: 2,
                body: 'The best way for me will be to learn how do something tech-related, like building a website.',
                likes: 5,
                isLiked: false,
            },
            {
                id:2,
                userId: 5,
                body: 'Go learn a relevant skill.',
                likes: 10,
                isLiked: false,
            },
            {
                id:3,
                userId: 3,
                body: 'Look for a profession within the tech space you like and start learning what you need to master the skills required to be the best in that profession.',
                likes: 2,
                isLiked: false,
            }
        ]
    },
];




export const communities = [
    {
        id: 1,
        name: 'Learning React',
        communityPicture: '/assets/communityImage3.png',
        description: 'This community is for anybody that wants to use the react library to build great things.',
        members: [
            {
                userId: 2,
                username: 'Maryam Khalid',
                jobRole: 'Senior Software Developer',
            },
            {
                userId: 1,
                username: 'Tolulope Daniel',
                jobRole: 'Software Developer',
            },
            {
                userId: 5,
                username: 'Chetachi Blessing',
                jobRole: 'Frontend Developer',
            },
        ]
    },
    {
        id: 2,
        name: 'Learning JavaScript',
        communityPicture: '/assets/communityImage2.png',
        description: 'This community is for anybody that wants to use the JS to build great things.',
        members: [
            {
                userId: 2,
                username: 'Maryam Khalid',
                jobRole: 'Senior Software Developer',
            },
            {
                userId: 1,
                username: 'Tolulope Daniel',
                jobRole: 'Software Developer',
            },
            {
                userId: 5,
                username: 'Chetachi Blessing',
                jobRole: 'Frontend Developer',
            },
        ]
    },
    {
        id: 3,
        name: 'Top UI/UX Deigners',
        communityPicture: '/assets/communityImage1.png',
        description: 'This community is for everybody that is trying to be the best Interface Designer they can be.',
        members: [
            {
                userId: 2,
                username: 'Maryam Khalid',
                jobRole: 'Senior Software Developer',
            },
            {
                userId: 1,
                username: 'Tolulope Daniel',
                jobRole: 'Software Developer',
            },
            {
                userId: 5,
                username: 'Chetachi Blessing',
                jobRole: 'Frontend Developer',
            },
        ]
    },
];




export const Topics = [
    {
        id: 1,
        name: 'Salary Wahala',
        topicPicture: '/assets/communityImage1.png',
        description: 'We talk about issues around getting paid as a techie',
    },
    {
        id: 2,
        name: 'Client Wahala',
        topicPicture: '/assets/communityImage3.png',
        description: 'We talk about issues around dealing with difficult clients as a techie',
    },
    {
        id: 3,
        name: 'Zuri Training OGs',
        topicPicture: '/assets/communityImage2.png',
        description: 'We talk about issues around getting paid as a techie.',
    },
    {
        id: 4,
        name: 'Breaking Into Tech',
        topicPicture: '/assets/communityImage4.png',
        description: 'We talk about how we got into tech and how we can make it easier for the people just trying to get in.',
    },
    {
        id: 5,
        name: 'After Zuri Training',
        topicPicture: '/assets/communityImage1.png',
        description: 'We talk about how the Zuri Training has impacted our life and choices since the Training.',
    },
];


const FAQs = [
    {
        id: '1',
        question: 'I am totally new to this community thing, How does the whole thing work?',
        answer: 'Yes. we care about you and the develpoment you make, please feel free to give us a call for whatever support you need.'
    },
    {
        id: '2',
        question: 'Do you provide support  to individuals and community?',
        answer: 'Yes. we care about you and the develpoment you make, please feel free to give us a call for whatever support you need.'
    },
    {
        id: '3',
        question: 'Do you provide support  to individuals and community?',
        answer: 'Yes. we care about you and the develpoment you make, please feel free to give us a call for whatever support you need.'
    },
    {
        id: '4',
        question: 'Who can I talk to if I have a question, complaint or need technical support?',
        answer: 'Yes. we care about you and the develpoment you make, please feel free to give us a call for whatever support you need.'
    },
    {
        id: '5',
        question: 'Who can use the Creer platform?',
        answer: 'Yes. we care about you and the develpoment you make, please feel free to give us a call for whatever support you need.'
    }
]

export { Users, FAQs };