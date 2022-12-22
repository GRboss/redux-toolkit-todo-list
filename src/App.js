import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Layout from "./components/Layout";
import { fetchSettings } from "./features/settingsSlice";

function App() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.loading)

  useEffect(() => {
    dispatch(fetchSettings())
  }, [dispatch])

  const componentToRender = loading ? <p>Loading. Please wait.</p> : <Layout />

  return (
    <div className="App">
      {componentToRender}
    </div>
  );
}

export default App;
