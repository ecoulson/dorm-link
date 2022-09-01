import Head from 'next/head';
import React from 'react';
import { GoogleAnalyticsScriptComponent } from '../../analytics/google-analytics-script-component';

export function HeadComponent() {
    return (
        <Head>
            <title>Dorm Link</title>
            <meta
                name="description"
                content="Find cheap summer internship housing here."
            />
            <link rel="icon" href="/favicon.ico" />
            <GoogleAnalyticsScriptComponent />
        </Head>
    );
}
