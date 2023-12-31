import styled from "styled-components"
import { colors } from "../../utils/colors"
import { flex, font } from "../../utils/styles"

const RateContainer = styled.div`
    background-color: ${colors.yellowGreen};
    ${flex('row', 'center', 'space-around')}
    padding: 10px;
    border-radius: 15px;
`

const RateIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 5px;
`

const RateValue = styled.div`
    ${font(colors.dark, 17, 700 )}
    margin-left: 5px;
`

export const S = {
  RateContainer: RateContainer,
  RateIcon: RateIcon,
  RateValue: RateValue
}