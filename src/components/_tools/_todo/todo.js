import React from 'react'

export default () => (
    <todo>
        <div className="row">
            <div className={`col nopadding`}>
                TODO (0 / 3) <button>+</button> Title: <input type="text" /> Remark: <input type="text" />
            </div>
        </div>
        <div className="row">
            <div className={`col nopadding`}>
                <input type="checkbox" /> todo x 1 <button>i</button> <button>?!</button> <button>-</button><br/>
                <input type="checkbox" /> todo x 2 <button>i</button> <button>?!</button> <button>-</button><br/>
                <input type="checkbox" /> todo x 3 <button>i</button> <button>?!</button> <button>-</button><br/>
            </div>
        </div>
    </todo>
)