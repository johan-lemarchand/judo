import React from 'react';

import './style.scss';

const Sponsors = ({ list }) => (

  <div className="row">
    {list.map((sponsor) => (
      <div key={sponsor.id} className="example-1 card_sponsor">
        <div className="wrapper_sponsors">
          <div className="data">
            <div className="content">
              <h1 className="title-sponsor">{sponsor.title}</h1>
              <p className="title-sponsors">{sponsor.content}</p>
              <p className="title-sponsors">{sponsor.address}</p>
              <p className="title-sponsors">{sponsor.telephone}</p>
            </div>

          </div>
        </div>

      </div>))}
  </div>



);

export default Sponsors;