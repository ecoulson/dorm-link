import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Dorm Link</title>
                <meta
                    name="description"
                    content="Find cheap summer internship housing here."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>Welcome to Dorm Link</h1>

                <p>
                    Find cheap internship housing by taking over leases of local
                    college students.
                </p>
                <div>
                    <div>
                        <label htmlFor="city-search">
                            Where are you going?
                        </label>
                        <input
                            name="city-search"
                            placeholder="Seattle..."
                        ></input>
                    </div>
                    <button>Browse Listings</button>
                </div>
                <div>
                    <button>Create A Listing</button>
                </div>
            </main>

            <footer>
                <p>
                    Contact us:{' '}
                    <a href="mailto:dormlink@gmail.com">
                        dormlinktech@gmail.com
                    </a>
                </p>
            </footer>
        </div>
    );
};

export default Home;
