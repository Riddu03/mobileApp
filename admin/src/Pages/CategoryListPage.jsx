import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useExport } from "../context/ExportContext";
import CommonDataTable from "../components/CommonDataTable";


const CategoryListPage = () => {
const [categoryList, setCategoryList] = useState([]);
const { exportCSV, exportExcel, exportPDF } = useExport();

const getCategory = async () => {

    try {

        const response = await fetch(
            "http://localhost:5000/api/category",
            {
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
            }
        );


        const result = await response.json();


        if(result.status === true)
        {
            setCategoryList(result.data);
        }


    }
    catch(error)
    {
        console.log(error);
    }

};



useEffect(()=>{

    getCategory();

},[]);





const formatDate = (dateString)=>{

    if(!dateString) return "";


    const date = new Date(dateString);


    return date.toLocaleString("en-IN",{

        day:"2-digit",
        month:"2-digit",
        year:"numeric",
        hour:"2-digit",
        minute:"2-digit",
        hour12:true

    });

};








const columns = [


{
    name:"Image",

    cell:(row)=>(

        <img

        src={`http://localhost:5000/public/${row.folder}${row.banner}`}

        width="60"

        height="60"

        alt="category"

        />

    )

},



{
    name:"Category Name",

    selector:(row)=>row.category_name,

    sortable:true

},




{
    name:"Status",

    selector:(row)=>
    
    row.status == 1
    ?
    "Active"
    :
    "De-Active",

    sortable:true

},




{
    name:"Sort Order",

    selector:(row)=>row.sort_order,

    sortable:true

},




{
    name:"Add Date",

    selector:(row)=>
    
    formatDate(row.add_date)

},




{
    name:"Last Update",

    selector:(row)=>
    
    formatDate(row.lastupdate_date)

},




{
    name:"Action",

    cell:(row)=>(

        <div>

        <Link

        className="btn btn-primary btn-sm me-2"

        to={`/category/${row.id}`}

        >

        Edit

        </Link>


        <button

        className="btn btn-danger btn-sm"

        >

        Delete

        </button>


        </div>

    )

}


];







return (

<main className="dashboard-content">


<div className="container-fluid px-3 px-lg-4 py-4">


<div class="page-heading">
<div class="page-heading-copy">
</div>
<div class="heading-actions">
<a class="btn btn-primary btn-sm" href="/add-category"><i class="bi bi-person-plus" aria-hidden="true"></i> Add</a></div>
</div>

<section className="panel">



<CommonDataTable

    columns={columns}

    data={categoryList}

    title="Category List"

/>


</section>



</div>


</main>


);


};


export default CategoryListPage;