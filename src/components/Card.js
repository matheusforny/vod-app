import React from 'react';
import PropTypes from 'prop-types';

const Card = ({entry}) => {
    const {index, images, title, contents} = entry;
    return (
        <div id={`card-${index}`} className="card">
            <img src={images.url} alt="Imagem nao encontrada"/>
            <div className="details">
                <span className="index">{index+1}</span>
                <p className="location">
                    {title}<br />
                </p>
            </div>
        </div>
    )
}

Card.propTypes = {
    entry: PropTypes.object.isRequired
}

export default Card;