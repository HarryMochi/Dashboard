import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable"
import"./Users.scss"
import { userRows } from "../../data";
import Add from "../../components/add/Add";
import { useState } from "react";




const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    
    
    {
      field: "verified",
      headerName: "Status",
      width: 200,
      type: "boolean",
    },
    {
        field: 'Insert email',
        headerName: 'Email',
        
        width: 300,
        editable: true,
      },
    {
        field:'Insert Phone Number',
        headerName: 'Number',
    
        width: 300,
        editable: true,
      },
    
    
    
    {
      field: 'Insert full name',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 300,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
    
    
    
  ];
  
 
const Users = () => {
  const [open,setOpen] = useState(false)
    return (
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                <button onClick={()=>setOpen(true)}>Add New Users</button>
            </div>
            <DataTable slug="users" columns={columns} rows={userRows}/>
            {open && <Add slug="user" columns={columns} setOpen={setOpen}/>}
        </div>
        
    )
}


export default Users