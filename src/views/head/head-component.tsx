import Head from 'next/head';
import React from 'react';

export function HeadComponent() {
    return (
        <Head>
            <title>Dorm Link</title>
            <meta
                name="description"
                content="Find cheap summer internship housing here."
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
