import nextConfig from './next.config.ts';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

// @ts-ignore
export default withNextIntl(nextConfig);