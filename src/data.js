import { BrainCircuit, Database, TrendingUp } from "lucide-react";

export const EMAIL_ADDRESS = "manavgarg2326@gmail.com";
export const GITHUB_PROFILE_URL = "https://github.com/manav363";
export const RESUME_URL = import.meta.env.VITE_RESUME_URL || "#contact";
export const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";

export const disciplines = [
  { label: "Quant ML", href: "#projects" },
  { label: "Backend Systems", href: "#offerings" },
  { label: "AI Apps", href: "#projects" },
  { label: "Product UI", href: "#projects" },
  { label: "Architecture", href: "#experience" },
  { label: "Trading Research", href: "#projects" },
];

export const offerings = [
  {
    title: "Quant and ML research systems",
    icon: TrendingUp,
    detail:
      "Regime detection, walk-forward validation, backtesting, signal evaluation, and NSE-focused trading research.",
  },
  {
    title: "Backend and data infrastructure",
    icon: Database,
    detail:
      "FastAPI services, PostgreSQL, DuckDB, Redis, Docker Compose, API contracts, and reproducible runtime paths.",
  },
  {
    title: "AI product engineering",
    icon: BrainCircuit,
    detail:
      "NLP pipelines, LangChain agents, HuggingFace inference, tool-calling flows, and clean React interfaces.",
  },
];

export const experience = [
  {
    number: "01",
    role: "Trading intelligence systems",
    context: "ai_trade, market_regime, intraday research",
    duration: "active track",
  },
  {
    number: "02",
    role: "Full-stack AI applications",
    context: "SentiScope, Personal AI Assistant, APIBlueprint",
    duration: "portfolio track",
  },
  {
    number: "03",
    role: "Product-quality frontend systems",
    context: "Inventory SyncPulse, CineStats, UrbenShop",
    duration: "supporting track",
  },
];

export const projects = [
  {
    title: "Market Regime Detection",
    short: "Best quant internship signal",
    type: "Quant / ML Research",
    stack: "Python · FastAPI · Redis · Walk-forward ML · Railway",
    summary:
      "Research pipeline for market regime detection, signal generation, risk-managed backtesting, and lightweight demo surfaces.",
    proof:
      "Walk-forward modeling, explicit OOS predictions, research-style tests, and a clean pipeline shape instead of notebook sprawl.",
    architecture:
      "data -> features -> model -> strategy -> risk -> backtest -> pipeline -> API/dashboard",
    flow: ["Data", "Features", "Model", "Risk", "Backtest"],
    metrics: ["Walk-forward", "OOS", "Risk engine"],
    visualNote: "Regime research console",
    accent: "ink",
    repoUrl: "https://github.com/manav363/market-regime-detection",
  },
  {
    title: "SentiScope",
    short: "Best-tested full-stack AI demo",
    type: "Full-stack NLP App",
    stack: "FastAPI · Transformers · React · Redis",
    summary:
      "Sentiment analysis product for pasted text and article URLs with confidence breakdowns and a visual dashboard.",
    proof:
      "Text and URL flows work end to end, backend pytest passes, SSRF protection exists, and requests carry correlation IDs.",
    architecture:
      "React input -> FastAPI scrape/validate -> HuggingFace inference -> Redis cache -> result dashboard",
    flow: ["Text", "URL guard", "Inference", "Cache", "Dashboard"],
    metrics: ["Pytest", "SSRF guard", "Request IDs"],
    visualNote: "Sentiment analysis workspace",
    accent: "lime",
    repoUrl: "https://github.com/manav363/sentiment-dashboard",
  },
  {
    title: "Intraday Trading AI India",
    short: "NSE 500 research console",
    type: "Trading ML Console",
    stack: "Python · yfinance · XGBoost · LightGBM",
    summary:
      "Single-user Indian equities console for symbol analysis, NSE 500 scanning, backtesting, and news-based risk adjustment.",
    proof:
      "Fold-level Sharpe, max drawdown, Calmar, hit rate, profit factor, event calendar, and temporal sanitation.",
    architecture:
      "CLI -> market data/cache -> features -> ensemble model -> trade decision -> scanner/backtest",
    flow: ["CLI", "OHLCV", "Features", "Signal", "Scanner"],
    metrics: ["NSE 500", "Slippage", "Event calendar"],
    visualNote: "Intraday research terminal",
    accent: "blue",
    repoUrl: "https://github.com/manav363/intraday-trading-ai-india",
  },
  {
    title: "APIBlueprint",
    short: "API design studio",
    type: "Full-stack API Tool",
    stack: "React · FastAPI · PostgreSQL · Express",
    summary:
      "Define REST endpoints, generate OpenAPI specs, run dynamic mock routes, and keep docs/export tied to project data.",
    proof:
      "Coherent loop from CRUD data to OpenAPI to mock server to docs, with admin auth and schema-derived example responses.",
    architecture:
      "React editor -> FastAPI CRUD/spec generator -> PostgreSQL -> Express mock server -> docs/export",
    flow: ["Editor", "Schema", "OpenAPI", "Mock", "Export"],
    metrics: ["Auth", "Postgres", "Docker"],
    visualNote: "API design control room",
    accent: "paper",
    repoUrl: "https://github.com/manav363/apiblueprint",
  },
  {
    title: "Inventory SyncPulse",
    short: "Excel-driven ops dashboard",
    type: "Frontend Product App",
    stack: "React · Tailwind · Recharts · XLSX",
    summary:
      "Inventory dashboard for stock analysis, conflict detection, and operational visibility from uploaded spreadsheets.",
    proof:
      "Production build passes and the data-ingestion layer handles realistic field inference beyond a generic UI demo.",
    architecture:
      "XLSX upload -> field inference -> inventory context -> analytics views -> charts and conflicts",
    flow: ["XLSX", "Infer", "Context", "Charts", "Conflicts"],
    metrics: ["Build pass", "Recharts", "Field mapping"],
    visualNote: "Operations dashboard",
    accent: "grid",
    repoUrl: "https://github.com/manav363/inventory-system",
  },
  {
    title: "Personal AI Assistant",
    short: "Agent architecture",
    type: "AI / LLM Web App",
    stack: "FastAPI · LangChain · Groq · Tavily",
    summary:
      "Small full-stack assistant with a FastAPI backend, LangChain tool-calling agent, and React chat interface.",
    proof:
      "Frontend lint/build passes, backend imports locally, and the repo demonstrates Groq, Tavily, tool use, and session flow.",
    architecture:
      "React chat -> FastAPI -> LangChain agent -> Groq LLM + Tavily/search tools -> response stream",
    flow: ["Chat", "API", "Agent", "Tools", "Reply"],
    metrics: ["Groq", "Tavily", "Vite"],
    visualNote: "Agent interface",
    accent: "rose",
    repoUrl: "https://github.com/manav363/personal-ai-assistant",
  },
];

export const stats = [
  { value: "08", label: "portfolio projects mapped" },
  { value: "06", label: "lead projects shown" },
  { value: "03", label: "core tracks: quant, backend, AI" },
  { value: "2026", label: "internship-ready target" },
];
