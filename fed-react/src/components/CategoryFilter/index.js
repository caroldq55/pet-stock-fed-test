import React from 'react';
import './index.css'

class FilterDropdown extends React.Component {

    // dispatch setFilter here when user changes a different type
    onChange = (filter) => {
        this.props.handleFilter(filter);
    };

    render() {
        return (
            <div className="filter-category">
                {this.props.filterOptions.map((item) =>
                    <button
                        className={'category-btn'}
                        key={item.name}
                        onClick={() => this.onChange(item.slug)}
                    >
                        {item.name}
                    </button>
                )}
                <button className={'category-btn'} onClick={() => this.onChange('')}>
                    View All
                </button>
            </div>
        )
    }
}

export default FilterDropdown;
