import React from 'react';
import img from './svgs/G.svg'


function Footer(props) {
    return (
<div>
            
            



<footer id="footer" className="footers">



				<div className=" p-3">
					<ul className="text-gray-400 flex flex-row justify-evenly">
						<li><p>Zuri  Internship</p></li>
                        <li>HNG Internship 9 Frontend Task</li>
						<li><img src={img}/></li>
						
					</ul>
                </div>




                    




</footer>



        </div>
    );
}

export default Footer;