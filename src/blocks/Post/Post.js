import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import IconLike from 'b:IconLike';
import IconActions from 'b:IconActions';

import Image from 'e:Image';
import 'e:Title';
import 'e:Social';
import 'e:Actions';
import 'e:Like';
import 'e:Description';
import 'e:Author';
import 'e:Footer';

//
// import 'e:Header';

// import 'e:ChannelName m:black';
import 'm:size=s';
import 'm:size=m';
import 'm:size=l';


export default decl({
    block: 'Post',
    willInit() {
        this.noImage = this.props.size === 's' && !this.props.image;
    },
    mods() {
        return {
            size: this.props.size,
            'noImage': this.noImage,
        };
    },
    content() {
        return (
            <Fragment>
                <Bem elem="Title">
                    <h2 style={{ color: this.props.titleColor }}>{ this.props.title }</h2>
                </Bem>
                { this.props.image &&
                    <Image image={ this.props.image }></Image>
                }
                { this.props.description &&
                    <Bem elem="Description">
                        <p>{ this.props.description }</p>
                    </Bem>
                }
                <Bem elem="Footer">
                  <Bem elem="Author" tag="span"
                      mods={{ black: this.isSmallAndTextOnly }}>
                      { this.props.channelName }
                  </Bem>
                  <Bem elem="Social">
                    <Bem elem="Actions" tag="button">
                      <IconActions/>
                    </Bem>
                    <Bem elem="Like" tag="button">
                      <IconLike/>
                    </Bem>
                  </Bem>
                </Bem>
            </Fragment>
        );
    },
});
