import React, { useState, useEffect } from 'react';
import { Link, useLocation,useMatch,useNavigate  } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";


const AddSubCategoryPage = ()=> {
const navigate 											= useNavigate();
const [categoryName, setCategoryName]					= useState('');
const [categoryUrl, setCategoryUrl]						= useState('');
const [sortOrder, setSortOrder]							= useState(0);
const [sortDescription, setSortDescription]				= useState('');
const [seoTitle, setSeoTitle]							= useState('');
const [seoDescription, setSeoDescription]				= useState('');
const [seoKeywords, setSeoKeywords]						= useState('');
const [seoSerachKeywords, setSeoSerachKeywords]			= useState('');
const [seoImageAltAttribute, setSeoImageAltAttribute]	= useState('');
const [imgFolder, setImgFolder]							= useState('products/');
const [banner1, setBanner1]								= useState('');
const [banner2, setBanner2]								= useState('');
const [bannerImage1, setBannerImage1] 					= useState(null);
const [bannerImage2, setBannerImage2] 					= useState(null);
const [status, setStatus] 								= useState(1);

const handleSubCategory = async () => {
    try 
    {	
		const data = new FormData();
        data.append("categoryName", categoryName);
        data.append("categoryUrl", categoryUrl);
        data.append("sortOrder", sortOrder);
        data.append("sortDescription", sortDescription);
        data.append("seoTitle", seoTitle);
        data.append("seoDescription", seoDescription);
        data.append("seoKeywords", seoKeywords);
        data.append("seoSerachKeywords", seoSerachKeywords);
        data.append("seoImageAltAttribute", seoImageAltAttribute);
        data.append("imgFolder", imgFolder);
        data.append("status", status);
		
		// old images
        data.append("banner1Old", banner1);
        data.append("banner2Old", banner2);

        // new uploaded images
        if(bannerImage1){
            data.append("banner1", bannerImage1);
        }

        if(bannerImage2){
            data.append("banner2", bannerImage2);
        }

		const response = await fetch(`http://localhost:5000/api/category`, {
			method  	: 'POST',
			body		: data
		});
		
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const result = await response.json();
		if(result.status == true){
			 toast.success(result.message);
			 navigate("/category");
		}
	} 
    catch (err) 
    {
        console.log(err);
		toast.error(err);
    }
};


const handleCheckbox = (e) => {
	setIsChecked(e.target.checked);
};


return (<>	







<main class="dashboard-content">
<div class="container-fluid px-3 px-lg-4 py-4">




<form class="panel needs-validation" novalidate>

<div class="panel-header">
<h2 class="h5 mb-1 section-title">
<i class="bi bi-ui-checks-grid" aria-hidden="true"></i>
<span>Category Form</span>
</h2>
</div>


<div class="row g-3">
<div class="col-md-5 marb20">
<label class="form-label" for="formName">Category Name</label>
<input class="form-control" id="formName" value={categoryName} onChange={(e)=>setCategoryName(e.target.value)} required/>
</div>
<div class="col-md-5 marb20">
<label class="form-label" for="formName">Category Url</label>
<input class="form-control" id="formName" value={categoryUrl} onChange={(e)=>setCategoryUrl(e.target.value)} required/>
</div>
<div class="col-md-2 marb20">
<label class="form-label" for="formName">Sort Order</label>
<input class="form-control" id="formName" value={sortOrder} onChange={(e)=>setSortOrder(e.target.value)} required/>
</div>
</div>


<div class="row g-3">
<div class="col-md-12 marb20">
<label class="form-label" for="formName">Category Description</label>
<textarea class="form-control" id="sortDescription" value={sortDescription} onChange={(e)=>setSortDescription(e.target.value)}/>
</div>
</div>

<div class="row g-3 mart20 marb20">
<div class="col-md-5">
<hr></hr>
</div>
<div class="col-md-2">
<div class="center">SEO PART</div>
</div>
<div class="col-md-5">
<hr></hr>
</div>
</div>

<div class="row g-3">
<div class="col-md-12 marb20">
<label class="form-label" for="formName">Category Seo Title</label>
<textarea  class="form-control" value={seoTitle} onChange={(e)=>setSeoTitle(e.target.value)}/>
</div>
</div>



<div class="row g-3">
<div class="col-md-12 marb20">
<label class="form-label" for="formName">Category Description</label>
<textarea  class="form-control" value={seoDescription} onChange={(e)=>setSeoDescription(e.target.value)}/>
</div>
</div>


<div class="row g-3">
<div class="col-md-12 marb20">
<label class="form-label" for="formName">Category Seo Keywords</label>
<textarea  class="form-control" value={seoKeywords} onChange={(e)=>setSeoKeywords(e.target.value)}/>
</div>
</div>



<div class="row g-3">
<div class="col-md-12 marb20">
<label class="form-label" for="formName">Image Alt Attributes</label>
<input class="form-control" id="formName" value={seoImageAltAttribute} onChange={(e)=>setSeoImageAltAttribute(e.target.value)}/>
</div>
</div>


<div class="row g-3">
<div class="col-md-12 marb20">
<label class="form-label" for="formName">Category Searching Keywords (Seprated with Comma(,))</label>
<textarea  class="form-control" value={seoSerachKeywords} onChange={(e)=>setSeoSerachKeywords(e.target.value)}/>
</div>
</div>



<div class="row g-3">

<div class="col-md-3 marb20">
<label class="form-label" for="formName">Image One</label>
<img  src={bannerImage1  ? URL.createObjectURL(bannerImage1) : `http://localhost:5000/public/${imgFolder}${banner1}`} class="form-control" alt="image"/>
<input class="form-control" type="file"  onChange={(e)=>setBannerImage1(e.target.files[0])}/>
</div>


<div class="col-md-3 marb20">
<label class="form-label" for="formName">Image Two</label>
<img src={bannerImage2  ? URL.createObjectURL(bannerImage2) : `http://localhost:5000/public/${imgFolder}${banner2}`} class="form-control" alt="image"/>
<input class="form-control" type="file"  onChange={(e)=>setBannerImage2(e.target.files[0])}/>
</div>

</div>


    <div class="form-check mb-4"><input class="form-check-input" 
	checked={status === 1}
    onChange={(e)=> 
        setStatus(e.target.checked ? 1 : 0)
    }
	type="checkbox" id="terms"/>
	<label class="form-check-label" for="terms">Active</label>
	</div>
    

<div class="row g-3">
<div class="col-md-4 marb20">
<input  onClick={handleSubCategory} type="button" name="submit" value="Submit" class="btn btn-primary"/>
</div>
</div>



</form>
</div>      
</main>
</>);
}
export default AddSubCategoryPage;
	