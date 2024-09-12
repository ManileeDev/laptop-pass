import React from 'react'
import { format} from "date-fns";
export default function LaptopPass() {
    return (
        <main>
            <section className="employee-details-box">
                <div className="employee-name-id-box mb-3">
                    <div className="employee-name-box">
                        <div className="sub-title mb-2">Employee Name</div>
                        <div className="value">V, Karthick</div>
                    </div>
                    <div className="employee-id-box">
                        <div className="sub-title mb-2">Employee ID</div>
                        <div className="value">2104199</div>
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
                    <div className="value">Hewlett-Packard/Helwlett-packard HP EliteBook 640 14 inch G9 Notebook PC</div>
                </div>
                <div className="serial-asset-box mb-4">
                    <div className="serial-box">
                        <div className="sub-title mb-2">Serial No:</div>
                        <div className="value">5CD316D02Z</div>
                    </div>
                    <div className="Asset-box">
                        <div className="sub-title mb-2">Asset No:</div>
                        <div className="value">LTIN469934</div>
                    </div>
                </div>
                <div className="compliance-box mb-3">
                    <div className="sub-title mb-2">Asset Compliance Status</div>
                    <div className="value green">Compliant</div>
                </div>
                <div className="date-box">
                    <div className="sub-title mb-2">Current Date</div>
                    <div className="value">{format(new Date(), "dd-MM-yyyy")}</div>
                </div>
            </section>
        </main>
    )
}
