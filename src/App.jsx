import { ArticlesProvider } from "./context/ArticlesProvider";

const App = () => {
  return (
    <>
      <ArticlesProvider>
        <p>Hola</p>
      </ArticlesProvider>
    </>
  );
};

export default App;
