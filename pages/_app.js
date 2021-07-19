import Link from 'next/link';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto my-8 w-9/12">
     <header>
        <h1 className="text-6xl font-bold text-center">James L. Avakian</h1>
        <nav className="my-4">
          <ul className="flex flex-row justify-center space-x-4">
            <li>
              <Link href="/me">
                           	   <a className="mr-5 hover:text-gray-900">Hello</a>
                </Link>
          
              <Link href="/">
             	   <a className="mr-5 hover:text-gray-900">Introduction</a>
              </Link>
            </li>
              <li>
              <Link href="/likes">
                	   <a className="mr-5 hover:text-gray-900">Likes</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
               	   <a className="mr-5 hover:text-gray-900">About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
