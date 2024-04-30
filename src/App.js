import UserComponent from './components/usercomponent'
import UiComponent from './components/uicomponent'

function App() {
  return (
    <div>
      <UserComponent/>
      <UiComponent list={[]}/>
    </div>
  );
}

export default App;
