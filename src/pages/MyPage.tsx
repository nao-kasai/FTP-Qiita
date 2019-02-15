import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faFacebookSquare, faTwitterSquare} from  '@fortawesome/free-brands-svg-icons';


import Header from '../components/organisms/Header';
import PostCard from '../components/organisms/PostCard';
import Pager from '../components/molecules/Pager';

export interface MyPageProps {
}

const MyPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #fafbfc;
`

const MyPageBody = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const MyPageBodyColmunWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MyPageBodyLeftColmun = styled.div`
  width: 100%;
  max-width: 280px;
  margin-top: 32px;
  margin-right: 32px;

  .user-profile {
    &__img {
      margin-bottom: 16px;
      width: 128px;
      height: 128px;
      border-radius: 8px;
      border: 1px solid #e3edf3;
    }
  
    &__name {
      margin-bottom: 8px;
      font-size: 18px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      color: #292f33;
    }
  
    &__account {
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      color: #879399;
    }
  
    &__sns-group {
      display: flex;
      align-items: center;
      margin-bottom: 24px;
    }

    &__sns {
      font-size: 28px;
      margin-right: 16px;

      &:last-child {
        margin-right: 0;
      }
    }

    &__description {
      margin-bottom: 24px;
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      color: #3e474d;
    }
  
    &__follow-info {
      display: flex;
      font-size: 14px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.57;
      letter-spacing: normal;
      color: #292f33;
    }
  
    &__follow {
      margin-right: 16px;
    }
  
    &__followers {

    }
  }
`;

const MyPageBodyRightColmun = styled.div`
  width: 100%;
  max-width: 648px;
  margin-top: 24px;

  .article-group {
    &__header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
    }

    &__tabs {
      display: flex;
    }

    &__tab {
      margin-right: 32px;
      padding-bottom: 7px;
      font-size: 16px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #292f33;

      &:last-child {
        margin-right: 0;
      }

      &.is-active {
        border-bottom: 2px solid #55c500;
      }
    }

    &__btn {
      padding: 8px 23px;
      background-color: #fff;
      font-size: 14px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: 1;
      letter-spacing: normal;
      color: #4aac00;
      border: 1px solid #4aac00;
      border-radius: 4px;
      cursor: pointer;
      outline: none;
      appearance: none;
    }

  }
`; 

const PostCardList = styled.ul`
  width: 100%;
`;

@observer
export default class MyPage extends React.Component<MyPageProps, any> {
  public render() {
    return (
      <MyPageWrapper>
        <Header />

        <MyPageBody>
          <MyPageBodyColmunWrapper>
            <MyPageBodyLeftColmun>
              <div className="user-profile__img">userPhoto</div>
              <div className="user-profile__name">Inaura いなうら 稲浦 Yuma ゆうま 悠馬</div>
              <div className="user-profile__account">@YumaInaura</div>
              <div className="user-profile__sns-group">
                <span className="user-profile__sns">
                  <FontAwesomeIcon icon={faGithubSquare} color="#000" />
                </span>
                <span className="user-profile__sns">
                  <FontAwesomeIcon icon={faFacebookSquare} color="#4861a3" />
                </span>
                <span className="user-profile__sns">
                  <FontAwesomeIcon icon={faTwitterSquare} color="#55acee" />
                </span>
              </div>
              <div className="user-profile__description">
                🌾いなうらゆうま 稲浦悠馬 Yuma Inaura 🤖Rubyの父を見習い ひらがな表記 ✒アウトプットしないと死んじゃう症候群 ♥命を守るためのQiita療法 🙇‍♂️迷惑だったら全裸で謝罪 🤖大量ポストが生産性最大化 🤔妄想癖？ 😁絵文字大好きエンジニア 💃いつも踊っていたいプログラマ ☆ ALWAYS DANCING 📹 Youtuber経験をエンジニアリングに活用
              </div>
              <div className="user-profile__follow-info">
                <div className="user-profile__follow">Follow: 88</div>
                <div className="user-profile__follower">Follower: 135</div>
              </div>
            </MyPageBodyLeftColmun>

            <MyPageBodyRightColmun>
              <div className="article-group__header">
                <ul className="article-group__tabs">
                  <li className="article-group__tab is-active">作成した記事</li>
                  <li className="article-group__tab">ストックした記事</li>
                </ul>

                <button className="article-group__btn">投稿する</button>
              </div>

              <PostCardList>
                <PostCard
                  title={"iOSエンジニアがフリーランス案件の面談で良く聞かれる質問集をまとめてみた"}
                  tags={["フリーランス", "Swift", "キャリア", "iOS"]}
                  text={"フリーランスのiOSエンジニアです。最近はiOSとAndroidの両刀使いになりました。わかる言語は英語/Swift/Objective-C/Java/Kotlin/Ruby/PHPです。注目のトレンドはブロックチェーンでDAppsです。趣味はポーカーとスプラトゥーン2。"}
                  likeNum={327}
                  commentNum={1728}
                />
                
                <PostCard
                  title={"iOSエンジニアがフリーランス案件の面談で良く聞かれる質問集をまとめてみた"}
                  tags={["フリーランス", "Swift", "キャリア", "iOS"]}
                  text={"フリーランスのiOSエンジニアです。最近はiOSとAndroidの両刀使いになりました。わかる言語は英語/Swift/Objective-C/Java/Kotlin/Ruby/PHPです。注目のトレンドはブロックチェーンでDAppsです。趣味はポーカーとスプラトゥーン2。"}
                  likeNum={327}
                  commentNum={1728}
                  />
              </PostCardList>
            </MyPageBodyRightColmun>
          </MyPageBodyColmunWrapper>
          <Pager />
        </MyPageBody>
        
        MyPage<br/>
        <Link to={"/"}>[ HOME ]</Link>
      </MyPageWrapper>
    );
  }
}
