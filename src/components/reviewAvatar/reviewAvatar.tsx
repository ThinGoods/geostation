import { IReviewAvatarProps } from './reviewAvatar.types'
import { S } from './reviewAvatar.styled';

export default function ReviewAvatar(props: IReviewAvatarProps) {
  return (
    <S.ScoreboxImage src={props.avatarImage}/>
  )
}
