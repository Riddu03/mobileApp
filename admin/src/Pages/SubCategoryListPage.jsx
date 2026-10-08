import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CommonDataTable from "../components/CommonDataTable";


const SubCategoryListPage = () => {
    const [categoryList,setCategoryList] = useState([]);
    const getCategory = async()=>{
        try{
            const response = await fetch("http://localhost:5000/api/category/with-subcategory",{
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

    const columns=[


        {
            name:"Sub Category Name",

            selector:(row)=>row.category_name,

            sortable:true
        },


        {
            name:"Status",

            selector:(row)=>
            row.status==1
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
            name:"Action",

            cell:(row)=>(

                <>

                <Link
                    className="btn btn-primary btn-sm me-2"
                    to={`/subcategory/${row.id}`}
                >
                    Edit
                </Link>


                <button className="btn btn-danger btn-sm">
                    Delete
                </button>

                </>

            )
        }


    ];






    return (

        <main className="dashboard-content">


        <div className="container-fluid px-3 px-lg-4 py-4">


        {
            categoryList.map((category)=>(


                <section 
                    className="panel mb-4"
                    key={category.id}
                >


                    <h4 className="mb-3">
                        {category.category_name}
                    </h4>



                    <CommonDataTable

                        columns={columns}

                        data={category.subcategories || []}

                        title={`${category.category_name} Sub Category List`}

                    />



                </section>


            ))
        }



        </div>


        </main>


    );

};


export default SubCategoryListPage;