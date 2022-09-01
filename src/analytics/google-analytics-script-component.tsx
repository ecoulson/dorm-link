import Script from 'next/script';
import React from 'react';

export function GoogleAnalyticsScriptComponent() {
    return (
        <>
            <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-EDELSGZ3VC"
            ></Script>
            <Script>
                {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-EDELSGZ3VC');
    `}
            </Script>
        </>
    );
}
