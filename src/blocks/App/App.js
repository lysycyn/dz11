import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import Header from 'e:Header';
import 'e:Content';
import Post from 'b:Post';

export default decl({
  block: 'App',
  willInit() {
    this.state = {
      data: [],
    };
    fetch('data.json')
      .then(resp => {
        return resp.json();
      })
      .then(data => this.setState({ data }));
  },
  content() {
    return (
      <Fragment>
        <Header/>
        <Bem elem="Content">
          { this.state.data.length ? this.state.data.map((post, index) => {
            return <Post key={index} { ...post }></Post>
          }) : '' }
        </Bem>
      </Fragment>
    );
  }
});
