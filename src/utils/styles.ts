import { colors } from "./colors";

const FONT_NAME = "Montserrat";
interface IFont {
  (
    color?: string,
    size?: number,
    weight?: TFontWeight,
  ): string
}

type TFontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type TFontName = 
| 'Thin' 
| 'ExtraLight' 
| 'Light' 
| 'Regular' 
| 'Medium' 
| 'SemiBold' 
| 'Bold' 
| 'ExtraBold' 
| 'Black';

type TFontDictionary = {
  [prop in TFontWeight]: TFontName
}

const fontDictionary: TFontDictionary = {
  100: 'Thin',
  200: 'ExtraLight',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'SemiBold',
  700: 'Bold',
  800: 'ExtraBold',
  900: 'Black',
}

export const font: IFont = (color = colors.dark, size = 14, weight = 400) => {

  return `
  font-family: "${FONT_NAME}${fontDictionary[weight]}";
  color: ${color};
  font-size: ${size}px;
  `
}