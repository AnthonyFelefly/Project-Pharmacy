import React,{Component} from 'react';
import {Media} from 'reactstrap'
import "../App.css"
class Catalogue extends Component{
    constructor(props){
        super(props);
        this.state={
            products:[
                {
                    id: 0,
                    name:'Effaclar Gel',
                    image: 'assets/images/effaclar.png',
                    category: 'Skin Care',
                    label:'Face',
                    price:'21.14$',
                    description:"Face Cleanser, Best for: OILY ACNE-PRONE SKIN, Texture: Foaming gel, EFFACLAR Gel gently purifies oily skin without drying effects and removes impurities and excess sebum, leaving the skin clean and refreshed, With anti-irritant La Roche-Posay thermal spring water, Cleansing agents selected for their high-efficacy action in eliminating impurities and excess sebum, With zinc to reduce sebum.",
                    application:"Use slightly warm water to help unclog pores. Foam in the hand and massage gently on the t-zone and neck. Work in circular strokes. Rinse off with cool water to help tighten pores."},
                 {
                    id: 1,
                    name:'Ictyane Hydra',
                    image: 'assets/images/Ictyane-Ducray.png',
                    category: 'Skin Care',
                    label:'Face',
                    price:'18.07$',
                    description:'ICTYANE HYDRA Light cream has reinvented how we hydrate normal to dry skin on a daily basis. Its intelligent Acefylline + Abyssinian oil complex retrains the skin to hydrate and nourish itself.',
                    application:"Apply morning and/or evening to the face and neck"},
                 {
                    id: 2,
                    name:'MP Combat Whey',
                    image: 'assets/images/MP-combatWhey.png',
                    category: 'Nutrition',
                    label:'Whey protein',
                    price:'64.99$',
                    description:'MusclePharm Combat 100% Whey Protein Powder a low-carb, high-protein, great-tasting protein supplement. With minimal fat and low sodium that delivers fast digesting protein sources to build and maintain lean muscle mass. Combat 100% Whey combines two of the fastest digesting, most efficient, and cleanest protein sources available: Whey Protein Isolate and Whey protein Concentrate. Whey protein has the highest bioavailability among complete proteins (protein that contains a complete amino acid profile of all 9 essential amino acids) and also has the highest absorption rate among any other proteins. Whey protein isolate is a concentrated whey protein molecule “isolated” to remove any impurities such as fats, or sugars. This process, in turn, reduces the size of the molecule making it easier for the body to absorb and faster to digest. Additionally, Combat 100% Whey is low in sodium at only 65mg per serving.  A muscle-building protein powder of high-quality ingredients that help build muscle mass and also assist in recovery',
                    application:'Mix 1 scoop of MusclePharm Combat 100% Whey Protein Powder with 8–12 oz. of cold water. Vary the amount of water to achieve desired consistency and taste. To increase your protein intake per serving and achieve a delicious milkshake taste, use milk instead of water. Consume additional servings throughout the day to meet your daily protein requirements. Use in combination with whole food protein sources, a balanced diet, and exercise program.'},
                 {
                    id: 3,
                    name:'MP Creatine',
                    image: 'assets/images/MP-creatine.png',
                    category: 'Nutrition',
                    label:'Creatine',
                    price:'12.99$',
                    description:' MusclePharm Core Series Creatine increases creatine status by enhancing uptake and bioavailability while promoting stamina, strength and lean muscle growth. This nutrient is used by athletes who engage in high-intensity/short duration exercises like weight lifting. The clinically-suggested ingredient Cinnulin PF® heightens absorption, which assists our five pure and diverse creatine complexes in delivering a range of benefits and launching directly into muscles. MP Core Series Creatine increases explosive energy, ATP energy and overall power.',
                    application:'As a dietary supplement, mix one scoop (5g) in 8 oz juice,water, or your protein drink of choice daily. Drink immediately. To maximize results, drink 8 to 10 glasses (8 oz) of water once daily. A loading phase is not required or recommended with this product.'},
                 {
                    id: 4,
                    name:'Naso Cleanse',
                    image: 'assets/images/NasoCleanse.png',
                    category: 'Respiratory Health',
                    label:'',
                    price:'13.00$',
                    description:'The NasoCleanse System offers an effective, all-natural way to cleanse the nose and help control sinus and nasal symptoms over time. It promotes and maintains sinonasal health by treating the root cause of the problem, rather than just treating the symptoms.Medically proven by an Ear, Nose and Throat (ENT) physician, NasoCleanse Squeeze is clinically proven to provide effective relief for sinus and allergy symptoms including Post-Nasal Drip, RhinoSinusitis, Nasal Congestion, Sinus Infection Symptoms and Sinus Headache Symptoms. Recent studies show that regular use of the NasoCleanse system may reduce the duration and frequency of cold and flu symptoms. Perfect for the person who prefers a positive pressure device',
                    application:'In fact, NeilMed SINUS RINSE is an easy squeeze bottle system that allows you to deliver the saline solution with positive pressure to indeed clean the nasal passages thoroughly. While also maintaining your head in an upright position. So, you have complete control of the pressure and volume of solution. Ensuring as well a gentle, soothing and therapeutic experience. Besides, daily rinsing is safe and will keep your nasal passages clean, healthy and open.'},
                 {
                    id: 5,
                    name:'Arnican Gel',
                    image: 'assets/images/ArnicanGel.png',
                    category: 'Topical & Ointments',
                    label:'',
                    price:'5.00$',
                    description:'Use Arnican Acticold at the time of the small traumatisms of the everyday life. The feeling of “cold” alleviates immediately. The presence of extract of Arnica facilitates the resorption of the bumps and bruise of the whole family. Arnican Gel is formulated in alcohol-free gel to ensure an optimal tolerance. Its nonfatty gel texture allows a fast penetration.',
                    application:'Apply to the painful area in light massages until penetration. Repeat 2 to 3 times per day.'}
                 ],
          };
        

        }
    render(){
        const imgStyle = {
            maxHeight: 164,
            maxWidth: 164,
          
          }
        const menu=this.state.products.map((product)=>{
            return(
                <div key={product.id} className="col-12 mt-5 mr-5">
                    <Media tag="li">
                        <Media  left middle>
                            <Media object src={product.image} alt={product.name} style={imgStyle}/>
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{product.name}</Media>
                            <p className="desc">Description:</p>
                            <p>{product.description}</p>
                            <p className="desc">Application:</p>
                            <p>{product.application}</p>
                        </Media>
                    </Media>
                </div>
            )

        });
        return(
            <div className="container">
                <div className="row">
                <Media list>
                    {menu}
                </Media>
                </div>
            </div>

        );
    }
}
export default Catalogue;