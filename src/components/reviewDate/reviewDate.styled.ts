import styled from "styled-components"
import { colors } from "../../utils/colors"
import { font } from "../../utils/styles"

const Date = styled.div`
  margin: 5px;
  ${font(colors.dark, 14, 400)}
`
export const S = {
  Date: Date
}