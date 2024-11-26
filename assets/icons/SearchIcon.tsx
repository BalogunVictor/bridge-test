import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M16.9773 18.1779L10.7923 11.993C10.3015 12.3857 9.73697 12.6966 9.09884 12.9256C8.46071 13.1547 7.78168 13.2692 7.06174 13.2692C5.27825 13.2692 3.769 12.6514 2.53397 11.4157C1.29895 10.18 0.681113 8.67079 0.680459 6.88796C0.679804 5.10513 1.29764 3.59588 2.53397 2.3602C3.77031 1.12452 5.27956 0.506683 7.06174 0.506683C8.84391 0.506683 10.3535 1.12452 11.5905 2.3602C12.8275 3.59588 13.445 5.10513 13.443 6.88796C13.443 7.6079 13.3285 8.28693 13.0994 8.92506C12.8703 9.56319 12.5595 10.1277 12.1668 10.6186L18.3517 16.8035L16.9773 18.1779ZM7.06174 11.3058C8.28891 11.3058 9.33216 10.8764 10.1915 10.0177C11.0509 9.15904 11.4802 8.11579 11.4795 6.88796C11.4789 5.66014 11.0495 4.61721 10.1915 3.75917C9.33347 2.90114 8.29021 2.47146 7.06174 2.47015C5.83326 2.46884 4.79033 2.89852 3.93295 3.75917C3.07557 4.61983 2.64589 5.66276 2.64393 6.88796C2.64197 8.11317 3.07164 9.15642 3.93295 10.0177C4.79426 10.879 5.83719 11.3084 7.06174 11.3058Z"
      fill={props.color}
    />
  </Svg>
);
export default SvgComponent;
