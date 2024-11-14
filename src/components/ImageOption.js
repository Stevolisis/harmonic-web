import { infographics1, infographics2, other1, other2, other3, other4, other5, pdf1, pdf2, pdf3, pdf4, pdf5, pdf6, pdf7, pdff1, pdff2, pdff3, pdff4, pdff5, pdff6, quote1, quote2, quote3, quote4, quote5, snippet1, snippet2, snippet3, snippet4, snippet5 } from '@/assets';
import Image from 'next/image';
import React from 'react'


const ImageOption = ({option}) => {
  const PDF1 = [pdf1, pdf2, pdf3, pdf4, pdf5, pdf6, pdf7];
  const PDF2 = [pdff1, pdff2, pdff3, pdff4, pdff5, pdff6]
  const Snippets = [snippet1, snippet2,snippet3, snippet4];
  const Quotes = [quote4, quote1, quote2, quote3, quote5];
  const Infographics = [infographics1, infographics2];
  const Other = [other1, other2, other3, other4, other5];

  const rendImage = (images)=>{
    return images.map((image, i)=>(
      <div key={i} className=' w-[180px] min-w-[180px] h-auto '>
        <Image src={image} alt='Visuals' width={400} height={290} placeholder='blur' />
      </div>
    ));
  }

  return (
    <>
      { option === "Linkedin PDF Slides" && rendImage(PDF2) }
      { option === "Linkedin PDF Slides with Code Explanations" && rendImage(PDF1) }
      { option === "Code Snippets" && rendImage(Snippets) }
      { option === "Social Media Posts" && rendImage(Quotes) }
      { option === "Infographics" && rendImage(Infographics) }
      { option === "Other" && rendImage(Other) }
    </>
  )
}

export default ImageOption