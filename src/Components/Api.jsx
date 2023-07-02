import React,{useState,useEffect} from 'react'

export default function Api() {

  const[ipdata,setIPdata]=useState("")
  const actualDeta=async()=>{
    try {
        const res=await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
        const actualData=await res.json();
        console.log(actualData[0])
        setIPdata(actualData[0])
        
    } catch (error) {
      console.log(error)
    }
  }
   
  useEffect(() => {
   
    actualDeta()
  }, [])
  console.log(ipdata)
  return (
    <>
    <div className='container bg-primary'>
      
    
  <caption className="d-flex justify-content-center h1">Quotes</caption>
    <table className="table caption-top">
  <thead>
    <tr>
     
      <th className='h4 bg-warning' scope="col">Author name:</th>
      <th className='bg-danger text-white' scope="col">{ipdata.author}</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td className='h4 bg-warning'>Quotes:</td>
      <td className='bg-danger text-white'>{ipdata.quote}</td>
     
    </tr>
    
  </tbody>
</table>
</div>
    </>
  )
}
