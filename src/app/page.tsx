import { CaptionL } from "../components/typography/caption/l";
import { CaptionM } from "../components/typography/caption/m";
import { HeadingL } from "../components/typography/heading/l";
import { HeadingM } from "../components/typography/heading/m";
import { HeadingS } from "../components/typography/heading/s";
import { HeadingXL } from "../components/typography/heading/xl";
import { HeadingXS } from "../components/typography/heading/xs";
import { HeadingXXL } from "../components/typography/heading/xxl";
import { HeadingXXS } from "../components/typography/heading/xxs";
import { LabelL } from "../components/typography/label/l";
import { LabelM } from "../components/typography/label/m";
import { TextL } from "../components/typography/text/l";
import { TextM } from "../components/typography/text/m";
import { Image } from "../components/image";

export default function Home() {
  return (
    <main>
      <HeadingXXL>HeadingXXL見出し</HeadingXXL>
      <HeadingXL>HeadingXL見出し</HeadingXL>
      <HeadingL>HeadingL見出し</HeadingL>
      <HeadingM>HeadingM見出し</HeadingM>
      <HeadingS>HeadingS見出し</HeadingS>
      <HeadingXS>HeadingXS見出し</HeadingXS>
      <HeadingXXS>HeadingXXS見出し</HeadingXXS>
      <TextL>TextLテキスト</TextL>
      <TextM>TextMテキスト</TextM>
      <LabelL>LabelLラベル</LabelL>
      <LabelM>LabelMラベル</LabelM>
      {/* <CaptionL>CaptionLキャプション</CaptionL>
      <CaptionM>CaptionMキャプション</CaptionM> */}
      <div className='w-20'>
      <Image src='/jpg/sample.jpg' alt='sample-image' aspectRatio='16:9' />
      </div>
    </main>
  )
}
