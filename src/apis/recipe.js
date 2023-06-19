const RECIPE_API = "https://restapi.fr/api/samrecipes"

export async function getRecipes(queryParam) {
  const response = await fetch(`${RECIPE_API}${queryParam && `?${queryParam}`}`)
  if (response.ok) {
    const body = await response.json()
    return Array.isArray(body) ? body : [body]
  } else {
    throw new Error("Error fetch recipes")
  }
}

export async function getRecipe(_id) {
  const response = await fetch(`${RECIPE_API}/${_id}`)
  if (response.ok) {
    return response.json()
  } else {
    throw new Error("Error fetch recipes")
  }
}

export async function deleteRecipes(_id) {
  const response = await fetch(`${RECIPE_API}/${_id}`, {
    method: "DELETE",
  })
  if (response.ok) {
    return response.json()
  } else {
    throw new Error("Error fetch one recipe")
  }
}

export async function updateRecipes(updatedRecipe) {
  const { _id, ...restRecipe } = updatedRecipe
  const response = await fetch(`${RECIPE_API}/${_id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(restRecipe),
  })
  if (response.ok) {
    return response.json()
  } else {
    throw new Error("Error update recipe")
  }
}

export async function createRecipes(newRecipe) {
  const response = await fetch(RECIPE_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newRecipe),
  })
  if (response.ok) {
    return response.json()
  } else {
    throw new Error("Error create recipe")
  }
}
