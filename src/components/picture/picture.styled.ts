import styled from "styled-components"
import { IGetImgSize } from "./pictures.types"

const bigIcon = 400
const defaultSize = 200
const smalIcon = 100

const getImgSize: IGetImgSize = (size = defaultSize) => {
  return size 
}

const ImgBox = styled.div`
  padding: 5px;
  padding-bottom: 0px;
`
const ImageContainer = styled.img`
  border-radius: 5px;
  width: ${getImgSize(smalIcon)}px;
  height: ${getImgSize(smalIcon)}px;
`
export const S = {
  ImgBox:ImgBox,
  ImageContainer:ImageContainer
}