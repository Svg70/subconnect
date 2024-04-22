// Copyright 2019-2022 @subwallet/sub-connect authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useContext, useEffect, useState } from 'react';

import AccountList from '../components/account/AccountList';
import WalletMetadata from '../components/sub_action/metadata/WalletMetadata';
import { useNavigate } from "react-router-dom";
import {useConnectWallet, useSetChain} from "@subwallet-connect/react";
import styled from "styled-components";
import {ThemeProps} from "../types";
import CN from "classnames";
import {NetworkInfo} from "../utils/network";
import {substrateApi} from "../utils/api/substrateApi";
import {ScreenContext} from "../context/ScreenContext";


interface Props extends ThemeProps {};


function Component ({className}: Props): React.ReactElement {
  const navigate = useNavigate();
  const [ { wallet},, disconnect] = useConnectWallet();
  const [ substrateProvider, setSubstrateProvider ] = useState<substrateApi>();
  const [{ chains }] = useSetChain();
  const { isWebUI } = useContext(ScreenContext);

  useEffect(() => {
    if(wallet?.type=== "evm")  navigate('/evm-wallet-info');
    if(!wallet) return;
      // const {namespace: namespace_, id: chainId} = wallet.chains[0];
      // let chainInfo = chains.find(({id, namespace}) => id === chainId && namespace === namespace_);
      // console.log(chainInfo, 'CHIAN_INFO_PROVIDER')

      let chainInfo =     {
        id: '0xc87870ef90a438d574b8e320f17db372c50f62beb52e479c8ff6ee5b460670b9',
        label: 'OPAL',
        decimal: 18,
        namespace: 'substrate',
        token: "OPL",
        blockExplorerUrl: 'scan.uniquenetwork.dev/opal/'
      }

      if (chainInfo) {
        const ws = NetworkInfo[chainInfo.label as string].wsProvider;
        if (ws) {
          setSubstrateProvider(new substrateApi(ws));
        }
      }

      wallet.provider.on('accountsChanged', (accounts) => {
        if(!accounts || accounts.length === 0 ){
          disconnect({ label: wallet.label, type: wallet.type })
        }
      })
  }, [wallet, navigate]);

  return (
  <div className={CN('__wallet-info-page', className, {
    '-isMobile': !isWebUI
  })}>
    <div className={'__wallet-info-body'}>
      <div className={'__wallet-info-box'}>
        <div className={'__wallet-info-label'}>
          Account List
        </div>
        {wallet?.accounts && wallet.accounts.length > 0 && <AccountList substrateProvider={substrateProvider}/>}
      </div>
      <div className={'__wallet-info-box'}>
        {!! wallet?.metadata &&
          <>
              <div className={'__wallet-info-label'}>
                  Metadata
              </div>
              <WalletMetadata/>
          </>
        }
      </div>
    </div>
  </div>
  );
}

const WalletInfo = styled(Component)<Props>(({theme: {token}}) => {

  return {

    '&.__wallet-info-page': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: token.padding
    },

    '&.-isMobile': {
      '.__wallet-info-body': {
        marginTop: 0
      }
    },

    '.__wallet-info-body': {
      display: 'flex',
      gap: token.paddingMD,
      flexWrap: 'wrap',
      width: '100%',
      marginTop: 230
    },

    '.__wallet-info-box': {
      display: 'flex',
      flexDirection: 'column',
      flex: '1 1 576px'
    },

    '.__wallet-info-label': {
      fontSize: 24,
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '32px',
      marginBottom: token.margin
    }

  }
})


export default WalletInfo;
