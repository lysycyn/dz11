import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

export default decl({
    block: 'App',
    elem: 'Header',
    tag: 'header',
    content() {
        return (
            <Fragment>
                <img srcSet="img/zen_logo@2x.png 800w, img/zen_logo@3x.png 1200w"  alt="Яндекс Дзен" src="/img/zen_logo.png"/>
            </Fragment>
        );
    }
});
