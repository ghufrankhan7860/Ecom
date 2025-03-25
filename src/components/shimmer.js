export const ShimmerCards = () =>{
    
    return(
        Array(20).fill("").map((e, index)=>(
            <div className="shimmer-card" key = {"shimmer-card-"+index}>

                <div className="shimmer-image"></div>
                <div className="shimmer-title"></div>
                <div className="shimmer-desc"></div>
            </div>
        ))
    )
}