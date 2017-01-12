import React from 'react';

/**
 * Class representing Home page
 *
 * @export
 * @class Home
 */
export default class Home extends React.Component {
  /**
   * Creates an instance of Home.
   *
   * @param {Object} props Data required to construct a Home object
   * @memberOf Home
   */
  constructor(props) {
    super(props);

    /**
     * @type {object}
     */
    this.state = {};
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    return (
      <div className="background-style">
        <h1>Hello Kudo Engineer</h1>
      </div>
    );
  }
}
