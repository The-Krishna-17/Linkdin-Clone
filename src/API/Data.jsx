// importing profile images
import profile1 from '../assets/profile1.jpg'
import profile2 from '../assets/profile2.jpg'
import profile3 from '../assets/profile3.jpeg'
import profile4 from '../assets/profile4.jpg'
import profile5 from '../assets/profile5.jpg'
//importing posts
import post1 from '../assets/post1.webp'
import post2 from '../assets/post2.jpeg'
import post3 from '../assets/post3.jpg'
import post4 from '../assets/post4.jpeg'
import post5 from '../assets/post5.webp'


const datas = [
    {
      id: 1,
      name: "John Doe",
      university: "University of California",
      profilePhoto: profile1, // Profile picture
      postPhoto: post1, // Post image
      day: '5d',
      description: "Excited to share my recent publication in AI research! #ArtificialIntelligence #Research",
      likes: 120,
      comments: 15,
      repost: 7,
      postDate: "2024-12-10",
    },
    {
      id: 2,
      name: "Jane Smith",
      university: "Harvard University",
      profilePhoto: profile2,
      postPhoto: post2,
      day: '2d',
      description: "Thrilled to announce my new role at Google as a Software Engineer. A big thank you to everyone who supported me along the way! #Career #Google",
      likes: 340,
      comments: 45,
      repost: 22,
      postDate: "2024-12-12",
    },
    {
      id: 3,
      name: "Mike Johnson",
      university: "MIT",
      profilePhoto: profile3,
      postPhoto: post3,
      day: '3hr',
      description: "Just attended an incredible seminar on Quantum Computing. The future is exciting! #QuantumComputing #Innovation",
      likes: 180,
      comments: 20,
      repost: 4,
      postDate: "2024-12-14",
    },
    {
      id: 4,
      name: "Emily Clark",
      university: "Stanford University",
      profilePhoto: profile4,
      postPhoto: post4,
      day: '36min',
      description: "Proud to share that my startup has received seed funding! Huge thanks to our team and mentors. #Entrepreneurship #Startups",
      likes: 260,
      comments: 30,
      repost: 14,
      postDate: "2024-12-15",
    },
    {
      id: 5,
      name: "David Lee",
      university: "University of Toronto",
      profilePhoto: profile5,
      postPhoto: post5,
      description: "Looking forward to connecting with professionals in renewable energy. Let’s collaborate! #Sustainability #RenewableEnergy",
      likes: 90,
      comments: 10,
      repost: 16,
      postDate: "2024-12-16",
    },
  ];

  
  export default datas;
  