import { thatsme1, thatsme2, thatsme3, thatsme4 } from '../../assets/images'
import './thatsme.css'

function ThatsMe(){
    return(
        <section className='thatsme-section'>
            <div className='containers thatsme'>
               <div className='top-content-wrapper'>
                 <div className='left-text-wrapper'>
                    <span>Product Designer</span>
                    <strong>That's me!</strong>
                </div>
               <div className='right-text-wrapper'>
                 <p>Over the past 12 years, I've worked with a diverse range of clients, from startups to Fortune 500 companies. I love crafting interfaces that delight users and help businesses grow.</p>
               </div>
               </div>
                
                <div className='bottom-img-wrapper'>
                    <div className='img-left'>
                        <img src={thatsme1} alt="photo" width={338} height={625} />
                        <img src={thatsme2} alt="photo" width={495} height={625} />
                    </div>
                    <div className='img-right'>
                        <img src={thatsme3} alt="photo" width={338} height={305} />
                        <img src={thatsme4} alt="photo" width={338} height={305} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ThatsMe