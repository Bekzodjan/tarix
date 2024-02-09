import { useEffect, useState } from 'react'
import './App.css'
import { Link, useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  useEffect(()=>{
    // navigate('https://karahaniid-dynasty-pt38ioo.gamma.site')
  },[])
  return (
    <>
    <iframe src='https://karahaniid-dynasty-pt38ioo.gamma.site' width={'100%'} height={'700px'} style={{overflow: 'hidden '}} frameborder="0"></iframe>
    </>
  )
}

export default App
