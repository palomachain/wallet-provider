# `@palomachain/use-wallet`

Core interface of [`@palomachain/wallet-provider`](https://www.npmjs.com/package/@palomachain/wallet-provider).

If you want to create a library using the `useWallet()` of `@palomachain/wallet-provider`, you can use
this `@palomachain/use-wallet` instead of `@palomachain/wallet-provider` for its internal dependence.

Because `@palomachain/wallet-provider` contains multiple implementations, if your library is built
on `@palomachain/wallet-provider`, problems can arise in exceptional situations (e.g. when users implement and use
Context themselves).

Using `@palomachain/use-wallet` instead of `@palomachain/wallet-provider` can make your library work reliably in a more
diverse set of implementations.

You don't have to use this library if you're just creating a WebApp. Use `@palomachain/wallet-provider`.

# APIs

- React context and hooks
  - `const WalletContext = React.createContext()`
  - `useWallet(): Wallet`
  - `useConnectedWallet(): ConnectedWallet`
- Types
  - `enum WalletStatus`
  - `enum ConnectType`
  - `type WalletInfo`
  - `type WalletStates`
  - `type NetworkInfo`
  - `type TxResult extends CreateTxOptions`
  - `type SignResult extends CreateTxOptions`
  - `type SignBytesResult`
- Error types
  - `class UserDenied extends Error`
  - `class CreateTxFailed extends Error`
  - `class TxFailed extends Error`
  - `class Timeout extends Error`
  - `class TxUnspecifiedError extends Error`
