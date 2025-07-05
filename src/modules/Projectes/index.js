import { projectimg1, projectimg2, projectimg3 } from '../../assets/images'
import './projects.css'

function Projectes(){
     return(
        <section className='project-section'>
            <div className='containers project'>
                <div className='first-wrapper'>
                    <div className='first-wrapper-text'>
                        <p>PROJECTS</p>
                        <strong>I bring results.My clients are proof.</strong>
                    </div>
                    <button>Wiew all projects</button>
                </div>

                <marquee behavior="scroll">
                <ul className='project-list'>
                    <li className='project-item'>
                        <img src={projectimg1} alt="img" width={468} height={305} />
                        <div className='item-text-wrapper'>
                            <p>Branding</p>
                        <strong>Soulful Rebrand</strong>
                        <p>
                            View Project
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.225 6.35745L6.43575 1.56816L7.69825 0.305664L14.6429 7.2503L7.69825 14.1949L6.43575 12.9325L11.225 8.14317H0.357178V6.35745H11.225Z" fill="black"/>
                            </svg>
                        </p>
                        </div>
                    </li>
                    <li className='project-item'>
                        <img src={projectimg2} alt="img" width={468} height={305} />
                         <div className='item-text-wrapper'>
                            <p>Branding</p>
                        <strong>Soulful Rebrand</strong>
                        <p>
                            View Project
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.225 6.35745L6.43575 1.56816L7.69825 0.305664L14.6429 7.2503L7.69825 14.1949L6.43575 12.9325L11.225 8.14317H0.357178V6.35745H11.225Z" fill="black"/>
                            </svg>
                        </p>
                        </div>
                    </li>
                    <li className='project-item'>
                        <img src={projectimg3} alt="img" width={468} height={305} />
                        <div className='item-text-wrapper'>
                            <p>Branding</p>
                        <strong>Soulful Rebrand</strong>
                        <p>
                            View Project
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.225 6.35745L6.43575 1.56816L7.69825 0.305664L14.6429 7.2503L7.69825 14.1949L6.43575 12.9325L11.225 8.14317H0.357178V6.35745H11.225Z" fill="black"/>
                            </svg>
                        </p>
                        </div>
                    </li>
                </ul>
                </marquee>
            </div>
        </section>
     )
}
export default Projectes