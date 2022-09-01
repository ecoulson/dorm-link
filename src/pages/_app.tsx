import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {
    CommandContext,
    DefaultCommandContext,
} from '../views/commands/command-context';
import { GoogleAnalyticsScriptComponent } from '../analytics/google-analytics-script-component';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CommandContext.Provider value={DefaultCommandContext}>
            <GoogleAnalyticsScriptComponent />
            <Component {...pageProps} />
        </CommandContext.Provider>
    );
}

export default MyApp;
