import {HeroIcon1, HeroIcon2, HeroIcon3, HeroIcon4} from "../../assets/images"
import "./trust.css"

const Trust = () => {
    const imgList = [HeroIcon1, HeroIcon2, HeroIcon3, HeroIcon4]
    return (
        <section className="trust-section">
            <div className="containers">
                <div className="trust-wrapper">
                    <h2>Trusted by</h2>
                    <div className="trust-img-wrapper">
                        {imgList.map((item, index) => <img key={index} src={item} alt="Logo Impsum 1" width={141} height={32}/>)}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Trust