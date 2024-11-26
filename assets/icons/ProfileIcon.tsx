import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M8.5 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM8.5 20c3.866 0 7-1.79 7-4s-3.134-4-7-4-7 1.79-7 4 3.134 4 7 4Z"
    />
  </Svg>
);
export default SvgComponent;
