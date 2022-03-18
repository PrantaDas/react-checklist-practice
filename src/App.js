import './App.css';
import Article from './Components/Article/Article';
import Blog from './Components/Blog/Blog';
import Battery from './Components/Increase/Battery';
import Todo from './Components/TODO/Todo';

function App() {
  return (
    <div className="App">
      <Battery></Battery>
      <Article></Article>
      <Blog heading="This is Heading 1" authorName="John Wick"></Blog>
      <Blog heading="This is Heading 2" authorName="James Bond"></Blog>
      <Blog  heading="This is Heading 3" authorName="Dr Strange"></Blog>
      <Todo></Todo>
    </div>
  );
}

export default App;
