import {IPicturesProps} from './pictures.types'
import { S } from './picture.styled';

export default function Picture (props: IPicturesProps) {
  return (
    <S.ImgBox>
      <S.ImageContainer src = {props.source}></S.ImageContainer>
    </S.ImgBox>
  )
}

