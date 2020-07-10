import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './style.scss';

const NewsCard2 = ({title, picture, content, createdAt}) => {

    return(
        <div className="card card-color-1">
            <div className="border"></div>
            <img src={`http://54.166.4.90/projet-judo/back/public/uploads/articles/${picture.filePath}`} />
            <h1>{title}</h1>
            <p hidden id='text-content-article'>{content}</p>
            <p>{moment(createdAt).format('DD MMMM YYYY')}</p>
        </div>
    );
}

NewsCard2.propTypes = {
    title: PropTypes.string.isRequired,
    picture: PropTypes.arrayOf(
        PropTypes.shape({
          filPath: PropTypes.string.isRequired,
        }),
      ).isRequired,
    content: PropTypes.string.isRequired,
};

export default NewsCard2;