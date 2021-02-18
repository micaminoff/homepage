import React from 'react';
import { Header } from './Components/Header';
import { Content } from './Components/Content';

function App() {
  return (
    <div id='App'>
      <Header />
      <Content />
      <footer>
        Header image source:{' '}
        <a href='https://www.vgscorporatelawyers.com/wp-content/uploads/2019/05/Corporate-e1557923264473.jpg'>
          link
        </a>
      </footer>
    </div>
  );
}

export default App;
