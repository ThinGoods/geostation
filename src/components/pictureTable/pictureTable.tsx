import PictureComponent from '../picture/picture'
import { IPicturesTabelProps } from './pictureTable.types'
import { S } from './pictureTable.styled'

export function PicturesTable (props: IPicturesTabelProps) {
  
  return (
  <S.Table>
    {
      props.pictureArray.map((data, index) => (
        <PictureComponent source={data} key={index} />
      ))
    }
  </S.Table>
  )
}