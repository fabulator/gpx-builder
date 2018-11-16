import { getDirectoryConfig } from '@socifi/rollup-config';
import path from 'path';

export default getDirectoryConfig(path.resolve(__dirname, 'src'));
