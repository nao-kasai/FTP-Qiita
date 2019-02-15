import * as React from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RouterStore } from 'mobx-react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';

import Header from '../components/organisms/Header';
import PostCard from '../components/organisms/PostCard';
import Pager from '../components/molecules/Pager';

export interface HomeProps {
  routing: RouterStore;
}

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fafbfc;
`;

const PageTitle = styled.h2`
  display: flex;
  align-items: center;
  margin: 0 0 24px;

  .page-title {
    &__icon {
      margin-right: 7px;
      font-size: 28px;
    }
    &__title {
      font-size: 24px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #3e474d;
    }
  }
`;

const PageBody = styled.div`
  width: 100%;
  max-width: 960px;
  min-height: calc(100vh - 64px); /* Header height*/
  margin: 0 auto;
  padding: 33px 0 71px;
`;

const PostCardList = styled.ul`
  display: flex;
  flex-direction: column;
`;

@inject('routing')
@observer
export default class Home extends React.Component<HomeProps, any> {
  public render() {
    return (
      <PageWrapper>
        <Header />

        <PageBody>
          <PageTitle>
            <span className="page-title__icon">
              <FontAwesomeIcon icon={faNewspaper} color="#3e474d" />
            </span>
            <span className="page-title__title">注目記事</span>
          </PageTitle>

          <PostCardList>
            <PostCard
              title={"iOSエンジニアがフリーランス案件の面談で良く聞かれる質問集をまとめてみた"}
              tags={["フリーランス", "Swift", "キャリア", "iOS"]}
              text={"フリーランスのiOSエンジニアです。最近はiOSとAndroidの両刀使いになりました。わかる言語は英語/Swift/Objective-C/Java/Kotlin/Ruby/PHPです。注目のトレンドはブロックチェーンでDAppsです。趣味はポーカーとスプラトゥーン2。"}
              likeNum={327}
              commentNum={1728}
            />
          </PostCardList>

          <Pager />
          
          <Link to="/mypage">[ mypage ]</Link> 
        </PageBody>

      </PageWrapper>
    );
  }
}
