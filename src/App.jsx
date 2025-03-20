import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Error from "./pages/Error";

const App = () => {
  return (
    <Routes>
      <Route path="https://diegodbs17.github.io/Diego.dev" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/error" element={<Error />} />
        <Route path="/Work/:id" element={<Work />} />
      </Route>
    </Routes>
  );
}

export default App