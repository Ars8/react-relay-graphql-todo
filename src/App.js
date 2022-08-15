import "./App.css";
import { RelayEnvironmentProvider } from "react-relay/hooks";

import environment from "./environment";
import Todos from "./Todos/Todos";

export default function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
        <Todos />
    </RelayEnvironmentProvider>
  );
}
