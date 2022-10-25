import react from 'react'
import axios from 'axios'




function clicked (comp, el) {
  var test = {
    widget: comp,
    element: el,
    time: JSON.stringify(Date.now())
  }
  // axios.post('/interactions', test)
  // .then((response)=> {
  //   console.log(response, ' Response');
  // })
  // .catch((err)=> {
  //   console.log(err);
  // })

}


export default clicked;