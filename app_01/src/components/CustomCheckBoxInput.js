export default function CustomCheckBoxInput(props){
    return(
        <div className={`col-${props.col} mb-3`}>
        <input class="form-check-input" id="txtDisponivel" type="checkbox" />
        <label class="form-check-label ms-1" htmlFor={props.id}>Disponível</label>          
      </div>  
    )

}