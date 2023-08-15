import nikita from '../../imgs/Nikita.jpg'
import ReviewAvatar from '../reviewAvatar/reviewAvatar'
import ReviewDate from '../reviewDate/reviewDate'
import ReviewScore from '../reviewScore/reviewScore'
import { IUser } from './review.types'
import { S } from './review.styled'

const user: IUser = {
  image: nikita,
  name: "Nikita",
  sername: "Zhygamovskyi",
  date: "Jul 26, 2023",
  rate: 5,
  reviewMassage: "Very nive and comfortable hotel, thank you for waccompanying my vacation!"
}

export function Review() {
  return (
    <S.CardContainer>
      <S.HeadCard>
        <ReviewAvatar avatarImage={user.image} />
        <S.NameContainer>
          <S.Username>{user.name} {user.sername}</S.Username>
          <ReviewDate massageDate={user.date} />
        </S.NameContainer>
        <ReviewScore rate={user.rate}></ReviewScore>
      </S.HeadCard>
      <S.ReviewBody>{user.reviewMassage}</S.ReviewBody>
    </S.CardContainer>
  )
}