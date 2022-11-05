import React from 'react'
import Button from './Button'
import Contact from './Contact'

function BtnLink() {
  return (
    <div>
        <Button name="About me" link="https://twitter.com/DelisIgib"/>
                    <Button name="Meet Zuri Family " link="https://training.zuri.team/" id='btn__zuri'/>
                    <Button name="Browse Zuri's Library"link="http://books.zuri.team/" id='books'/>
                    <Button name="Basic Coding 1.0 "link="https://books.zuri.team/python-for-beginners?ref_id=<Dpaul>" id='book__python'/>
                    <Button name="Tech-Talent Hunt"link="https://background.zuri.team/" id='pitch'/>
                    <Button name="HNG Design Guidelines "link="https://books.zuri.team/design-rules" id='book__design'/>
                    
                    
    </div>
  )
}

export default BtnLink