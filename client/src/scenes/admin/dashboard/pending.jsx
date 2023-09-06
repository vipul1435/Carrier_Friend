import React from 'react'
import TableData from 'components/admin/TableData/TableData'
import { useGetJobsQuery } from 'store/api';
import TableSkeleton from 'components/admin/TableData/TableSkeleton';
import { useUpdateJobMutation } from 'store/api';
const Pending = () => {
  const [updateJob]=useUpdateJobMutation();
  const [query,setQuery] = React.useState("status=pending");
  const {data,isLoading} = useGetJobsQuery(query);
  return (
    <div>
     {
        isLoading ? <TableSkeleton></TableSkeleton> : <TableData data={data} updateJob={updateJob}></TableData>
     }
    </div>
  )
}

export default Pending
