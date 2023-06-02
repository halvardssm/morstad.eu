import { useEffect } from "react";
import {
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import * as Sentry from "@sentry/react";
import { SENTRY_SAMPLE_RATE, SENTRY_TRACES_SAMPLE_RATE } from "../constants";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.MODE,
  tracesSampleRate: SENTRY_TRACES_SAMPLE_RATE,
  sampleRate: SENTRY_SAMPLE_RATE,
  initialScope: {
    tags: {
      entrypoint: "customer",
    },
  },
  integrations: [
    import.meta.env.IS_DEV &&
      new Sentry.Integrations.Breadcrumbs({
        console: false,
      }),
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.reactRouterV6Instrumentation(
        useEffect,
        useLocation,
        useNavigationType,
        createRoutesFromChildren,
        matchRoutes
      ),
    }),
  ].filter(Boolean),
});
