import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Daniel Taccola" 
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus molestiae maiores unde illum earum recusandae suscipit ipsa! Quam, nam consequatur quaerat repudiandae minus ad, impedit possimus corporis suscipit, laudantium accusamus!" 
          />
          <Post 
            author="Lucas Aloccat"
            content="Hell Word"
          />
        </main>
      </div>
    </>
  )
}

// no export default pode dar outro nome ao componente na importação e não na exportação

// no named export não se utiliza o export default, o export vem antes do nome da função
