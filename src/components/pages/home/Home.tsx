import React from "react";

const Welcome = ({children}: {children: any}) => (
    <div>
        {children}
    </div>
);

const Home = ({children}: {children: any}) => (
  <div>
      {children}
  </div>
);

Home.Welcome = Welcome;

export {
    Home
}