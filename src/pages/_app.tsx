import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CommandContext, DefaultCommandContext } from '../core';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CommandContext.Provider value={DefaultCommandContext}>
            <Component {...pageProps} />
        </CommandContext.Provider>
    );
}

export default MyApp;
