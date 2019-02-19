import * as React from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { RouterStore } from 'mobx-react-router';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper, faHeart, faComment } from '@fortawesome/free-regular-svg-icons';

import { COLORS } from '../../constants/index';

export interface PostCardProps {
  title: string;
  tags: string[];
  text: string;
  likeNum: number;
  commentNum: number;
}

const PostCardWrapper = styled.li`
  width: 100%;
  padding: 24px;
  background-color: ${COLORS.WHITE};
  border: 1px solid ${COLORS.LIGHT_GRAY};

  & + & {
    margin-top: 24px;
  }

  .post-card {
    &__title {
      margin: 0 0 11px;
      font-size: 18px;
      font-weight: 500;
      line-height: 1.5;
      color: ${COLORS.CHARCOAL_GRAY1};
    }

    &__tag-group {
      display: flex;
      margin-bottom: 11px;
    }

    &__tag {
      display: flex;
      align-items: center;
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }

      &__icon {
        margin-right: 8px;
        font-size: 16px;
      }

      &__name {
        font-size: 12px;
        font-weight: 500;
        line-height: 1;
        color: ${COLORS.CHARCOAL_GRAY2};
      }
    }

    &__text {
      margin-bottom: 19px;
      font-size: 14px;
      font-weight: normal;
      line-height: 1.5;
      color: ${COLORS.CHARCOAL_GRAY2};
    }

    &__bottom {
      display: flex;
      justify-content: space-between;
    }

    &__reaction {
      display: flex;
      color: ${COLORS.CHARCOAL_GRAY2};
    }

    &__like {
      display: flex;
      align-items: center;
      margin-right: 20px;

      &__icon {
        margin-right: 8px;
        font-size: 16px;
      }

      &__num {
        font-size: 12px;
        font-weight: 500;
        line-height: 1;
      }
    }

    &__comment {
      display: flex;
      align-items: center;
      margin-right: 20px;

      &__icon {
        margin-right: 8px;
        font-size: 16px;
      }

      &__num {
        font-size: 12px;
        font-weight: 500;
        line-height: 1;
      }
    }

    &__author {
      display: flex;
      align-items: center;
      color: ${COLORS.CHARCOAL_GRAY2};
      font-size: 12px;
      font-weight: 500;
      line-height: 1;

      &__icon {
        display: inline-block;
        margin-right: 8px;
        width: 24px;
        height: 24px;
        background: url(images/common/oval@2x.png) no-repeat;
        background-size: 100%;
      }

      &__name {
        margin-right: 8px;
      }
    }
  }
`;

export default class PostCard extends React.Component<PostCardProps, any> {

  constructor(props: PostCardProps) {
    super(props);  
  }

  render() {

    const tagItems = this.props.tags.map( (tag, idx) => {
      return (
        <li className="post-card__tag" key={idx}>
          <span className="post-card__tag__icon">
            <FontAwesomeIcon icon={faTag} color={COLORS.COOL_GRAY} />
          </span>
          <span className="post-card__tag__name">{tag}</span>
        </li>
      );
    })

    return (
      <PostCardWrapper>
        <h3 className="post-card__title">{this.props.title}</h3>

        <ul className="post-card__tag-group">
          {tagItems}
        </ul>

        <div className="post-card__text">{this.props.text}</div>

        <div className="post-card__bottom">
          <div className="post-card__reaction">
            <div className="post-card__like">
              <span className="post-card__like__icon">
                <FontAwesomeIcon icon={faHeart} color={COLORS.GRAY} />
              </span>
              <span className="post-card__like__num">{this.props.likeNum}</span>
            </div>
            <div className="post-card__comment">
              <span className="post-card__comment__icon">
                <FontAwesomeIcon icon={faComment} color={COLORS.GRAY} />
              </span>
              <span className="post-card__comment__num">{this.props.commentNum}</span>
            </div>
          </div>

          <div className="post-card__author">
            <span className="post-card__author__icon"></span>
            <div className="post-card__author__name">tamappe</div>
            <div className="post-card__author__time">@1時間前</div>
          </div>
        </div>
      </PostCardWrapper>
    );
  }
}

