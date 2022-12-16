function Card({item,handletocard ,carditems}){
    return(
        <div className="col-lg-4 mb-2">
        <div class="card" style={{width:"14rem"}}>
<img src="https://picsum.photos/200/150" class="card-img-top" alt="..."/>
<div class="card-body">
<h5 class="card-title">{item.title}</h5>
<p class="card-text">{item.price}</p>
        <button disabled={carditems.some((obj) => obj.id=== item.id) }onClick={()=>{handletocard(item)}} href="#" class="btn btn-primary">Add to card</button>
</div>
</div>
        </div>

    )
}
export default Card