import {useState, useEffect} from "react"
import { useParams } from "react-router"
import { SWIGGY_SINGLE_RESTAURANT } from "../utils/constants"

const RestaurantPage = () => {

    const [resData, setResData] = useState(null)
    const {id} = useParams()

    const fetchRestaurantData = async () => {
        const data = await fetch(`${SWIGGY_SINGLE_RESTAURANT}${id}`)
        const jsonData = await data.json();
        console.log(jsonData?.data?.cards)
        setResData(jsonData?.data?.cards[2]?.card?.card?.info)
    }
    useEffect(() => {
        fetchRestaurantData()
    }, [])
    if(resData === null){
        return <h1>Loading...</h1>
    }

    return <div>
        <h1>{resData.name}</h1>
        <h2>{resData.cuisines.join(", ")}</h2>
        <div className="inline">
        <h3>{resData.avgRating}</h3>
        <h3>{resData.costForTwoMessage}</h3>
        </div>
        <h3>{resData.totalRatingsString}</h3>
    </div>
}

export default RestaurantPage