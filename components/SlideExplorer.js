import React from 'react';
import styled from "styled-components/native";
import Carousel, { Pagination } from 'react-native-snap-carousel';

export default class SlideExplorer extends React.Component {

    constructor(props){
        super();
        this.state = {
            errors: []
        };
        this.props = props;
        this._carousel = {};
        this.init();
    }

    init(){
        this.state = {
            videos: [
                {
                    id: "WpIAc9by5iU",
                    thumbnail: "http://s14004.pcdn.co/wp-content/uploads/2015/12/loja-destaque-1280-x-500px.jpg",
                }, {
                    id: "sNPnbI1arSE",
                    thumbnail: "https://nomeslegais.com/wp-content/uploads/2017/10/nomes-para-lojas-de-roupas.png",
                }, {
                    id: "VOgFZfRVaww",
                    thumbnail: "http://decoraclick.com.br/wp-content/uploads/2015/11/image-144.jpg",
                }, {
                    id: "VOgFZfRVaww",
                    thumbnail: "http://s2.glbimg.com/z12cBCO8xVm8nM12J-ke9UhdebY=/560x350/e.glbimg.com/og/ed/f/original/2015/10/14/ap3xeey-jsd53jbktxr0k1cb7xewyhhwh2lzsz9yzdoc.jpg",
                }
            ]
        };
    }

    get pagination () {
        const { videos, activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={videos.length}
                activeDotIndex={activeSlide}
                // containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: '#c7c7c7'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }

    _renderItem = ( {item, index} ) => {
        return (
            <ThumbnailBackgroundView>
                <CurrentVideoImage source={{ uri: item.thumbnail }} />
            </ThumbnailBackgroundView>
        );
    };

    render = () => {

        return (

            <CarouselBackgroundView>

                <Carousel
                    ref={ (c) => { this._carousel = c; } }
                    data={this.state.videos}
                    renderItem={this._renderItem.bind(this)}
                    sliderWidth={360}
                    itemWidth={256}
                    layout={'default'}
                    firstItem={0}
                    onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                />
                { this.pagination }
            </CarouselBackgroundView>

        );
    }
}

const CurrentVideoImage = styled.Image`
  top: 50;
  box-shadow: 5px 10px;
  width: 256;
  height: 200;
  border-radius: 10;
`;

const ThumbnailBackgroundView = styled.View`
  justify-content: center;
  align-items: center;
  width: 256;
`;

const CarouselBackgroundView = styled.View`
  background-color: white;
  height: 320;
  width: 100%;
`