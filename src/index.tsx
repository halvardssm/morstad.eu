import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./App";
import {store} from "./redux/Store";
import "./translations/i18n";
import "./style/index.pcss"

// eslint-disable-next-line react/no-render-return-value
const render = () => ReactDOM.render(<App />, document.getElementById("root"));

render();

store.subscribe(render);
