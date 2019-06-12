import React from 'react';
import { Filters, mapStateToProps} from '../Filters';
import renderer from 'react-test-renderer';
import { storeState } from "./mocks";

describe('Filters', () => {
    let fakeFilters;
    let fakeUniqueTagList;

    const component = () => {
        return renderer.create(
            <Filters
                filters={fakeFilters}
                uniqueTagList={fakeUniqueTagList}
            />);
    };

    const renderComponent = () => component().toJSON();

    it('should be rendered correctly', () => {
        fakeFilters = Object.assign({}, mapStateToProps(storeState.mock1).filters);
        fakeUniqueTagList = [].concat(mapStateToProps(storeState.mock1).uniqueTagList);

        expect(renderComponent()).toMatchSnapshot();
    });

    it('should be rendered correctly', () => {
        fakeFilters = Object.assign({}, mapStateToProps(storeState.mock2).filters);
        fakeUniqueTagList = [].concat(mapStateToProps(storeState.mock2).uniqueTagList);

        expect(renderComponent()).toMatchSnapshot();
    });

    it('should be rendered correctly', () => {
        fakeFilters = Object.assign({}, mapStateToProps(storeState.mock3).filters);
        fakeUniqueTagList = [].concat(mapStateToProps(storeState.mock3).uniqueTagList);

        expect(renderComponent()).toMatchSnapshot();
    });

    it('should be rendered correctly', () => {
        fakeFilters = Object.assign({}, mapStateToProps(storeState.mock4).filters);
        fakeUniqueTagList = [].concat(mapStateToProps(storeState.mock4).uniqueTagList);

        expect(renderComponent()).toMatchSnapshot();
    });
});
