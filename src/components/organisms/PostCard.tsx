import * as React from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { RouterStore } from 'mobx-react-router';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';

import { COLORS } from '../../constants/index';

import Tag from '../atoms/Tag';

export interface PostCardProps {
  title: string;
  tags: string[];
  text: string;
  likeNum: number;
  commentNum: number;
}

const PostCardInner = styled.li`
  width: 100%;
  padding: 24px;
  background-color: ${COLORS.WHITE};
  border: 1px solid ${COLORS.LIGHT_GRAY};
  transition: border .3s;

  &:hover {
   border-color: ${COLORS.LIGHT_GREEN};
  }

  & + & {
    margin-top: 24px;
  }
`;

const PostCardTitle = styled.h3`
  margin: 0 0 11px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  color: ${COLORS.CHARCOAL_GRAY1};
`;

const PostCardTagGroup = styled.ul`
  display: flex;
  margin-bottom: 11px;
`;

const PostCardText = styled.div`
  margin-bottom: 19px;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.5;
  color: ${COLORS.CHARCOAL_GRAY2};
`;

const PostCardBottomSection = styled.div`
  display: flex;
`;

const PostCardReaction = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  color: ${COLORS.CHARCOAL_GRAY2};
`;

const PostCardReactionIcon = styled.span`
  margin-right: 8px;
  font-size: 16px;
`;

const PostCardReactionNum = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
`;

const PostCardAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  color: ${COLORS.CHARCOAL_GRAY2};
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
`;

const PostCardAuthorIcon = styled.span`
  display: inline-block;
  margin-right: 8px;
  width: 24px;
  height: 24px;
  background: url(images/common/oval@2x.png) no-repeat;
  background-size: 100%;
`;

const PostCardAuthorName = styled.span`
  margin-right: 8px;
`;

const PostCardAuthorTime = styled.span`
`;

const PostCard = (props:PostCardProps) => {
  const tagItems = props.tags.map((tag, idx) => {
    return (
      <Tag key={idx} tag={tag} margin={20}/>
    );
  });

  return (
    <PostCardInner>
      <PostCardTitle>{props.title}</PostCardTitle>
      <PostCardTagGroup>{tagItems}</PostCardTagGroup>
      <PostCardText>{props.text}</PostCardText>

      <PostCardBottomSection>
        <PostCardReaction>
          <PostCardReactionIcon>
            <FontAwesomeIcon icon={faHeart} color={COLORS.GRAY} />
          </PostCardReactionIcon>
            
          <PostCardReactionNum>{props.likeNum}</PostCardReactionNum>
        </PostCardReaction>

        <PostCardReaction>
          <PostCardReactionIcon>
            <FontAwesomeIcon icon={faComment} color={COLORS.GRAY} />
          </PostCardReactionIcon>
            
          <PostCardReactionNum>{props.commentNum}</PostCardReactionNum>
        </PostCardReaction>

        <PostCardAuthor>
          <PostCardAuthorIcon/>
          <PostCardAuthorName>tamappe</PostCardAuthorName>
          <PostCardAuthorTime>@1時間前</PostCardAuthorTime>
        </PostCardAuthor>
          
      </PostCardBottomSection>
    </PostCardInner>
  );
}

export default PostCard;
