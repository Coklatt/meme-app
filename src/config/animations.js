import { keyframes } from 'styled-components';

/**
 * Move element rapidly left and right
 */
const offset = 7;
const shake = keyframes`
0% {
    transform: translateX(0);
}
3% {
    transform: translateX(0);
}
6% {
    transform: translateX(-${offset}px);
}
9% {
    transform: translateX(0);
}
12% {
    transform: translateX(${offset}px);
}
15% {
    transform: translateX(0);
}
18% {
    transform: translateX(-${offset}px);
}
21% {
    transform: translateX(0);
}
24% {
    transform: translateX(${offset}px);
}
27% {
    transform: translateX(0);
}
`;

export { shake };
