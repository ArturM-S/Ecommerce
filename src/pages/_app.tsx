import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { AppProps } from 'next/app';

import { globalStyles } from '../../shared/styles';
import { AppLayout } from '../layout/AppLayout';

const cache = createCache({ key: 'next' });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <CacheProvider value={cache}>
            {globalStyles}
            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
        </CacheProvider>
    );
}
