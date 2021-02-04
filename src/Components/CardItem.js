import React from 'react';
import { Link } from 'react-router-dom';


function CardItem(props) {
    return (
        <>
        
            <li className='cards__item'>
                <Link className='cards__item__link' to={props.path}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img className='cards__item__img' src={'https://player.vimeo.com/external/382354985.sd.mp4?s=bcab1ff0e61a6d8479509ddb7acba2425521caaf&profile_id=139&oauth2_token_id=57447761'} alt='cardimage'>
                        </img>
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>
                            {props.text}
                        </h5>

                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem
