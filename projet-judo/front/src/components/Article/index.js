import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

import './style.scss';
import kimono from './kimono.jpg'

const Article = () => (
    <div className="article">
        <Header/>
        <div className="article__div">
        <img className="article__div__image" src={kimono}/>
        </div>
        <div className="article__text">
            <div className="article__text__tag">Tag</div>
            <h2 className="article__text__title">Titre article</h2>
            <p className="article__text__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, cupiditate veniam? Officiis, quae nulla nobis neque repudiandae blanditiis veniam voluptatibus. Sapiente nam, quam nihil non labore dignissimos totam error commodi velit nesciunt harum aliquam. Natus quibusdam beatae, molestiae cumque, veniam nostrum quis enim et illo nesciunt laudantium quae atque sed excepturi ullam fuga aperiam! Maxime porro optio quo ratione, at labore fugit quas totam, facilis praesentium atque perferendis repellendus consectetur voluptas, sint ipsam placeat assumenda quam eum magni. Molestiae consequatur quas tempore ratione voluptatibus possimus deserunt provident magnam facilis voluptate distinctio, ipsum fuga, adipisci excepturi consequuntur? Labore, accusantium excepturi! Qui est necessitatibus magnam praesentium. Omnis iste id voluptates quae hic maiores quos incidunt quasi dolorem commodi. Consectetur eaque eum dolores id sequi earum inventore, est necessitatibus alias natus obcaecati fugiat iusto quis assumenda, maiores laudantium nisi mollitia, fugit illum odio aliquid nesciunt nulla odit! Eaque dolores quaerat accusantium impedit in dolore mollitia possimus molestiae error et molestias odit nemo vero harum est incidunt animi sequi rem provident, numquam quae doloribus eos magnam aperiam! Magnam nulla impedit beatae reiciendis dignissimos dolorem odio earum? Nobis, soluta dignissimos numquam, tenetur corporis error excepturi, itaque commodi tempora maiores doloribus. Quia mollitia minima fugiat dolore!
            </p>
            <p className="article__text__authorDate">Auteur - date</p>

        </div>
        <Footer/>
    </div>
);

export default Article;