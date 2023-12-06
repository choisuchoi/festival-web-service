import React from 'react';
import { Link } from 'react-router-dom'

function FestivalList({ festivalData }) {

        const festivalDataArray = Object.values(festivalData);
        console.log(festivalDataArray);
    
    return (
        <div>
            <h3>축제 정보</h3>
            <div className="festival-list">
                {festivalDataArray.map((festival) => (
                    <Link key={festival.id} to={`/info/${festival.id}`} state={{festivalData: festival}}>
                        <div className="festival-item">
                            <img className='festival-list-image' src={"/" + festival.img_src}></img> <br />
                            <div className='festival-list-font'>
                                <strong>{festival.name}</strong> <br />
                                <small>{festival.begin_date} ~ {festival.end_date}</small> <br />
                                <small>{festival.place_n}</small>
                            </div>  
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default FestivalList;