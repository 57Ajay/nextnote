
export default function NotFound({ params }:{ params:{id: string}}) {
  return ( 
    <div>No Post Found for {params.id}</div>
  )
}
