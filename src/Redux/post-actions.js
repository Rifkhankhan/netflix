import { postActions } from './postSlice'

export const fetchPosts = () => {
	return async dispatch => {
		const fetchPosts = async () => {
			const response = await fetch('http://44.226.145.213:5000/post')

			if (!response.ok) {
				throw new Error('Could not fetch Data')
			}

			const data = await response.json()
			return data
		}

		try {
			const postData = await fetchPosts()
			dispatch(postActions.fetchPosts(postData))
		} catch (error) {
			throw new Error('Fetching Post is Filed')
		}
	}
}

export const addPost = postData => {
	return async dispatch => {
		const addPost = async () => {
			const response = await fetch('http://44.226.145.213:5000/post', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					...postData
				})
			})

			if (!response.ok) {
				throw new Error('Could not fetch Data')
			}

			const data = await response.json()

			return data.post
		}

		try {
			const postData = await addPost()
			dispatch(postActions.addPost(postData))
		} catch (error) {
			throw new Error('Add Post  is Filed')
		}
	}
}
