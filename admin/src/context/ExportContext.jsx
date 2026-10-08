import React, { createContext, useContext } from "react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";


const ExportContext = createContext();


export const ExportProvider = ({children}) => {


    const copyTable = (data) => {

        const text = data.map(row =>
            Object.values(row).join("\t")
        ).join("\n");


        navigator.clipboard.writeText(text);

        alert("Copied to clipboard");

    };



    const exportExcel = (data, fileName="export") => {


        const worksheet = XLSX.utils.json_to_sheet(data);


        const workbook = XLSX.utils.book_new();


        XLSX.utils.book_append_sheet(
            workbook,
            worksheet,
            "Sheet1"
        );


        XLSX.writeFile(
            workbook,
            `${fileName}.xlsx`
        );

    };



    const exportCSV = (data,fileName="export") => {


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


        const link=document.createElement("a");

        link.href=url;
        link.download=`${fileName}.csv`;

        link.click();

    };



    const exportPDF = (
        data,
        columns,
        fileName="export"
    )=>{


        const doc = new jsPDF();


        doc.autoTable({

            head:[
                columns
            ],

            body:data.map(row=>Object.values(row))

        });


        doc.save(
            `${fileName}.pdf`
        );

    };



    const printTable = ()=>{

        window.print();

    };



    return (

        <ExportContext.Provider
        value={{
            copyTable,
            exportExcel,
            exportCSV,
            exportPDF,
            printTable
        }}
        >

        {children}

        </ExportContext.Provider>

    );

};



export const useExport = ()=>useContext(ExportContext);