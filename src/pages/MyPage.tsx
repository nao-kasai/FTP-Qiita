import * as React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faGithubSquare, faFacebookSquare, faTwitterSquare } from  '@fortawesome/free-brands-svg-icons';

import { COLORS } from '../constants/index';
import Header from '../components/organisms/Header';
import PostCard from '../components/organisms/PostCard';
import Pager from '../components/molecules/Pager';

export interface MyPageProps {
}

const MyPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${COLORS.PALE_GRAY};
`
const MyPageBody = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const MyPageBodyColmunWrapper = styled.div`
  display: flex;
`;

const UserProfile = styled.div`
  width: 100%;
  max-width: 280px;
  margin-top: 32px;
  margin-right: auto;
`;

const UserProfileImg = styled.div`
  margin-bottom: 16px;
  width: 128px;
  height: 128px;
  border-radius: 8px;
  border: 1px solid ${COLORS.LIGHT_BLUE};
`;

const UserProfileName = styled.div`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  color: ${COLORS.CHARCOAL_GRAY1};
`;

const UserProfileAccount = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  color: ${COLORS.GRAY};
`;

const UserProfileSnsGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const UserProfileSnsIcon = styled.span`
  font-size: 28px;

  &:not(:last-child) {
    margin-right: 16px;
  }
`;

const UserProfileDescription = styled.div`
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 1.5;
  color: ${COLORS.CHARCOAL_GRAY2};
`;

const UserProfileFollowInfo = styled.div`
  display: flex;
`;

const UserProfileFollowInfoData = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.57;
  color: ${COLORS.CHARCOAL_GRAY1};

  & + & {
    margin-left: 16px;
  }
`;

const ArticleSection = styled.div`
  width: 100%;
  max-width: 648px;
  margin-top: 24px;
`;

const ArticleGroupHeader = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const ArticleGroupTabs = styled.ul`
  display: flex;
`;

const ArticleGroupTabItem = styled.li`
  padding-bottom: 7px;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: ${COLORS.CHARCOAL_GRAY1};

  & + & {
    margin-left: 32px;
  }

  &.is-active {
    border-bottom: 2px solid ${COLORS.LIGHT_GREEN};
  }
`;

const ContributeButton = styled.button`
  padding: 8px 23px;
  background-color: ${COLORS.WHITE};
  font-size: 14px;
  font-weight: bold;
  line-height: 1;
  color: ${COLORS.GREEN};
  border: 1px solid ${COLORS.GREEN};
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  appearance: none;

  ${ArticleGroupHeader} & {
    margin-left: auto;
  }
`;

const ArticleGroupBody = styled.div``;

const PostCardList = styled.ul`
`;

const PostCardEditorUI = styled.li`
  display: flex;
  justify-content: flex-end;
  padding-top: 8px;
  margin-bottom: 24px;
`;

const PostCardBtn = styled.button`
  width: 32px;
  height: 32px;
  background-color: ${COLORS.WHITE};
  border: 1px solid ${COLORS.LIGHT_GRAY};
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  appearance: none;
`;

const PostCardEditButton = styled(PostCardBtn)``;

const PostCardDeleteButton = styled(PostCardBtn)`
  margin-left: 16px;
`;

const PostCardButtonIconWrapper = styled.div`
  ${PostCardEditButton} & {
    font-size: 14px;
    transform: translate(1px, -1px);
  }

  ${PostCardDeleteButton} & {
    font-size: 16px;
    transform: translateY(-1px);
  }
