import React, { Component } from 'react';

import SearchBar from '.././ComponentFilter/SearchBar';
import ProductTable from '.././ComponentFilter/ProductTable';

import Test from './Test';
class FilterableProductTable extends Component {
    constructor(props) {
   super(props);
   this.state = {
     filterText: '',
     inStockOnly: false
   };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
 }
 handleFilterTextChange(filterText) {
   this.setState({
     filterText: filterText
   });
 }

 handleInStockChange(inStockOnly) {
   this.setState({
     inStockOnly: inStockOnly
   })
 }
  render() {
    return (
        <div>
         <SearchBar
           filterText={this.state.filterText}
           inStockOnly={this.state.inStockOnly}
           onFilterTextChange={this.handleFilterTextChange}
           onInStockChange={this.handleInStockChange}
         />
         <ProductTable
           products={this.props.products}
           filterText={this.state.filterText}
           inStockOnly={this.state.inStockOnly}
         />

         <Test name='fuck' age='12'/>
       </div>
    );
  }
}
export default FilterableProductTable;
