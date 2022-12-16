function Carditem({carditem ,remove}){
    return(
<li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">{carditem.title}</div>
      {carditem.price}
    </div>
    <button    onClick={()=>{remove(carditem)}} class="badge bg-primary rounded-pill">x</button>
  </li>
    )
}
export default Carditem