`;

@observer
export default class MyPage extends React.Component<MyPageProps, any> {
    
  public render() {

    const postCardData = [
      {
        title: 'iOSエンジニアがフリーランス案件の面談で良く聞かれる質問集をまとめてみた',
        tags: ['フリーランス', 'Swift', 'キャリア', 'iOS'],
        text: 'フリーランスのiOSエンジニアです。最近はiOSとAndroidの両刀使いになりました。わかる言語は英語/Swift/Objective-C/Java/Kotlin/Ruby/PHPです。注目のトレンドはブロックチェーンでDAppsです。趣味はポーカーとスプラトゥーン2。',
        likeNum: 327,
        commentNum: 1728,
      },
      {
        title: 'iOSエンジニアがフリーランス案件の面談で良く聞かれる質問集をまとめてみた',
        tags: ['フリーランス', 'Swift', 'キャリア', 'iOS'],
        text: 'フリーランスのiOSエンジニアです。最近はiOSとAndroidの両刀使いになりました。わかる言語は英語/Swift/Objective-C/Java/Kotlin/Ruby/PHPです。注目のトレンドはブロックチェーンでDAppsです。趣味はポーカーとスプラトゥーン2。',
        likeNum: 327,
        commentNum: 1728,
      },
      {
        title: 'iOSエンジニアがフリーランス案件の面談で良く聞かれる質問集をまとめてみた',
        tags: ['フリーランス', 'Swift', 'キャリア', 'iOS'],
        text: 'フリーランスのiOSエンジニアです。最近はiOSとAndroidの両刀使いになりました。わかる言語は英語/Swift/Objective-C/Java/Kotlin/Ruby/PHPです。注目のトレンドはブロックチェーンでDAppsです。趣味はポーカーとスプラトゥーン2。',
        likeNum: 327,
        commentNum: 1728,
      },
      {
        title: 'iOSエンジニアがフリーランス案件の面談で良く聞かれる質問集をまとめてみた',
        tags: ['フリーランス', 'Swift', 'キャリア', 'iOS'],
        text: 'フリーランスのiOSエンジニアです。最近はiOSとAndroidの両刀使いになりました。わかる言語は英語/Swift/Objective-C/Java/Kotlin/Ruby/PHPです。注目のトレンドはブロックチェーンでDAppsです。趣味はポーカーとスプラトゥーン2。',
        likeNum: 327,
        commentNum: 1728,
      },

    ];

    const postCardListItem = postCardData.map((item, idx) => {
      return (
        <>
          <PostCard
            key = {idx}
            title={item.title}
            tags={item.tags}
            text={item.text}
            likeNum={item.likeNum}
            commentNum={item.commentNum}
          />

          <PostCardEditorUI>
            <PostCardEditButton>
              <PostCardButtonIconWrapper>
                <FontAwesomeIcon icon={faEdit} color={COLORS.GRAY} />
              </PostCardButtonIconWrapper>
            </PostCardEditButton>

            <PostCardDeleteButton>
              <PostCardButtonIconWrapper>
                <FontAwesomeIcon icon={faTrashAlt} color={COLORS.GRAY} />
              </PostCardButtonIconWrapper>
            </PostCardDeleteButton>
          </PostCardEditorUI>
        </>
      )
    });

    return (
      <MyPageWrapper>
        <Header />

        <MyPageBody>
          <MyPageBodyColmunWrapper>
            <UserProfile>
              <UserProfileImg>
                userPhoto
              </UserProfileImg>
              
              <UserProfileName>
                Inaura いなうら 稲浦 Yuma ゆうま 悠馬
              </UserProfileName>

              <UserProfileAccount>
                @YumaInaura
              </UserProfileAccount>

              <UserProfileSnsGroup>
                <UserProfileSnsIcon>
                  <FontAwesomeIcon icon={faGithubSquare} color="#000" />
                </UserProfileSnsIcon>

                <UserProfileSnsIcon>
                  <FontAwesomeIcon icon={faFacebookSquare} color="#4861a3" />
                </UserProfileSnsIcon>

                <UserProfileSnsIcon>
                  <FontAwesomeIcon icon={faTwitterSquare} color="#55acee" />
                </UserProfileSnsIcon>
              </UserProfileSnsGroup>
              
              <UserProfileDescription>
                🌾いなうらゆうま 稲浦悠馬 Yuma Inaura 
                🤖Rubyの父を見習い ひらがな表記 
                ✒アウトプットしないと死んじゃう症候群 
                ♥命を守るためのQiita療法 
                🙇‍♂️迷惑だったら全裸で謝罪 
                🤖大量ポストが生産性最大化 
                🤔妄想癖？ 😁絵文字大好きエンジニア 
                💃いつも踊っていたいプログラマ 
                ☆ ALWAYS DANCING 📹 Youtuber経験をエンジニアリングに活用
              </UserProfileDescription>

              <UserProfileFollowInfo>
                <UserProfileFollowInfoData>Follow: 88</UserProfileFollowInfoData>
                <UserProfileFollowInfoData>Follower: 135</UserProfileFollowInfoData>
              </UserProfileFollowInfo>
            </UserProfile>

            <ArticleSection>
              <ArticleGroupHeader>
                <ArticleGroupTabs>
                  <ArticleGroupTabItem className="is-active">作成した記事</ArticleGroupTabItem>
                  <ArticleGroupTabItem>ストックした記事</ArticleGroupTabItem>
                </ArticleGroupTabs>

                <ContributeButton>投稿する</ContributeButton>
              </ArticleGroupHeader>

              <ArticleGroupBody>
                <PostCardList>
                  {postCardListItem}
                </PostCardList>

              </ArticleGroupBody>
            </ArticleSection>

          </MyPageBodyColmunWrapper>
          <Pager />
        </MyPageBody>
        
        MyPage<br/>
        <Link to="/">[ HOME ]</Link>
      </MyPageWrapper>
    );
  }
}
