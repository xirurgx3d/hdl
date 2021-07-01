import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from "./login"


Enzyme.configure({ adapter: new Adapter() });

describe('log', () => {
    it('test',()=>{
        const log = shallow(<Login />)
    })
})
