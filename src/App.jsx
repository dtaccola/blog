import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/dtaccola.png',
      name: 'Daniel Taccola',
      role: 'Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Fiz aqui um blog com algumas funções, é possível criar e apagar um comentário e também é possível aplaudir um comentário 🚀' },
      { type: 'link', content: 'olhaomarviagens.vercel.app' },
    ],
    publishedAt: new Date('2022-11-23 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'O botão publicar aparece ao clicar na caixa de texto, ao clicar fora da caixa de texto o botão some. O botão é habilitado ao digitar no mínimo um caracter.  🚀' },
      { type: 'link', content: 'olhaomarviagens.vercel.app' },
    ],
    publishedAt: new Date('2022-08-10 20:00:00'),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

// no export default pode dar outro nome ao componente na importação e não na exportação

// no named export não se utiliza o export default, o export vem antes do nome da função
