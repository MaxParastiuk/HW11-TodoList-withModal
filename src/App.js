import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store/store";
import Todo from "./pages/Todo/Todo";
import TodosDialog from "./components/TodosDialog";
import AppHeader from "./components/commons/AppHeader";

function App() {
	return (
		<Router>
			<Provider store={store}>
				<AppHeader />
				<Routes>
					<Route path={"/"} element={<Todo />}>
						<Route path='create' element={<TodosDialog />} />
					</Route>
				</Routes>
			</Provider>
		</Router>
	);
}

export default App;
