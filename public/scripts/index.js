/* eslint-disable */
async function changeTodo(id, finish) {
	await axios.patch(`http://localhost:3000/${id}`, { finish });
	window.location.href = '/';
}

async function removeTodo(id) {
	await axios.delete(`http://localhost:3000/${id}`);
	window.location.href = '/';
}
