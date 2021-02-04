import React from 'react'
import CardItemP from './CardItemP';
import './CardsP.css';


function ProductCards() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItemP
                            src='https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/23d0c93d901842379ab8ab4a012819ab_9366/Real_Madrid_20-21_Home_Jersey_White_FQ7486_01_laydown.jpg'
                            text='Made from 100% recycled polyester, it provides comfort and acces to easily move around.'
                            label='Real Madrid Home Jersey'
                            path='/products'
                        />

                        <CardItemP
                            src= "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/48dbcd9454ca4735af53ab7400cf1bc4_9366/Manchester_United_20-21_Home_Jersey_Red_FM4292_01_laydown.jpg"
                            text=' The New Manchester United jersey with your choice of Number and name on the back
                            '
                            label='Manchester United Home Jersey'
                            path='/products' />
                        <CardItemP
                            src='https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/fcb4e19ac678495abd87ab4f00a6d478_9366/FC_Bayern_20-21_Away_Jersey_Grey_FR4020_01_laydown.jpg'
                            text='The gray-on-gray design helps you wear it on and off the pitch
                           '
                            label='2020/21 FC BAYERN MUNICH AWAY'
                            path='/products' />
                        <CardItemP
                            src='https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/6ca097fdc87e4087a0b8ab1a0116075c_9366/FC_Bayern_Home_Jersey_Red_FI6201_01_laydown.jpg'
                            text='Show your Bayern Pride with Ribbed V-neck 50% polyester Jersey
                           '
                            label='FC BAYERN HOME JERSEY'
                            path='/products' />
                    </ul>
                </div>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItemP
                            src='https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/f4fe82d4dffc47ae9297ab6700b0cc6f_9366/Arsenal_20-21_Away_Jersey_White_FH7812_01_laydown.jpg'
                            text='Built for everyday comfort and style. 51% Polyester and 49% recycled polyester doubleknit
                            '
                            label='2020 Arsenal FC Away'
                            path='/products' />
                        <CardItemP
                            src='https://images.footballfanatics.com/manchester-city/manchester-city-home-shirt-2020-21_ss4_p-12014287+u-1h0c9x7zhod9c4jnxjvu+v-ba2904f212614aa29448e3d7882ac168.jpg?_hv=1&w=340'
                            text='Show your city pride on and off the pitch. 97% polyester and DryCELL
                            '
                            label='2020-21 Manchester City Kit(Male)'
                            path='/products' />
                        <CardItemP
                            src='https://dks.scene7.com/is/image/GolfGalaxy/AT7946-163_WhiteRed_INS?wid=1500&fmt=pjpeg'
                            text='Made of soft synthetic material. Wraps your foot comfortably to provide better passes and shot
                            '
                            label='Nike Superfly Soccer Cleats'
                            path='/products' />
                        <CardItemP
                            src='https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/72b621c3001445ed9f16ab1f00cfc960_9366/Juventus_Home_Jersey_White_EI9900_01_laydown.jpg'
                            text='This years Jersey reinterprets Juves Black and white stripes. 100% recycled polyester tricot.'
                            label='2020-21 Juventus Home Jersey'
                            path='/products' />
                    </ul>
                </div>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItemP
                            src='https://images.footballfanatics.com/manchester-city/manchester-city-away-shirt-2020-21_ss4_p-12017058+u-rmmfs23vk2vaz0ghtuvh+v-0520f114db2845b0aca502ad5c0fbc06.jpg?_hv=1&w=340'
                            text='Inspired by citys architecture made 100% polyester. Available in Small Medium Learge and XL'
                            label='2020-21 Manchester City Away(Male)'
                            path='/products' />
                        <CardItemP
                            src='https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/dd004ad1768840acb273aa990178dc5e_9366/Colombia_Away_Jersey_Blue_FI5297_01_laydown.jpg'
                            text='Soft, Moisture-absorbing fabric keeps you active and dry. Regular Fit.Ribbed V-neck'
                            label='Colombia Away Jersey'
                            path='/products' />
                        <CardItemP
                            src='https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/79ec3007-b69c-403f-8b79-b61a17141c1d/goalkeeper-match-soccer-gloves-r2xsJw.jpg'
                            text='Comfortable gloves that have foam for cushioning and smooth surface'
                            label='Nike Goalkeeper Gloves'
                            path='/products' />
                        <CardItemP
                            src='https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/b8ac9ee5f327463baab7a98c01161ba4_9366/copa-zone-cushion-4-socks.jpg'
                            text='Dri-Fit keeps you cool and dry for better performance'
                            label='Addidas Soccer Socks'
                            path='/products' />
                    </ul>
                </div>
               
            </div>
        </div >
    )
}

export default ProductCards