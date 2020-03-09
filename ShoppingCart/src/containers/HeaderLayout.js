import React from "react";
import { Route } from "react-router-dom";
import Header from "../components/Header";

const HeaderedLayout = ({ ComponentToRender, ...rest }) => {
  return (  
    <Route
      {...rest}
      render={matchProps => (
        <div className="layout-headered">
          <Header {...rest} {...matchProps} />
          <ComponentToRender {...matchProps} />
        </div>
      )}
    />
  );
};

export default HeaderedLayout;
