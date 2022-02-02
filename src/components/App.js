import "bootstrap/dist/css/bootstrap.min.css";

import { Greeting } from './Greeting'
import { Profile } from './Profile'
import { ToDoList } from './ToDoList'
import { EmotionMeter } from './EmotionMeter'
 
// Não se esqueça de importar os componentes!

function App() {
  return (
    <div className="container mt-5 mb-5 col-6">
      {/* Não se esqueça de invocar seus componentes aqui! */}
      <small>Interpolação de variáveis</small>

      <Greeting name = "Bruno" />

      <small>Imagens</small>
      <hr />

      <Profile />

      <small>Renderização de listas</small>
      <hr />

      <ToDoList />
 
      <small>Renderização condicional</small>
      <hr />

      <EmotionMeter
        type = "HAPPY"
      />

    </div>
  );
}

export default App;
