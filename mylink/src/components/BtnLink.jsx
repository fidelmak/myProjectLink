import React from 'react'
import Button from './Button'
import Contact from './Contact'

function BtnLink() {
  return (
    <div>
        <Button name="About me" link="https://twitter.com/DelisIgib"/>
                    <Button name="online programming platform " link="https://mainkey-tutorial.vercel.app/" id='btn__mainkeytut'/>
                    <Button name="NFT House Listing "link="https://metabnbz.vercel.app/" id='metabnbz'/>
                    <Button name="E-commerce website (Amazon-clone)" link="https://myamazon-clone.vercel.app/" id='book__python'/>
                    <Button name="Tech-Talent Hunt"link="https://background.zuri.team/" id='pitch'/>
                    <Button name="HNG Design Guidelines "link="https://books.zuri.team/design-rules" id='book__design'/>
                    
                    
    </div>
  )
}

export default BtnLink