
import injectedModule from '@subwallet-connect/injected-wallets';
import { init } from '@subwallet-connect/react';
import walletConnectPolkadotModule from '@subwallet-connect/walletconnect-polkadot';
import ledgerPolkadot from "@subwallet-connect/ledger-polkadot";
import metamaskSDK from '@subwallet-connect/metamask';
import coinbaseSDK from '@subwallet-connect/coinbase';
import subwalletModule from '@subwallet-connect/subwallet';
import talismanModule from '@subwallet-connect/talisman';
import polkadot_jsModule from '@subwallet-connect/polkadot-js';
import subwalletPolkadotModule from '@subwallet-connect/subwallet-polkadot';
import polkadotVaultModule from '@subwallet-connect/polkadot-vault';
import ledgerModule from '@subwallet-connect/ledger';
import walletConnectModule from '@subwallet-connect/walletconnect';
import {TransactionHandlerReturn} from "@subwallet-connect/core/dist/types";
import { SubWallet, LogoSubWallet } from "../assets";

// Example key • Replace with your infura key
const INFURA_KEY = '302750fdd8644da3b50aa6daa0b89336'


const ledgerPolkadot_ = ledgerPolkadot();


const injected = injectedModule({
  custom: [
    // include custom injected wallet modules here

    // { name: 'Coinbase', url: 'https://wallet.coinbase.com/' }
  ],
  filter: {
    // mapping of wallet labels to filter here
  }
})


const walletConnectPolkadot = walletConnectPolkadotModule({
  projectId: '8b817666733a6135be643a8d568d253f',
  dappUrl: 'https://w3o-demo.subwallet.app/'
})
const metamaskSDKWallet = metamaskSDK({
  options: {
    extensionOnly: false,
    i18nOptions: {
      enabled: true
    },
    infuraAPIKey : INFURA_KEY,
    dappMetadata: {
      name: 'SubConnect'
    }
  }
})
const coinbaseSDKWallet = coinbaseSDK({
  darkMode: false
})

const subwalletWallet = subwalletModule();
const polkadotWallet = polkadot_jsModule();
const subwalletPolkadotWalet = subwalletPolkadotModule();
const talismanWallet = talismanModule();
const polkadotVaultWallet = polkadotVaultModule();
const ledger = ledgerModule({ projectId : '8b817666733a6135be643a8d568d253f',   walletConnectVersion: 2 })
const walletConnect = walletConnectModule({
  projectId: '8b817666733a6135be643a8d568d253f',
  dappUrl: 'https://w3o-demo.subwallet.app/'
})

