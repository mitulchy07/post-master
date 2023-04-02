import Link from 'next/link';

export default function Error() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for could not be found.</p>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </div>
  );
}