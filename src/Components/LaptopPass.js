import React, { useState } from 'react'
import { format} from "date-fns";

const DATA = [
    {
        employeeName:"V, Karthick",
        employeeId:2104199,
        assetId:"LTIN469934",
        serialNo:"5CD316D02Z",
        model:"Hewlett-Packard/Helwlett-packard HP EliteBook 640 14 inch G9 Notebook PC"
    },
    {
        employeeName:"Manikandan, R S",
        employeeId:2129476,
        assetId:"LTIN448344",
        serialNo:"5CD30433GK",
        model:"Hewlett-Packard/Helwlett-packard HP ProBook 640 G8 Notebook PC"
    }
]
export default function LaptopPass() {

    const [toggle,setToggle] = useState(0)

    const onClickHandler = ()=>{
        let temp = (toggle + 1) % DATA.length;
        setToggle(temp)
    }
    
    return (
        <main onClick={onClickHandler}>
            <section className="employee-details-box">
                <div className="employee-name-id-box mb-3">
                    <div className="employee-name-box">
                        <div className="sub-title mb-2">Employee Name</div>
                        <div className="value">{DATA[toggle].employeeName}</div>
                    </div>
                    <div className="employee-id-box">
                        <div className="sub-title mb-2">Employee ID</div>
                        <div className="value">{DATA[toggle].employeeId}</div>
                    </div>
                </div>
                <div className="employee-location-box">
                    <div className="location-box">
                        <div className="sub-title mb-2">Location</div>
                        <div className="value">Techno Campus Office (TCO)STPI</div>
                    </div>
                </div>
            </section>
            <section className="laptop-details-box">
                <div className="model-box mb-3">
                    <div className="sub-title mb-2">Make / Model</div>
                    <div className="value">{DATA[toggle].model}</div>
                </div>
                <div className="serial-asset-box mb-4">
                    <div className="serial-box">
                        <div className="sub-title mb-2">Serial No:</div>
                        <div className="value">{DATA[toggle].serialNo}</div>
                    </div>
                    <div className="Asset-box">
                        <div className="sub-title mb-2">Asset No:</div>
                        <div className="value">{DATA[toggle].assetId}</div>
                    </div>
                </div>
                <div className="compliance-box mb-3">
                    <div className="sub-title mb-2">Asset Compliance Status</div>
                    <div className="value green">Compliant</div>
                </div>
                <div className="date-box">
                    <div className="sub-title mb-2">Current Date</div>
                    <div className="value">{format(new Date(), "MM-dd-yyyy")}</div>
                </div>
            </section>
        </main>
    )
}
