import Titulo from "@/components/Titulo";
import SubTitulo from "@/components/SubTitulo";
import CustomInputLabel from "@/components/CustomInputLabel";
import CustomTextAreaLabel from "@/components/CustomTextAreaLabel";
import CustomCheckBox from "@/components/CustomCheckBoxLabel";
import CustomCheckBoxLabel from "@/components/CustomCheckBoxLabel";
import CustomCheckBoxInput from "@/components/CustomCheckBoxInput";

export default function Home(){
  function salvarDados(props)
  {
    const dadosProduto = {
      Id : 0,
      Nome : document.getElementById('txtNome').value,
      Descricao : document.getElementById('txtDescricao').value,
      Imagem : document.getElementById('txtImagem').value,
      Preco : document.getElementById('txtPreco').value,
      Disponivel : document.getElementById('txtDisponivel').checked,
      Novidade : document.getElementById('txtNovidade').checked,
    }    

    fetch('https://localhost:7282/api/Produto', {
      method: "POST",
      body: JSON.stringify(dadosProduto),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))

    console.log(dadosProduto)
  }
  
  return (
    
    <div  className="container-fluid">
      <div className="row">
      


        <CustomInputLabel id="txtNome" texto="Nome" col="8"></CustomInputLabel>
        <CustomInputLabel id="txtPreco" texto="Preço" col="4"></CustomInputLabel>
        <CustomInputLabel id="txtImagem" texto="Imagem" col="12"></CustomInputLabel>
        <CustomTextAreaLabel id="txtDescricao" texto="Descrição" col="12"> </CustomTextAreaLabel>
        <CustomCheckBoxLabel id="txtNovidade" texto="Novidade" col="6"></CustomCheckBoxLabel>
        <CustomCheckBoxInput id="txtDisponivel" texto="Disponivel" col="6"></CustomCheckBoxInput>
        

    </div>
    <div class="col-12 mb-3">
          <button class="btn btn-primary" onClick={() => salvarDados()}>Salvar</button>
        </div>  

    </div>
  
  );
}
