import React from "react";

export default function Place(props) {
    console.log(props)
    return (
        <div className="flex items-center gap-5 py-5 max-w-md border-b-2 border-gray-100">
            <img src={"/" + props.imageUrl} alt="" className="w-32 h-44 rounded-md" />
            <div className="flex flex-col">
                <p className="flex text-xs items-center gap-3">
                    <span className="flex items-center gap-1 uppercase"><img src="/location-icon.png" alt="" className="w-3" />{props.location}</span>
                    <span><a href={props.googleMapsUrl} className="text-gray-300" target="blank">View on Google Maps</a></span>
                </p>
                <p className="font-bold text-2xl mt-1">{props.title}</p>
                <p className="font-bold text-xs mt-2">
                    <span>{props.startDate}</span> - <span>{props.endDate}</span>
                </p>
                <p className="mt-2 text-xs">{props.description}</p>
            </div>
        </div>
    )
}