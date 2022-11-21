import React from 'react';
import img from './svgs/G.svg'


function Footer(props) {
    return (
<div>
            
            



<footer id="footer" className="footers">



				<div className=" p-3">
					<ul className="text-black flex flex-row justify-evenly">
						<li><p>Paul Fidelis Projects</p></li>
                        <li>built with love </li>
						<li><img src={img}/></li>
						
					</ul>
                </div>




                    




</footer>



        </div>
    );
}

export default Footer;