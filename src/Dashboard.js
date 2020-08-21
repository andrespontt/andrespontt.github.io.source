import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';

export default function Dashboard() {

    const [columns] = useState(
        [
            { title: 'State', field: 'state' },
            { title: 'Positive', field: 'positive', type: 'numeric' },
            { title: 'Death', field: 'death', type: 'numeric' }
        ]
    );

    const [data, setData] = useState(
        [ { "date": 20200819, "state": "AK", "positive": 5247, "negative": 305602, "pending": null, "hospitalizedCurrently": 56, "hospitalizedCumulative": null, "inIcuCurrently": null, "inIcuCumulative": null, "onVentilatorCurrently": 6, "onVentilatorCumulative": null, "recovered": 1501, "dataQualityGrade": "A", "lastUpdateEt": "8/19/2020 00:00", "dateModified": "2020-08-19T00:00:00Z", "checkTimeEt": "08/18 20:00", "death": 29 } ]
    );

    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/andrespontt/data/master/covid-current.json")
        .then(res => res.json())
        .then((result) => {
            setData(result);
        })
    },[]);

    return (
        <MaterialTable
            title="Covid"
            columns={columns}
            data={data}
            options={{
                pageSize: 8
            }}
        />
    );
}
