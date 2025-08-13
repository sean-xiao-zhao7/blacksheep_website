import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    route('/learn-more', "./pages/LearnMorePage.tsx"),

    route('/blogs/plurality', "./pages/blogs/PluralityInBiblicalOnenessPage.tsx"),
    route('/blogs/storytelling', "./pages/blogs/ArtOfStoryTellingPage.tsx"),
    route('/blogs/mercy', "./pages/blogs/ACommentaryOnMercyPage.tsx"),

    route('/terms', "./pages/legal/TermsPage.tsx"),
    route('/privacy', "./pages/legal/PrivacyPage.tsx"),

    index("routes/home.tsx"),
] satisfies RouteConfig;
