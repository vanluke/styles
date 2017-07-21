import config from 'config/config';

export const FONTS_PUBLIC_PATH = `../${config.src.fonts}`;
export const FONT_NAME = config.fontName;
const filename = `${FONTS_PUBLIC_PATH}/${FONT_NAME}.eot`;
console.log(filename);
console.log(filename, require(filename));

export function fontFace(fontFamilyName, name = FONT_NAME, fontWeight = 'normal', fontStyle = 'normal'){
    return `
        @font-face{
            font-family: "${name}";
            src: url(${require(`${FONTS_PUBLIC_PATH}/${name}.eot`)}) format("embedded-opentype");
            src: url(${require(`${FONTS_PUBLIC_PATH}/${name}.ttf`)}?#iefix) format("truetype"),
                 url(${require(`${FONTS_PUBLIC_PATH}/${name}.woff`)}) format("woff"),
                 url(${require(`${FONTS_PUBLIC_PATH}/${name}.svg`)}#${fontFamilyName}) format("svg");

            font-style: ${fontStyle};
            font-weight: ${fontWeight};
        }
    `
}
