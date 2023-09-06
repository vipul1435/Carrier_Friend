import React from 'react'
import TableData from 'components/admin/TableData/TableData'
import { useGetJobsQuery } from 'store/api';
import TableSkeleton from 'components/admin/TableData/TableSkeleton';
import { useUpdateJobMutation } from 'store/api';
const Rejected = () => {
  const [updateJob]=useUpdateJobMutation();
  const [query,setQuery] = React.useState("status=rejected");
  const {data,isLoading} = useGetJobsQuery(query);
  return (
    <div>
     {
        isLoading ? <TableSkeleton></TableSkeleton> : <TableData data={data} updateJob={updateJob}></TableData>
     }
    </div>
  )
}

export default Rejected
