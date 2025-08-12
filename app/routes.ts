import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    route('/learn-more', "./pages/LearnMorePage.tsx"),
    index("routes/home.tsx"),
] satisfies RouteConfig;
