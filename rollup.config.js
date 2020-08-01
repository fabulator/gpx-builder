import { getConfig } from 'rollup-config-fabulator';

process.env.NODE_ENV = 'BUILD';

export default getConfig('./src/index.ts');
