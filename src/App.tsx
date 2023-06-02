import { SWRConfig } from "swr";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { fetcher } from "./lib/helpers/utils";

function App() {
  return (
    <SWRConfig value={{ fetcher }}>
      <RouterProvider router={router} />
    </SWRConfig>
  );
}

export default App;
