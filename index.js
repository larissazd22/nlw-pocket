const { select } = require('@inquirer/prompts')
const start = async () => {

  while(true){

    const opcao = await select({
      message: "Menu >",
      choices: [
        {
          name: "Cadastrar meta",
          value: "cadastar"
        },
        {
          name: "Listar metas",
          value: "Listar "
        },
        {
          name:"Sair",
          value: "sair"
        }
      ]
    })


    switch(opcao) {
      case "cadastrar":
      console.log("Vamos cadastrar")
      break
      case "listar":
        console.log("Vamos listar")
        break
        case "sair":
          console.log("Até a próxima!")
          return
    }
  }
}

start();