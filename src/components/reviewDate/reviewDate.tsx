import { IReviewDateProps } from './ReviewDate.types'
import { S } from './reviewDate.styled';

export default function ReviewDate(props: IReviewDateProps) {
  return (
    <S.Date> {props.massageDate}</S.Date>
  )
}

