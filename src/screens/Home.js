import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
// import Carousal from '../components/Carousal'

export default function Home() {

  const [search, setSearch] = useState("")
  const [foodCat, setfoodCat] = useState([])
  const [foodItem, setfoodItem] = useState([])

  const loadData = async () => {
    let response = await fetch("http://localhost:8000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }
    });
    response = await response.json();
    setfoodItem(response[0])
    setfoodCat(response[1])

    // console.log(response[0], response[1]);

  }

  useEffect(() => {
    loadData()

  }, [])

  return (
    <>
      <div><Navbar /></div>
      <div><style>
                {`
                    .carousel-image {
                        object-fit: contain !important;
                    }
                `}
            </style>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner" id="carousel">
                    <div className='carousel-caption' style={{ zIndex: "10" }}>
                        <div className="d-flex justify-content-center">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                            {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://media.istockphoto.com/id/520421898/photo/beef-steaks-on-the-grill.jpg?s=612x612&w=0&k=20&c=x66gAivz2_zG-E-I963_VwySZQrNHXjD2Q0PW3NXeL4=" className="d-block w-100 carousel-image" style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://media.istockphoto.com/id/2061716709/photo/grilled-rib-burger.jpg?s=612x612&w=0&k=20&c=QS37W9zjBE3GoOeR8ay3k_DS7oXPH07MBg-WHY5Joac=" className="d-block w-100 carousel-image" style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://media.istockphoto.com/id/502840530/photo/luxury-restaurant-table-on-sunset.jpg?s=612x612&w=0&k=20&c=KMVfVojQ0UmscMmj1S-Hd2trPlw2xEXpOyn9OyWT0Mw=" className="d-block w-100 carousel-image" style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> </div>
      <div className='container'>
        {
          foodCat !== []
            ? foodCat.map((data) => {
              return (<div className='row mb-3'>
                <div key={data._id} className='fs-3 m-3'>
                  {data.CategoryName}
                </div>
                <hr />
                {foodItem !== []
                  ? foodItem.filter((item) => (item.CategoryName === data.CategoryName && item.name.toLowerCase().includes(search.toLowerCase())))
                    .map(filterItems => {
                      return (
                        <div key={filterItems._id} className='col-12 col-md-6 col-lg-4'>
                          <Cards  foodItem={filterItems}
                            options={filterItems.options[0]}
                          > </Cards>
                        </div>
                      )
                    })
                  : <div>No Such Data Found</div>}
              </div>
              )
            })
            : ""
        }
      </div>
      <div><Footer /></div>
    </>
  )
}
