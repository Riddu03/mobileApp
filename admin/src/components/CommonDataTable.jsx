import React, { useState } from "react";
import DataTable from "react-data-table-component";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";


const CommonDataTable = ({ columns, data = [], title }) => {

    const [search, setSearch] = useState("");


    // Search Filter
    const filteredData = data.filter((item) => {

        return Object.values(item)
            .join(" ")
            .toLowerCase()
            .includes(search.toLowerCase());

    });



    // Excel Export
    const exportExcel = () => {

        const worksheet = XLSX.utils.json_to_sheet(data);

        const workbook = XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(
            workbook,
            worksheet,
            "Data"
        );

        XLSX.writeFile(
            workbook,
            `${title}.xlsx`
        );

    };



    // CSV Export
    const exportCSV = () => {

        const worksheet = XLSX.utils.json_to_sheet(data);

        const csv = XLSX.utils.sheet_to_csv(
            worksheet
        );


        const blob = new Blob(
            [csv],
            {
                type:"text/csv"
            }
        );


        const url = URL.createObjectURL(blob);


        const link = document.createElement("a");

        link.href = url;

        link.download = `${title}.csv`;

        link.click();

        URL.revokeObjectURL(url);

    };




    // PDF Export
    const exportPDF = () => {

        const doc = new jsPDF();


        const headers = columns.map(
            col => col.name
        );


        const rows = data.map(row => {

            return columns.map(col => {

                if(typeof col.selector === "function")
                {
                    return col.selector(row);
                }

                return row[col.selector];

            });

        });


        doc.autoTable({

            head:[headers],

            body:rows

        });


        doc.save(
            `${title}.pdf`
        );

    };





    // Copy Data
    const copyData = () => {


        let text = data.map(row =>

            Object.values(row).join("\t")

        ).join("\n");


        navigator.clipboard.writeText(text);


        alert("Copied");

    };



    return (

        <div>
            <div className="panel-header d-flex justify-content-between">
                <h2 className="h5 section-title">
                    <i className="bi bi-table"></i> {title}
                </h2>
            </div>
			
<section class="row g-3 mt-1" aria-label="User summary">
<div class="col-12 col-sm-9 col-xl-9">
<button 
className="btn btn-secondary btn-sm"
onClick={copyData}>
Copy
</button>
<button 
className="btn btn-success btn-sm"
onClick={exportExcel}>
Excel
</button>
<button 
className="btn btn-info btn-sm"
onClick={exportCSV}>
CSV
</button>
<button 
className="btn btn-danger btn-sm"
onClick={exportPDF}>
PDF
</button>

</div>
<div class="col-12 col-sm-3 col-xl-3">
<input

className="form-control form-control-sm mb-3"

type="search"

placeholder={`Search ${title}`}

value={search}

onChange={
e=>setSearch(e.target.value)
}

/>

</div>
</section>



<div>
			
               

			

          
			</div>
			

            <DataTable

                
                columns={columns}

                data={filteredData}

                pagination

                sortable

                highlightOnHover

                striped

                fixedHeader

            />



        </div>

    );

};


export default CommonDataTable;