import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="wrap">
        <p className="kicker">404</p>
        <h1>Страница не найдена</h1>
        <p>Такого раздела нет. Резюме остаётся на главной.</p>
        <Link className="btn" href="/">
          На главную
        </Link>
      </div>
    </main>
  );
}
