import { Suspense } from "react";

import { routes } from "./routes";
import { useRoutes } from "react-router-dom";
import Loading from "./Shared/Loading";
function App() {
  return <Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>;
}

export default App;
