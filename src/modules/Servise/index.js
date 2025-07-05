import { serviceimg1, serviceimg2, serviceimg3 } from '../../assets/images';
import './services.css';

function Servise(){
    return(
        <section className='service-section'>
            <div className='containers'>
                <div className='text-wrapper'>
                    <p>SERVICES</p>
                    <h2>Design that solves problems, one product at a time.</h2>
                </div>
                <ul className='service-list'>
                    <li className='service-item'>
                        <img src={serviceimg1} alt="img" width={70} height={70}/>
                        <p>What I can do for you</p>
                        <span>Faster, better products that your users love. Here's all the services I provide:</span>
                       <div className='item-text'>
                         <p>
                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="7" height="7" fill="black"/>
                            </svg>
                            Design Strategy
                        </p>
                           <p>
                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="7" height="7" fill="black"/>
                            </svg>
                            Web and Mobile App Design
                        </p>
                           <p>
                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="7" height="7" fill="black"/>
                            </svg>
                            Front-end Development
                        </p>
                       </div>
                        
                    </li>
                      <li className='service-item'>
                        <img src={serviceimg2} alt="img" width={70} height={70}/>
                        <p>What I can do for you</p>
                        <span>Faster, better products that your users love. Here's all the services I provide:</span>
                         <div className='item-text'>
                         <p>
                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="7" height="7" fill="black"/>
                            </svg>
                            Design Strategy
                        </p>
                           <p>
                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="7" height="7" fill="black"/>
                            </svg>
                            Web and Mobile App Design
                        </p>
                           <p>
                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="7" height="7" fill="black"/>
                            </svg>
                            Front-end Development
                        </p>
                       </div>
                    </li>
                      <li className='service-item'>
                        <img src={serviceimg3} alt="img" width={70} height={70}/>
                        <p>What I can do for you</p>
                        <span>Faster, better products that your users love. Here's all the services I provide:</span>
                        <div className='item-text'>
                         <p>
                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="7" height="7" fill="black"/>
                            </svg>
                            Design Strategy
                        </p>
                           <p>
                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="7" height="7" fill="black"/>
                            </svg>
                            Web and Mobile App Design
                        </p>
                           <p>
                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="7" height="7" fill="black"/>
                            </svg>
                            Front-end Development
                        </p>
                       </div>
                        
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default Servise