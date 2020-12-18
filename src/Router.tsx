import * as React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {isAuthenticated} from "./utils";
import {RouteProps} from "react-router";

/** Page Components should be lazy loaded for better performance */
const Main = React.lazy(() => import('./pages/Main'));

export const ROUTE_HOME = "/";
export const ROUTES_PUBLIC: Array<RouteProps & Record<string, any>> = [
    {
        path: ROUTE_HOME,
        name: "Main",
        exact: true,
        component: Main,
    },
];

export const ROUTES_PRIVATE = [];

export const ROUTES_COMBINED = isAuthenticated ? [...ROUTES_PUBLIC, ROUTES_PRIVATE] : ROUTES_PUBLIC

export const Router: React.FC = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <React.Suspense fallback={<div>Loading...</div>}>
                    {ROUTES_COMBINED.map((props, i) => (
                        <Route key={i} {...props} />
                    ))}
                    <Redirect to={ROUTE_HOME} />
                </React.Suspense>
            </Switch>
        </BrowserRouter>
    );
};
