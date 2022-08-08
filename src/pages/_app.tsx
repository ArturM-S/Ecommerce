import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { AppProps } from 'next/app';

import { globalStyles } from '../../shared/styles';
import { AppLayout } from '../layout/AppLayout';
import { CartProvider } from '../service/hooks/useCart';

const cache = createCache({ key: 'next' });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <CartProvider>
            <AppLayout>
                <CacheProvider value={cache}>
                    {globalStyles}

                    <Component {...pageProps} />
                </CacheProvider>
            </AppLayout>
        </CartProvider>
    );
}
