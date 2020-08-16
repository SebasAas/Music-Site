import React from "react"
import ContentLoader from "react-content-loader"

const AlbumLoader = (props) => (
  <ContentLoader
    speed={1}
    width="100%"
    height="600"
    backgroundColor="transparent"
    foregroundColor="rgba(0,0,0,0.4)"
    {...props}
  >
    <rect x="7" y="10" rx="0" ry="0" width="100%" height="260" />
    <rect x="7" y="290" rx="3" ry="3" width="100%" height="55" />
  </ContentLoader>
)

export default AlbumLoader;