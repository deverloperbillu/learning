"use client"
import React, { useState } from 'react'
import Websitepackagedata from './All_packagedata/Websitepackagedata';
import { IoCheckmarkOutline } from "react-icons/io5";


const Webpackages: React.FC = () => {
const [selectPackages, setSelectPackages] = useState<typeof Websitepackagedata[0] | null>(null);

const handlepackageclick = (packageId: string) => {
    const packing = Websitepackagedata.find(pkg => pkg.id === packageId);
    if(packing){
        setSelectPackages(packing);
    }else{
        setSelectPackages(null);
    }
};

const closePopup = (e: { preventDefault: () => void;}) => {
    e.preventDefault();
    setSelectPackages(null);
}
  return (
    <>
    <div className='package_area'>
        <div className='max-w-7xl my-14 mx-auto'>
            <div className='grid grid-cols-3 gap-4 mt-12'>
            {Websitepackagedata.map((pkg) => {
                return (
                <div className="single-item" key={pkg.id}>
                    <div className="info-box-content bg-[#eeeeee] border-solid border-[7px] border-[#243c5a]">
                        <h3 className='text-[#949494] mt-5 mb-2 text-[18px] uppercase font-semibold text-center max-w-[330px] m-auto'>{pkg.packageTitle}</h3>
                        <div className="packwrap flex justify-center items-center gap-2 bg-[#949494] text-center py-4">
                            <h5 className='font-medium text-lg'>From</h5>
                            <h2 className='text-[48px] font-bold'>{pkg.discountPrice}</h2>
                            <h4 className='flex flex-col text-[18px] font-normal m-0'><del>{pkg.originalPrice}</del>Only</h4>
                        </div>
                        <div className="info">
                            <div className="info-content h-[250px] py-2 mr-1">
                                <ul>
                                    {pkg.details.map((detail, index) => (
                                        <li className='flex items-center gap-1 text-[15px] text-[#000]' key={index}><IoCheckmarkOutline className='bg-[#000] text-[#fff] text-[18px] rounded-full' /> {detail}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="info_details block py-2 text-center border-solid border-t-[1px] border-[#ccc]">	
                                <p className='text-[14px] m-0 text-center text-[#000]'>ADD ON : $500 for 24 hours rush delivery</p>
                                <a className="portfolio-btn block text-[#000]" href="tel:978-415-9909"><small>Share your idea?</small> 978-415-9909</a>
                                <button className="custom_btn pkg_btn bg-[#949494] text-[#fff] mt-3 py-2 px-10 inline-block" onClick={() => handlepackageclick(pkg.id)}>Start</button>
                            </div>	
                        </div>
                    </div>
                </div>
                );
            })}
            </div>
            {selectPackages && (
                <div className='schedule-pop fixed top-0 left-0 w-full h-full'>
                    <div className='popup_body flex justify-center items-center h-full'>
                        <div className='popup_form relative bg-[#fff] py-4 px-5 max-w-[400px] h-[min-content] w-[400px]'>
                            <a href='#' className='cls-project absolute top-[0px] right-[-50px] inline-block w-[40px] h-[40px] rounded-full bg-white' onClick={closePopup}></a>
                            <div className='top_heading mb-2'>
                                <h2 className='uppercase text-[20px] m-0 text-[#000] text-center font-semibold'>{selectPackages.packageTitle}</h2>
                            </div>
                            <div className='click_form'>
                                <form>
                                    <div className='form_control'>
                                        <input type='text' id='your-name' name='form_name' placeholder='Your Name' className='w-full' required />
                                    </div>
                                    <div className='form_control'>
                                        <input type='tel' id='your-phone' name='form_phone' placeholder='Your Number' className='w-full' required />
                                    </div>
                                    <div className='form_control'>
                                        <input type='tel' id='your-email' name='form_email' placeholder='Your Email' className='w-full' required />
                                    </div>
                                    <div className='form_control'>
                                        <textarea id="message" name="message" className='w-full' placeholder='Your Messages'></textarea>
                                    </div>
                                    <div className='form_group'>
                                        <input type='hidden' className='showtitle' value={selectPackages.packageTitle} />
                                        <input type='hidden' className='showprice' value={selectPackages.discountPrice} />
                                    </div>
                                    <div className='form_btn'>
                                    <button type="submit" className='text-[#fff] text-sm font-normal block py-5 px-10 uppercase mt-4 bg-[#333] w-full'>Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
        
    </>
  )
}
export default Webpackages


