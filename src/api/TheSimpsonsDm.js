export const getCharacters = async () => {
	const response = await fetch("https://thesimpsonsapi.com/api/characters");
	const data = await response.json();

	// Verifica si data es un arreglo, si no, busca la propiedad que contenga el arreglo
	if (Array.isArray(data)) return data;

	// Retorna la propiedad correcta o un arreglo vacío para evitar errores
	return data.docs || data.data || data.results || [];
};