import React from 'react';
import {useQuery} from "react-query";
import {postRequest} from "../../config/axiosClient";

function Places() {

    const { data: regions } = useQuery(
        "regions",
        async () => await postRequest('/GetRegions'),
        { select: result => result.data.RegionsList.slice(0, 4) }
    )

    return (
        <>
            <div className="mt-3  px-4 md:px-12 mx-auto">
                <h2 className="font-semibold text-lg text-gray-800">Places Around you</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6">

                    {regions?.map(({region_id, region_name}) => (
                        <div key={region_id} className="md:flex mt-2">
                            <div className="w-40 h-32 md:h-40 md:w-48">
                                <img alt={region_name} className="w-full h-full object-cover rounded-2xl"
                                     src="/assets/images/LENA_WEBSITE_IMAGES/Rectangle 56 (2).jpg"/>
                            </div>
                            <div className="ml-1 mt-1.5 md:mt-0 md:ml-4">
                                <p className="text-sm md:text-base text-gray-800 font-medium">
                                    {region_name}
                                </p>
                                <p className="text-xs md:text-sm text-gray-600">
                                    24 Events
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Places;