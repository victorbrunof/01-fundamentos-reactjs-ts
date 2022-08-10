import { Header } from './components/Header/Header';
import { Post } from './components/Post/Post'
import { Sidebar } from './components/Sidebar/Sidebar';

import styles from './App.module.css';

import './global.css';

interface postProps {
  id: number;
  author: {
      avatarUrl: string;
      name: string;
      role: string;
  };
  content: {
      type: "paragraph" | "link";
      content: string;
  }[];
  publishedAt: Date;
}

const posts : postProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/victorbrunof.png',
      name: 'Victor Bruno',
      role: 'Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-08-04 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/victorbrunof.png',
      name: 'Bruno Fernandes',
      role: 'Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-08-5 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key = {post.id}
                author = {post.author}
                content = {post.content}
                publishedAt = {post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
