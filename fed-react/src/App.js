import React from 'react';
import {connect} from 'react-redux';
import CategoryFilter from "./components/CategoryFilter";
import ProductsList from "./components/ProductsList";
import './App.css';
import {getProducts, setFilter} from './actions';
import selectors from './selectors';

class App extends React.Component {
  // loading products
  componentDidMount() {
    this.props.handleGetProducts();
  }

  render() {
    const {loading, products, filteredList, handleFilter, categories} = this.props;

    // get options in the filter dropdown

    return (
        <div className="App">
          <h1>PETstock FED Test</h1>
          <CategoryFilter filterOptions={categories} handleFilter={handleFilter} />
          {
            loading &&
            <div className="spinner-border App-spin" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          }
          <p>Found <strong>{filteredList.length}</strong> results</p>
          <ProductsList list={filteredList}/>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.get('loading'),
    products: state.get('products'),
    categories: state.get('categories'),
    filteredList: selectors(state.get('filter'), state.get('products')),
    filter: state.get('filter'),
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    handleGetProducts: () => dispatch(getProducts()),
    handleFilter: (filter) => dispatch(setFilter(filter)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

