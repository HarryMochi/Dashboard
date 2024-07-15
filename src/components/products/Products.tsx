import { useState } from "react";
import Add from "../add/Add";
import DataTable from "../dataTable/DataTable";
import "./products.scss";
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data";






/*import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable"
import"./Users.scss"
import { userRows } from "../../data";
import Add from "../../components/add/Add";
import { useState } from "react";*/


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    
    
    {
      field: "Upload image",
      headerName: "Image",
      width: 100,
      renderCell:(params) => {
        return <img src={params.row.img}/>
      },
    },
   
    {
        field:"Insert name of product",
        headerName: "Title",
    
        width: 250,
        type:"string",
      },
      {
        field: "Insert color",
        headerName: "Color",
        
        width: 150,
        type:"string",
      },
      {
        field: "price",
        headerName: "Price",
        
        width: 200,
        type:"string",
      },

      {
        field: "Insert brand",
        headerName: "Producer",
        
        width: 200,
        type:"string",
      },
      
      {
        field: "Insert creating date",
        headerName: "Created At",
        
        width: 200,
        type:"string",
      },
      {
        field: "Insert availability",
        headerName: "In Stock",
        
        width: 150,
        type:"boolean",
      },
    
    
  ];





const Products = () => {
  const [open,setOpen] = useState(false)
    return (
        <div className="products">
            <div className="info">
                <h1>Products</h1>
                <button onClick={()=>setOpen(true)}>Add New Products</button>
            </div>
            <DataTable slug="products" columns={columns} rows={products}/>
            {open && <Add slug="product" columns={columns} setOpen={setOpen}/>}
        </div>
        
    )
}
export default Products