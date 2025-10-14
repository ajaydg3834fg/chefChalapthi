// gatsby-ssr.js
import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <meta key="theme-color" name="theme-color" content="#A94D2C" />,
    <link key="preconnect-yt" rel="preconnect" href="https://www.youtube.com" crossOrigin="anonymous" />,
    <link key="preconnect-ytimg" rel="preconnect" href="https://i.ytimg.com" crossOrigin="anonymous" />,
    <link key="preconnect-ig" rel="preconnect" href="https://www.instagram.com" crossOrigin="anonymous" />
  ]);
};
