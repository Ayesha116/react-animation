import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import './style.css';
import tree from "../images/tree.png"

import c3 from "../images/c3.png";
import house from "../images/house.png"

export const Animation = ()=> {
        var chicken = useWebAnimations({keyframes : { transform : ["translateX(1000px)" , "translateX(700px)"] },
                timing:{
                iterations:Infinity,
                duration: 5500,
                } })

        var cloud = useWebAnimations({keyframes : { transform : ["translateX(0px)" , "translateX(700px)"] },
                timing:{
                iterations:Infinity,
                duration: 5500,
                } })



    return(
        <div class = "wrapper">
            <div className = "sky">
                <a className = "sun" href="https://www.animatedimages.org/cat-sun-278.htm"><img  src="https://www.animatedimages.org/data/media/278/animated-sun-image-0268.gif" border="0" alt = "sun" /></a>
                <div ref = { cloud.ref }>
                    <img className = "c0" src = { c3 } width= "100px" alt = ""></img>
                    <img className = "c1" src = { c3 } width= "100px" alt = ""></img>
                    <img className = "c2" src = { c3 } width= "100px" alt = ""></img>
                </div>

            </div>
            <div className = "grass">
                
                <img className = "house"  src = { house } width = "0px" alt = "house"></img>
                <a className = "chicken" href="https://www.animatedimages.org/cat-chickens-532.htm"><img  ref = { chicken.ref } src="https://www.animatedimages.org/data/media/532/animated-chicken-image-0079.gif" border="0" alt="" /></a>
                
            </div>
            <a href="https://www.animatedimages.org/cat-butterflies-291.htm"><img className = "butterfly" src="https://www.animatedimages.org/data/media/291/animated-butterfly-image-0082.gif" border="0" alt = "butterflies" /></a>
            <img className = "tree" src = { tree } width = "450px" alt = "tree" ></img>
            <a href="https://www.animatedimages.org/cat-cats-209.htm"><img className = "cat" width ="90px" src="https://www.animatedimages.org/data/media/209/animated-cat-image-0072.gif" border="0" alt="cat" /></a>
            
            
        </div>
        

    )
  
}
