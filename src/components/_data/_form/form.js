import React, { useState } from "react";
import defaultStyle from './form.module.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <form>
            <div className="row">
                <div className={`col nopadding ${defaultStyle.default}`}>
                    POST FORM
                    <form method="post" action="">
                        <div className="row">
                            <div className="col">
                                Publish date: <DatePicker selected={startDate} onChange={date => setStartDate(date)} showTimeSelect dateFormat="MMMM d, yyyy h:mm aa" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                Access level: <select name="accessLevel" id="accessLevel">
                                    <option value="public">Public</option>
                                    <option value="private">Private</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                Tags: <input type="checkbox" /> A <input type="checkbox" /> B <input type="checkbox" /> C <input type="checkbox" /> D
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                Subtitle: <input type="text" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                Content: <textarea>XXX</textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button>add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </form>
    )
}