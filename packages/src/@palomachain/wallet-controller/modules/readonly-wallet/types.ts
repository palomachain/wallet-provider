import { NetworkInfo } from '@palomachain/wallet-types';

export interface ReadonlyWalletSession {
  network: NetworkInfo;
  terraAddress: string;
}
