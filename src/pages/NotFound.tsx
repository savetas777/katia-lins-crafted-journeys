import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-brand-900">404</h1>
        <p className="mb-4 text-xl text-ink-600">Oops! Página não encontrada</p>
        <a href="/" className="text-brand-600 underline hover:text-brand-900 transition-colors">
          Voltar ao início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
