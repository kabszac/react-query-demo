import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const fetchEmail = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`)
}

const fetchCoursesByChannelId = (channelId) => {
    return axios.get(`http://localhost:4000/channels/${channelId}`)
}

const DependentQueriesPage = ({email}) => {
    const {data:user} = useQuery(['user', email], () => fetchEmail(email))
    const channelId = user?.data.channelId
    const {data:courses} = useQuery(['channels', channelId], () => fetchCoursesByChannelId(channelId), {
        enabled: !!channelId
    })

    console.log(courses)
    return (
        <div>
            DependentQueries
            <div>
                {
                    courses?.data.courses.map((course) => <div>{course} </div>)
                }
            </div>
        </div>
    );
};

export default DependentQueriesPage;