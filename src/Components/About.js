import React, {useState} from "react";

export default function About(props) {
  //  const [myStyle, setMyStyle] =useState({
  //       color: 'black',
  //       backgroundColor: '#e5e5e5'                         // dark tha
  //   })

    // const [btnText, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = () =>{
    //     if(myStyle.color === '#e5e5e5'){                    // white
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: '#111827'                    // dark
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: '#e5e5e5',                 //white 
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    // }

    let myStyle = {
      color: props.mode ==='dark'?'white':'black',
      backgroundColor: props.mode ==='dark'?'black':'white'
    }

  return (
    <div className="container my-2 " style={myStyle}>
      <h2>About Us</h2>
      <hr className="bg-light" />

      <ul className="list-unstyled">
        <li className="media">
          <img src="..." className="mr-3" alt="img not found" />
          <div className="media-body">
            <h5 className="mt-0 mb-1">List-based media object</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </li>
<hr className="bg-light" />
        <li className="media my-4">
          <img src="..." className="mr-3" alt="img not found" />
          <div className="media-body">
            <h5 className="mt-0 mb-1">List-based media object</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </li>
<hr className="bg-light"/>
        <li className="media my-4">
          <img src="..." className="mr-3" alt="img not found" />
          <div className="media-body">
            <h5 className="mt-0 mb-1">List-based media object</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </li>
<hr className="bg-light" />
        <li className="media">
          <img src="..." className="mr-3" alt="img not found" />
          <div className="media-body">
            <h5 className="mt-0 mb-1">List-based media object</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </li>
      </ul>

      {/* <div className="container  b-5">
        <button onClick={toggleStyle} type="button" className="btn btn-dark">
         {btnText}
        </button>
      </div> */}
    </div>
  );
}
 