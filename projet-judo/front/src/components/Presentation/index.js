import React from 'react';
import PropTypes from 'prop-types';
import UserCard from './UserCard';
import UserCardStaff from './UserCardStaff';

import Header from '../../containers/Header';
import Footer from '../Footer';

import './style.scss';
import dojo from './Dojo.jpg';

const Presentation = ({ list }) => {
    return (
    <div>
        <Header/>
    <div className="presentation">
        <div className="presentation__story">
            <div className="presentation__story__content">
                <h2 className="presentation__story__content__title">Histoire du Club</h2>
                <div className="presentation__story__content__img-text">
                    <img className="presentation__story__content__img-text__dojo img-fluid" src={dojo}/>
                    <p className="presentation__story__content__img-text__text">Cupcake ipsum dolor sit. Amet candy apple pie toffee soufflé tiramisu gummies apple pie. Bonbon cake bear claw pie ice cream cake wafer lollipop. Lollipop gingerbread oat cake sesame snaps caramels ice cream. Danish cake cupcake cheesecake carrot cake. Pastry topping jelly beans. Biscuit candy canes cheesecake. Oat cake icing apple pie marzipan lollipop brownie pudding pie soufflé. Candy canes caramels sweet roll carrot cake candy chocolate halvah. Dessert dragée bonbon candy canes brownie icing croissant soufflé soufflé. Sweet roll toffee muffin apple pie halvah. Cake cheesecake halvah topping liquorice chocolate cake ice cream macaroon oat cake. Chupa chups tart jujubes icing jelly cheesecake tart marshmallow.

                    Jelly sweet roll jujubes bonbon apple pie. Cotton candy cake tiramisu. Chocolate bar pie muffin cupcake muffin jujubes chocolate bar donut. Dessert cookie bear claw. Carrot cake jelly-o lollipop caramels oat cake. Jelly-o fruitcake chocolate pie gummi bears. Sugar plum icing chocolate bar donut jelly beans caramels lemon drops candy canes powder. Marshmallow powder dragée marzipan ice cream. Gingerbread ice cream cookie donut dragée cheesecake danish topping. Lemon drops apple pie marzipan bear claw biscuit lollipop lemon drops ice cream. Biscuit chocolate cake cake brownie bear claw donut chocolate jelly beans chocolate. Caramels lollipop cookie bear claw.

                    Candy caramels dragée wafer. Liquorice powder macaroon dessert cheesecake. Pudding croissant jelly danish macaroon lollipop jelly lollipop. Wafer gummi bears danish cupcake marzipan pie gummi bears. Tiramisu gummi bears cheesecake. Gummi bears apple pie soufflé candy canes candy canes. Marshmallow bonbon marzipan icing. Candy canes donut pastry cake donut pastry soufflé marzipan. Ice cream lemon drops soufflé bonbon lollipop fruitcake halvah macaroon gummi bears. Bonbon gingerbread danish. Dragée croissant croissant caramels chocolate bar. Macaroon chocolate bar muffin jujubes apple pie chocolate chupa chups. Icing fruitcake pudding dessert.

                    Pudding candy cookie cake gummies. Toffee wafer soufflé ice cream powder gingerbread. Danish wafer oat cake dessert pudding. Pudding marzipan macaroon sweet roll. Chocolate jelly liquorice toffee. Topping chupa chups fruitcake powder topping. Oat cake icing toffee bear claw sweet. Liquorice fruitcake candy canes. Cheesecake ice cream candy canes danish. Gummi bears jelly-o lemon drops pudding topping icing tootsie roll icing biscuit. Sweet roll jelly-o brownie. Lollipop tootsie roll chocolate bar gingerbread jelly-o chocolate tiramisu. Sweet jelly beans dessert fruitcake tootsie roll dessert bonbon. Topping liquorice brownie ice cream.

                    Ice cream jujubes tiramisu brownie tiramisu cake. Dessert jelly-o liquorice liquorice jelly. Sesame snaps cake wafer icing ice cream ice cream jelly dragée. Gingerbread sugar plum soufflé tiramisu ice cream. Macaroon lollipop lollipop carrot cake tart cookie. Gummies cake gummi bears soufflé ice cream. Fruitcake caramels tootsie roll topping. Donut tootsie roll candy canes sweet roll candy canes sweet roll danish. Gingerbread chocolate bar gingerbread chocolate bar. Cake soufflé pastry bonbon pudding chocolate cake muffin. Croissant bonbon candy sweet roll candy cake jelly beans. Bear claw candy canes tootsie roll tootsie roll lollipop dessert muffin icing pie. Icing chocolate lollipop croissant.</p>
                </div>
            </div>
        </div>
        <div className="presentation__member">

            <div className="presentation__member__container">
                <div className="presentation__member__container__scroll">
                    <h2 className="presentation__member__container__scroll__title">Nos Licenciés</h2>
                    <div className="presentation__member__container__scroll__list">
                        {
                            list.map((card) => (
                                <UserCard key={card.id} {...card} />
                            ))
                        }                                   
                    </div>
                </div>               
            </div>

            <div className="presentation__member__container">
                <div className="presentation__member__container__scroll">
                    <h2 className="presentation__member__container__scroll__title">Notre staff</h2>
                    <div className="presentation__member__container__scroll__list">
                        {
                            list.map((card) => (
                                <UserCardStaff key={card.id} {...card} />
                            ))
                        }                                    
                    </div>
                </div>               
            </div>
        </div>
    </div>
      <Footer/>
    </div>
    );
}

Presentation.propTypes = {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }),
    ).isRequired,
};

export default Presentation;