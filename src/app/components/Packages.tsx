"use client"
import React, { useState } from 'react'
import Webpackages from './Enviroment/Webpackages'
import Logopackages from './Enviroment/Logopackages';

const Packages: React.FC = () => {
const [activeTab, setActiveTab] = useState('Tab1');

  return (
    <>
        <div className="package_pg px-[15px]">
            <div className="max-w-7xl my-14 mx-auto">
                <div className="tabs-container">
                    <div className="tabs-buttons flex justify-center mt-14 gap-5">
                        <button className={activeTab === 'Tab1' ? "active" : ""} onClick={() => setActiveTab('Tab1')}>Website</button>
                        <button className={activeTab === 'Tab2' ? "active" : ""} onClick={() => setActiveTab('Tab2')}>Logo</button>
                        <button className={activeTab === 'Tab3' ? "active" : ""} onClick={() => setActiveTab('Tab3')}>App Development</button>
                    </div>
                    <div className="tabs-content">
                        {activeTab === 'Tab1' && (
                            <Webpackages />
                        )}
                        {activeTab === 'Tab2' && (
                            <Logopackages/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Packages