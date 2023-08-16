import styled from "styled-components"
import { colors } from "../../utils/colors"
import { flex, font } from "../../utils/styles"


const CardContainer = styled.div`
  background-color: ${colors.grey};
  margin: 0 auto;
  width: 60%;
  ${flex('column')}
  border-radius: 15px;
  padding: 10px;
`

const HeadCard = styled.div`
  width: 100%;
  padding: 20px;
  ${flex('row', 'center', 'space-between')};
`


const Username = styled.div`
  ${font(colors.dark, 25, 500 )}
`

const NameContainer = styled.div`
  width: 100%;
  margin-left: 10px;
`

const ReviewBody = styled.div`
  ${font(colors.dark, 15, 600)}
  width: 100%;
  margin-bottom: 10px;
  padding-left: 8px;
`

export const S = {
  CardContainer: CardContainer,
  HeadCard:HeadCard,
  Username:Username,
  NameContainer:NameContainer,
  ReviewBody:ReviewBody,
}