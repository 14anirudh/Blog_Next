import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <style jsx>  //component level scope write global in front of style jsx to make it global  
        {`
          .stylejsx {
            color: purple;
          }
        `}
      </style> */}
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img
          className={styles.img}
          src="/home.jpg"
          width={500}
          height={266}
          alt="random image"
        />
        {/* div className={`${styles1.body} ${styles2.body}`} */}
        {/* <p className={styles.description}>
          Get started by taking a look on the one liked by the world
        </p> */}
        {/* <p className="stylejsx">style jsx demo</p> */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -mx-4 -my-8">
              <div className="py-8 px-4 lg:w-1/3">
                <div className="h-full flex items-start">
                  <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                    <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                      Jul
                    </span>
                    <span className="font-medium text-lg text-gray-800 title-font leading-none">
                      16
                    </span>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                      WEB
                    </h2>
                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                      Node package Manager
                    </h1>
                    <p className="leading-relaxed mb-5">
                      npm is the world&apos;s largest Software Registry. The
                      registry contains over 800,000 code packages. Open-source
                      developers use npm to share software. Many organizations
                      also use npm to manage private develo...
                      <Link href="/npm">
                        <button className="font-bold text-black">
                          find out more
                        </button>
                      </Link>
                    </p>
                    <a className="inline-flex items-center">
                      <img
                        alt="blog"
                        src="https://dummyimage.com/103x103"
                        className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span className="flex-grow flex flex-col pl-3">
                        <span className="title-font font-medium text-gray-900">
                          Alper Kamu
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="py-8 px-4 lg:w-1/3">
                <div className="h-full flex items-start">
                  <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                    <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                      Jul
                    </span>
                    <span className="font-medium text-lg text-gray-800 title-font leading-none">
                      18
                    </span>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                      CRYPTO
                    </h2>
                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                      Basics of crypto
                    </h1>
                    <p className="leading-relaxed mb-5">
                      A cryptocurrency, crypto-currency, or crypto is a digital
                      currency designed to work as a medium of exchange through
                      a computer network that is not reliant on any central
                      authority, such as a governme...
                      <Link href="/crypto">
                        <button className="font-bold text-black">
                          find out more
                        </button>
                      </Link>
                    </p>
                    <a className="inline-flex items-center">
                      <img
                        alt="blog"
                        src="https://dummyimage.com/102x102"
                        className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span className="flex-grow flex flex-col pl-3">
                        <span className="title-font font-medium text-gray-900">
                          Holden Caulfield
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="py-8 px-4 lg:w-1/3">
                <div className="h-full flex items-start">
                  <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                    <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                      Jul
                    </span>
                    <span className="font-medium text-lg text-gray-800 title-font leading-none">
                      19
                    </span>
                  </div>
                  <div className="flex-grow pl-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                      OPERATING SYSTEM
                    </h2>
                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                      Digging Inside CPU
                    </h1>
                    <p className="leading-relaxed mb-5">
                      A kernel is that part of the operating system which
                      interacts directly with the hardware and performs the most
                      crucial tasks. A microkernel is much smaller in size than
                      a conventional kernel and supp...
                      <Link href="/kernel">
                        <button className="font-bold text-black">
                          find out more
                        </button>
                      </Link>
                    </p>
                    <a className="inline-flex items-center">
                      <img
                        alt="blog"
                        src="https://dummyimage.com/101x101"
                        className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span className="flex-grow flex flex-col pl-3">
                        <span className="title-font font-medium text-gray-900">
                          Henry Letham
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
