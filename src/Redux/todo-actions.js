import { todoAction } from './TodoSlice'

export const fetchTodoLists = () => {
	return async dispatch => {
		const fetchList = async () => {
			const response = await fetch('http://44.226.145.213:5000/todo')

			if (!response.ok) {
				throw new Error('Could not fetch Data')
			}

			const data = await response.json()
			return data
		}

		try {
			const todoData = await fetchList()
			dispatch(todoAction.fetchList(todoData))
		} catch (error) {
			throw new Error('Fetching Post is Filed')
		}
	}
}

export const addTodo = todoData => {
	console.log(todoData)
	return async dispatch => {
		const addTodo = async () => {
			const response = await fetch('http://44.226.145.213:5000/todo', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					...todoData
				})
			})

			if (!response.ok) {
				throw new Error('Could not fetch Data')
			}

			const data = await response.json()

			return data.todo
		}

		try {
			const todoData = await addTodo()
			dispatch(todoAction.addTodo({ ...todoData }))
		} catch (error) {
			throw new Error('Add Post  is Filed')
		}
	}
}

export const deleteTodo = id => {
	return async dispatch => {
		const todo = async () => {
			const response = await fetch(`http://44.226.145.213:5000/todo/${id}`, {
				method: 'DELETE'
			})

			if (!response.ok) {
				throw new Error('Could not fetch Data')
			}

			const data = await response.json()

			return data.todo
		}
		console.log(todo)
		// try{
		//     const todoData = await todo();
		//     dispatch(todoAction.addTodo({...todoData}))
		//  }
		//  catch(error){
		//     throw new Error('Add Post  is Filed')
		//  }
	}
}

export const viewTodo = id => {
	return async dispatch => {
		const viewTodo = async () => {
			const response = await fetch(`http://44.226.145.213:5000/todo/${id}`)

			if (!response.ok) {
				throw new Error('Could not fetch Data')
			}

			const data = await response.json()

			return data.todo
		}

		try {
			const todoData = await viewTodo()
			dispatch(todoAction.viewTodo({ ...todoData }))
		} catch (error) {
			throw new Error('Add Post  is Filed')
		}
	}
}

export const editTodo = id => {
	return async dispatch => {
		const todo = async () => {
			const response = await fetch(`http://44.226.145.213:5000/todo/${id}`)

			if (!response.ok) {
				throw new Error('Could not fetch Data')
			}

			const data = await response.json()

			return data.todo
		}

		try {
			const todoData = await todo()
			dispatch(todoAction.editTodo({ ...todoData }))
		} catch (error) {
			throw new Error('Add Post  is Filed')
		}
	}
}
