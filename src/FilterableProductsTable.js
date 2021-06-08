import React, {Component} from 'react'
import ProductRow from './composants/ProductRow'
import ProductCategoryRow from './composants/ProductCategoryRow'




function ProductTable ({products, filterText, inStockOnly}){
    const rows = []
    let lastCategory = null
    
   
    products.forEach(product =>{
        if((inStockOnly && !product.stocked) || product.name.indexOf(filterText)){
            return
        }

        if(product.category !== lastCategory){
            lastCategory = product.category

            rows.push( <ProductCategoryRow key={lastCategory} category = {product.Category}  />)
        }
        
       rows.push(<ProductRow key={product.name} product={product} />)
        
    })
   
    return <table className="table">
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prix</th>
            </tr>
        
        </thead> 
        <tbody>{rows}</tbody>
    </table>
    
}

class SearchBar extends Component{
    constructor(props){
        super(props)
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
        this.handleInStockChange = this.handleInStockChange.bind(this)
    }

    handleFilterTextChange(e){

        this.props.onFilterTextChange(e.target.value)
    }

    handleInStockChange(e){
        this.props.onStockChange(e.target.checked)
    }


    render (){
        
        const {filterText, inStockOnly} =this.props
        return <div className="mb-3">
            <div className="form-group">
        <input type="text" className="form-control" placeholder="Rechercher" value={filterText} onChange = {this.handleFilterTextChange} />
            </div>
            <div className="form-check">
                <input type="checkbox" name="" id="stock" checked={inStockOnly} className="form-check-input" onChange = {this.handleInStockChange}  />
                <label htmlFor="stock" className="form-check-label">Produit en stock seulement</label>
            </div>
        </div>
    }
}

class FilterableProductsTable extends Component{
    constructor(props){
        super(props)
        this.state ={
            filterText: "",
            inStockOnly: false
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
        this.handleInStockChange = this.handleInStockChange.bind(this)
    }

    handleFilterTextChange(filterText){
         this.setState({filterText})
    }

    handleInStockChange(inStockOnly){
        this.setState({inStockOnly})
    }
   
    render (){
         const {products} = this.props
       
        return <React.Fragment>
           
            <SearchBar
            filterText= {this.state.filterText}
            inStockOnly= {this.state.inStockOnly}
            onFilterTextChange = {this.handleFilterTextChange}
            onStockChange ={this.handleInStockChange}
             />
            <ProductTable 
            products={products}
            filterText ={this.state.filterText}
            inStockOnly= {this.state.inStockOnly}
            
            />
        </React.Fragment>
        
    }
}

export default FilterableProductsTable