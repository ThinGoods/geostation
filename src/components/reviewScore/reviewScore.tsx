import star from '../../imgs/star.svg'
import { IReviewScoreProps } from './reviewScore.types'
import { S } from './reviewScore.styled';

export default function ReviewScore(props: IReviewScoreProps) {
  return (
    <S.RateContainer>
      <S.RateIcon src={star}></S.RateIcon>
      <S.RateValue>{props.rate}</S.RateValue>
    </S.RateContainer>
  )
}