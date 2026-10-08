import React, { useState, useEffect } from 'react';
import { Link, useLocation,useMatch,useNavigate  } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import TinyEditor from "../components/TinyEditor";


const TermsAndCondition = ()=> {


const [description, setDescription]							= useState('');
const [descriptionUSD, setDescriptionUSD]					= useState('');
const [descriptionGYMNIC, setDescriptionGYMNIC]				= useState('');



const handleTermsAndCondition = async () => {
    try {
        const response = await fetch(
            `http://localhost:5000/api/terms-and-condition/1`,
            {
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    description: description,
                    descriptionUSD: descriptionUSD,
                    descriptionGYMNIC: descriptionGYMNIC,
                    status:1
                })
            }
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        if(result.status === true){
            toast.success(result.message);
        }
    } 
	catch(err){
        console.log(err);
    }

};

const getTermsAndCondition = async () => {
    try 
    {	
		const response = await fetch(`http://localhost:5000/api/terms-and-condition/1`, {
			method  : 'GET',
			headers : {
				'Content-Type': 'application/json',
			}
		});
		
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const result = await response.json();
		if(result.status == true){
			setDescription(result.data[0].content);
			setDescriptionUSD(result.data[0].contentforus);
			setDescriptionGYMNIC(result.data[0].contentforGYMNICINR);
		}
	} 
    catch (err) 
    {
        console.log(err);
    }
};

useEffect(() =>{
getTermsAndCondition();  
}, [1]);


return (<>	







<main class="dashboard-content">
<div class="container-fluid px-3 px-lg-4 py-4">

<div class="row g-3">
<div class="col-md-12 marb20">
<TinyEditor value={description} setValue={setDescription}/>
</div>
</div>


<div class="row g-3">
<div class="col-md-12 marb20">
<TinyEditor value={descriptionUSD} setValue={setDescriptionUSD}/>
</div>
</div>



<div class="row g-3">
<div class="col-md-12 marb20">
<TinyEditor value={descriptionGYMNIC} setValue={setDescriptionGYMNIC}/>
</div>
</div>


<div class="row g-3">
<div class="col-md-4 marb20">
<input  onClick={handleTermsAndCondition} type="button" name="submit" value="Submit" class="btn btn-primary"/>
</div>
</div>
</div>



</main>
</>);
}
export default TermsAndCondition;
