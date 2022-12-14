import Script from 'next/script';
import React from 'react';

export function GoogleAnalyticsScriptComponent() {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-EDELSGZ3VC"
            ></Script>
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                if (window.location.hostname.search("dorm-link.vercel.app") !== -1) {
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-EDELSGZ3VC');
                } 
                `}
            </Script>
        </>
    );
}