export default init({
  theme: "dark",
  connect : {
    autoConnectLastWallet : true,
    autoConnectAllPreviousWallet : true
  },
  accountCenter: {
    desktop : {
      enabled: false,
    },
    mobile: {
      enabled: false
    }
  },
  projectId : '8b817666733a6135be643a8d568d253f',

  // An array of wallet modules that you would like to be presented to the user to select from when connecting a wallet.
  wallets: [
    subwalletPolkadotWalet,
    subwalletWallet,
    walletConnectPolkadot,
    walletConnect,
    metamaskSDKWallet,
    ledgerPolkadot_,
    ledger,
    talismanWallet,
    polkadotWallet,
    polkadotVaultWallet,
    coinbaseSDKWallet,
    injected
  ],
  // An array of Chains that your app supports
  chains: [
    // {
    //   id: '0x507',
    //   rpcUrl: 'https://rpc.api.moonbase.moonbeam.network',
    //   label: 'Moonbase Alpha',
    //   token:  'DEV',
    //   namespace : 'evm',
    //   decimal: 18
    // },
    // {
    //   // hex encoded string, eg '0x1' for Ethereum Mainnet
    //   id: '0x1',
    //   // string indicating chain namespace. Defaults to 'evm' but will allow other chain namespaces in the future
    //   namespace: 'evm',
    //   // the native token symbol, eg ETH, BNB, MATIC
    //   token: 'ETH',
    //   // used for display, eg Ethereum Mainnet
    //   label: 'Ethereum',
    //   // used for network requests
    //   rpcUrl: `https://ethereum.publicnode.com`,
    //   decimal: 18
    // },
    // {
    //   id: '0x504',
    //   rpcUrl: 'https://rpc.api.moonbeam.network',
    //   label: 'Moonbeam',
    //   token: 'GLMR',
    //   namespace : 'evm',
    //   decimal: 18
    // },
    // {
    //   id: '0x505',
    //   rpcUrl: 'https://rpc.api.moonriver.moonbeam.network',
    //   label: 'Moonriver',
    //   namespace: 'evm',
    //   token : 'MOVR',
    //   decimal: 18
    // },
    // {
    //   id: '0x250',
    //   rpcUrl: 'https://astar.api.onfinality.io/public',
    //   label: 'Astar - EVM',
    //   namespace : 'evm',
    //   token:  'ASTR',
    //   decimal: 18
    // },
    // {
    //   id: '0x150', // 336
    //   rpcUrl: 'https://shiden.public.blastapi.io',
    //   label: 'Shiden',
    //   token: 'SDN',
    //   namespace : 'evm',
    //   decimal: 18
    // },
    // chains: [
    {
      id: '0x22b2', // 8882
      rpcUrl: 'https://rpc-opal.unique.network',
      label: 'OPAL by UNIQUE',
      token: "OPL",
      namespace: 'evm',
      decimal: 18
    },
    // {
    //   id: '0x22b1', // 8881
    //   rpcUrl: 'https://rpc-quartz.unique.network',
    //   label: 'QUARTZ by UNIQUE',
    //   token: "QTZ",
    //   namespace: 'evm',
    //   decimal: 18
    // },
    // {
    //   id: '0x22b0', // 8880
    //   rpcUrl: 'https://rpc.unique.network',
    //   label: 'Unique',
    //   token: "UNQ",
    //   namespace: 'evm',
    //   decimal: 18
    // }
  ],


  chainsPolkadot:[

    {
      id: '0xc87870ef90a438d574b8e320f17db372c50f62beb52e479c8ff6ee5b460670b9',
      label: 'OPAL',
      decimal: 18,
      namespace: 'substrate',
      token: "OPL",
      blockExplorerUrl: 'scan.uniquenetwork.dev/opal/'
    },

    // {
    //   id: '0xcd4d732201ebe5d6b014edda071c4203e16867305332301dc8d092044b28e554',
    //   label: 'QUARTZ by UNIQUE',
    //   decimal: 18,
    //   namespace: 'substrate',
    //   token: "QTZ",
    //   blockExplorerUrl: 'scan.uniquenetwork.dev/quartz/'
    // },

    // {
    //   id: '0x84322d9cddbf35088f1e54e9a85c967a41a56a4f43445768125e61af166c7d31',
    //   label: 'UNIQUE',
    //   decimal: 18,
    //   namespace: 'substrate',
    //   token: "UNQ",
    //   blockExplorerUrl: 'scan.uniquenetwork.dev/unique/'
    // }
    // {
    //   id: '0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e' ,
    //   token: 'WND',
    //   decimal : 12,
    //   label: 'Westend',
    //   blockExplorerUrl: 'westend.subscan.io',
    //   namespace: 'substrate'
    // },
    // {
    //   id: '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3',
    //   namespace: 'substrate',
    //   token: 'DOT',
    //   label: 'Polkadot',
    //   blockExplorerUrl: `polkadot.api.subscan.io`,
    //   decimal: 10
    // },
    // {
    //   id: '0x68d56f15f85d3136970ec16946040bc1752654e906147f7e43e9d539d7c3de2f',
    //   label: 'Polkadot Asset Hub',
    //   namespace: 'substrate',
    //   decimal: 10,
    //   token: 'DOT',
    //   blockExplorerUrl: 'assethub-polkadot.subscan.io',
    // },

    // {
    //   id: '0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe',
    //   label: 'Kusama',
    //   decimal: 12,
    //   namespace: 'substrate',
    //   token: 'KSM',
    //   blockExplorerUrl: 'kusama.api.subscan.io'
    // },

    // {
    //   id: '0x48239ef607d7928874027a43a67689209727dfb3d3dc5e5b03a39bdc2eda771a',
    //   label: 'Kusama Asset Hub',
    //   decimal: 12,
    //   namespace: 'substrate',
    //   token: 'KSM',
    //   blockExplorerUrl: 'assethub-kusama.subscan.io'
    // },

    // {
    //   id: '0xc87870ef90a438d574b8e320f17db372c50f62beb52e479c8ff6ee5b460670b9',
    //   label: 'Opal',
    //   decimal: 18,
    //   namespace: 'substrate',
    //   token: "OPL",
    //   blockExplorerUrl: 'scan.uniquenetwork.dev/opal/'
    // }
    

  ],

  appMetadata: {
    // The name of your dApp
    name: 'SubConnect',

    icon: SubWallet,

    logo: LogoSubWallet,



    description: 'Demo app for SubWalletConnect V2',
    // The url to a getting started guide for app
    gettingStartedGuide: 'http://mydapp.io/getting-started',
    // url that points to more information about app
    explore: 'http://mydapp.io/about',
    // if your app only supports injected wallets and when no injected wallets detected, recommend the user to install some
    recommendedInjectedWallets: [
      {
        // display name
        name: 'MetaMask',
        // link to download wallet
        url: 'https://metamask.io'
      },
      { name: 'Coinbase', url: 'https://wallet.coinbase.com/' }
    ],
    // Optional - but allows for dapps to require users to agree to TOS and privacy policy before connecting a wallet
    agreement: {
      version: '1.0.0',
      termsUrl: 'https://docs.subwallet.app/main/privacy-and-security/terms-of-use',
    }
  },
  notify: {
    desktop: {
      enabled: true,
      transactionHandler: (transaction) :TransactionHandlerReturn => {
        if (transaction.eventCode === 'txConfirmed') {
          return {
            autoDismiss: 0
          }
        }
        // if (transaction.eventCode === 'txPool') {
        //   return {
        //     type: 'hint',
        //     message: 'Your in the pool, hope you brought a towel!',
        //     autoDismiss: 0,
        //     link: `https://goerli.etherscan.io/tx/${transaction.hash}`
        //   }
        // }
      },
      position: 'topCenter'
    }
  }
})
