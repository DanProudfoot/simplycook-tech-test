import { useRecipes } from "@/queries/recipes";

function App() {
  const { data } = useRecipes();

  console.log(data);

  return <></>;
}

export default App;
