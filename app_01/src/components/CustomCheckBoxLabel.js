export default function CustomCheckBoxLabel(props){
    return(
       <div className={`col-${props.col} mb-3`}>
        <input class="form-check-input" id="txtNovidade" type="checkbox" />
        <label class="form-check-label ms-1" htmlFor={props.id}>Novidade</label>          
      </div>
        
    )

}