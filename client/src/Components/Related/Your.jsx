import React from 'react';
import Cards from './Cards.jsx';

class Your extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},

    }
  }

  render() {
    if(this.props.length > 0) {
    console.log(this.props)
    return (<div>
      <h4>Your</h4><section>
        <ul className='test'>
      <Cards class='your'/>
      </ul>
      </section>
    </div>)
  } else {
  return (
    <div><h4>Your</h4>
    <div>Loading...</div>
    </div>
  )
}
  }
};

export default Your;