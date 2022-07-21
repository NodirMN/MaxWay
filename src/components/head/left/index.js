import React from "react";
import './header.scss'
import Card from "./card";
const HeadLeft = () =>{
    return (
        <div className="headleft">
            <div className="headleft__box">
            <div className="headleft__title">Siz izlagan mazzali ta’mlar</div>
            <p>When an unknown printer took a galley of type <br />
                scrambled it to make a type specimen </p>
            </div>
                <div className="row">
                    <div className="col-6">
                        <Card 
                            title='Yangi'
                            textA='Pit'
                            textB=' -sa'
                            bg='card--yellow'
                            img='pizzaf'
                        />
                    </div>
                    <div className="col-6">
                        <Card  title='Ko`p sotilgan'
                            textA='Kom'
                            textB=' -bo'
                            bg='card--violet'
                            img='cardcombo'/>
                    </div>
                </div>
        </div>
    );
}

export default HeadLeft