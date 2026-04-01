import { useEffect, useState } from "react"

export default function useAllServices() {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch("/data/services.json")
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return [services]
}