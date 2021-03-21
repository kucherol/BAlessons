import React from "react";

const Body = () => {
  const stylesBody = { backgroundColor: "yellow", width: "100%", height: "70%", margin: "10px 0 10px 0", padding: "40px" };
  const stylesAside = { display: "inline-block", backgroundColor: "white",  width: "30%", height: "100%" };
  const stylesRight = { display: "inline-block", width: "60%", height: "100%" };
  const stylesCont = { backgroundColor: "white",  width: "100%", height: "100%" };


    <div style={stylesBody}>
        <aside style={stylesAside} className="aside">Aside</aside>
        <div style={stylesRight}>
            <p>Main</p>
            <div style={stylesCont} className="Content">Content</div>
        </div>
    </div>
};

export default Body;