import React from 'react';
import { decl } from 'bem-react-core';

export default decl({
    block: 'Post',
    elem: 'Image',
    content() {
        const [ imgName, ext ] = this.props.image.split('.');
        return (
            <picture>
                <source srcSet={ `${imgName}@3x.${ext}` } media="(min-width: 820px)"/>
                <source srcSet={ `${imgName}@2x.${ext}` } media="(min-width: 620px)"/>
                <source srcSet={ `${this.props.image} ${imgName}@2x.${ext} 2x` }/>
                <img src={ `${imgName}@2x.${ext}` } alt={imgName}/>
            </picture>
        )
    }
})
