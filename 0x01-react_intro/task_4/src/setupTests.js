// setupTests.js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; // Change this line if using a different React version

configure({ adapter: new Adapter() });
