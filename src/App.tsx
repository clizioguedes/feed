import { Header } from "./components/Header/Header";
import { Post, PostType } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/filipedeschamps.png",
      name: "Filipe Deschamps",
      role: "Educator",
    },
    content: [
      {
        id: 1,
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        id: 2,
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        id: 3,
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2023-06-10 08:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/clizioguedes.png",
      name: "Clizio Guedes",
      role: "Frontend developer",
    },
    content: [
      {
        id: 1,
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        id: 2,
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        id: 3,
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2023-06-10 09:00:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      {
        id: 1,
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        id: 2,
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        id: 3,
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2023-06-10 10:00:00"),
  },
  {
    id: 4,
    author: {
      avatarUrl: "https://github.com/akitaonrails.png",
      name: "Fabio Akita",
      role: "Co-founder Codeminer 42",
    },
    content: [
      {
        id: 1,
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        id: 2,
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        id: 3,
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2023-06-10 11:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
