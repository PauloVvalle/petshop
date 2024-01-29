"use server"
import axios, { AxiosResponse } from "axios"

const apiUrl = process.env.NEXT_PUBLIC_BACKEND
const fetchProducts = async () => {
  const response = await axios.get(`${apiUrl}/products`);
  return response.data;
}

const fetchProduct = async (id: string) => {
  try {
    const response = await fetch(`${apiUrl}/products/${id}`);
    const product = await response.json();
    return product;
  } catch (error) {
    console.error('Erro ao buscar o produto', error);
    return [];
  }
};

export const updateProduct = async (id: string, data: object) => {
  try {
      console.log(id, data)
      console.log(`${apiUrl}/products/${id}`)
      const response = await axios.put(`${apiUrl}/products/${id}`, data,{
      headers: {
          'Content-Type': 'application/json',
      },
      });
      return response.status === 200
  } catch (error) {
      console.error('Erro ao atualizar o produto', error);
      return false;
  }
  };

export const createProduct = async (data: object) => {
  console.log("Criando produto")

  try {
    const response = await axios.post(`${apiUrl}/products`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })

    return response.data
  } catch (error) {
    console.error("Erro ao criar o produto", error)
    return false
  }
}

const fetchUsers = async () => {
  const response = await axios.get(`${apiUrl}/api/users`);
  return response.data;
}

// export const fetchUser = async (id: string) => {
//   try {
//     const response = await axios.get(`${apiUrl}/api/users/${id}`);
//     const usario = response.data;
//     return usario;
//   } catch (error) {
//     console.error('Erro ao buscar o produto', error);
//     return [];
//   }
// };

export const fetchUser = async (id: string) => {
  try {
    const response = await axios.get(`${apiUrl}/api/users/${id}`);
    const user = response.data;
    return user;
  } catch (error) {
    console.error('Erro ao buscar o produto', error);
    return [];
  }
};



export const updateUser = async (id: string, data: object) => {
 try {
  console.log(id, data)
  console.log(`${apiUrl}/api/users/${id}`)
  const response = await axios.put(`${apiUrl}/api/users/${id}`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
    return response.data
  } catch (error) {
    console.error('Resposta da API (post): ', error);
    return false
}
}

export const CreateUser = async (id: string, data: object) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}/api/users`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('Resposta da API (post): ', response.data);
    return response.data
  } catch (error) {
    console.error(error);
  }
}
export const deleteUser = async (Id: string) => {
  console.log('deletando id', Id)
try {
const response = await axios.delete(`${apiUrl}/api/users/${Id}`);
return response.status === 200; // Retorna true se a exclusão for bem-sucedida, false caso contrário
} catch (error) {
console.error('Erro ao deletar o usuario', error);
return false; // Retorna false se ocorrer um erro
}
};

const deleteProduct = async (Id: string) => {
      console.log('deletando id', Id)
  try {
    const response = await axios.delete(`${apiUrl}/products/${Id}`);
    return response.status === 200; // Retorna true se a exclusão for bem-sucedida, false caso contrário
  } catch (error) {
    console.error('Erro ao deletar o produto', error);
    return false; // Retorna false se ocorrer um erro
  }
};
// const fetchProductByName = async (title: string) => {
//   try {
//     const response = await axios.get(`${apiUrl}?title=${title}`);
//     if (response.data && response.data.length > 0) {
//       return response.data[0]; // Retorna o primeiro produto que corresponde ao título
//     } else {
//       return null; // Retorna null se nenhum produto corresponder ao título
//     }
//   } catch (error) {
//     console.error('Erro ao buscar o produto', error);
//     return null;
//   }
// };



// const fetchProductByName = async (title: string) => {
//   try {
//     const response = await axios.get(`${apiUrl}/products/${title}`);
//     if (response.data && response.data.length > 0) {
//       console.log(response)
//       return response.data[0]; // Retorna o primeiro produto que corresponde ao nome
//     } else {
//       return null; // Retorna null se nenhum produto corresponder ao nome
//     }
//   } catch (error) {
//     console.error('Erro ao buscar o produto', error);
//     return null;
//   }
// };

export const deleteProductByName = async (title: string): Promise<boolean> => {
  // Primeiro, buscamos todos os produtos
  const productId = 'id';
  const products = await fetchProduct(productId);

  // Se os produtos foram buscados com sucesso
  if (products) {
    // Encontramos o produto que corresponde ao título
    const product = products.find((product: { title: string; }) => product.title === title);

    // Se o produto existir, tentamos deletá-lo
    if (product) {
      const deleted = await deleteProduct(product._id);
      if (deleted) {
        console.log('Produto deletado com sucesso');
        return true; // Retorna true se a exclusão for bem-sucedida
      } else {
        console.log('Erro ao deletar o produto');
        return false; // Retorna false se a exclusão falhar
      }
    } else {
      console.log('Produto não encontrado');
      return false; // Retorna false se o produto não for encontrado
    }
  } else {
    console.error('Erro ao buscar os produtos');
    return false; // Retorna false se ocorrer um erro ao buscar os produtos
  }
};


// const deleteProductByName = async (title: string) => {
//   // Primeiro, buscamos o produto pelo título
//   const product = await fetchProductByName(title);

//   // Se o produto existir, tentamos deletá-lo
//   if (product) {
//     const deleted = await deleteProduct(product._id);

//     if (deleted) {
//       console.log('Produto deletado com sucesso');
//       return true; // Retorna true se a exclusão for bem-sucedida
//     } else {
//       console.log('Erro ao deletar o produto');
//       return false; // Retorna false se a exclusão falhar
//     }
//   } else {
//     console.log('Produto não encontrado');
//     return false; // Retorna false se o produto não for encontrado
//   }
// };


// const deleteProduct = async (productId: any) => {
//     try {
//       const response = await fetch(`${apiUrl}/products/${productId}`, {
//         method: 'DELETE',
//       });
  
//       if (response.status === 204) {
//         // A exclusão foi bem-sucedida (status 204)
//         return true;
//       } else {
//         // Trate os erros, se necessário
//         return false;
//       }
//     } catch (error) {
//       // Trate os erros de rede ou outras exceções, se necessário
//       return false;
//     }
// };
  
// export const searchProducts = async (searchTerm: any) => {
// try {
//     if (searchTerm) {
//     const response = await fetch(`${apiUrl}/products/search/${searchTerm}`);
//     if (response.ok) {
//         const data = await response.json();
//         return data;
//     }
//     }
//     return [];
//     } catch (error) {
//         console.error('Erro ao buscar produtos', error);
//         return [];
//     }
// };

export const searchProducts = async (searchTerm: string) => {
  try {
    console.log("Searching", searchTerm)

    if (searchTerm) {
      const response = await axios.get(
        `${apiUrl}/products/search/${searchTerm}`
      )

      if (response.status === 200) {
        const data = response.data
        return data
      }
    }

    return []
  } catch (error) {
    console.error("Erro ao buscar produtos", error)
    return []
  }
}




const fetchCategoriesOrderByName = async () => {
  try {
    const response = await fetch(`${apiUrl}/categories`);
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error('Erro ao buscar categorias', error);
    return [];
  }
};

// const fetchProduct = async (_id: any) => {
//     try {
//       const response = await fetch(`${apiUrl}/products/${_id}`);
//       if (response.ok) {
//         const products = await response.json();
//         return products;
//       }
//     } catch (error) {
//       console.error('Erro ao buscar o produto', error);
//     }
//     return [];
//   };
  


const fetchCategories = async () => {
  try {
    const response = await fetch(`${apiUrl}/categories`);
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error('Erro ao buscar categorias', error);
    return [];
  }
};

// const createProduct = async (data: object) => {
//   try {
//     console.log('alo')
//     const response = await fetch('http://localhost:4000/products', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });

//     return response.ok;
//   } catch (error) {
//     console.error('Erro ao criar o produto', error);
//     return false;
//   }
// };



const applyDiscount = async (productId: any) => {
  try {
    const response = await fetch(`http://localhost:3000/products/${productId}/discount`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ discount: 0.1 }), // 10% de desconto
    });

    if (response.ok) {
      // Desconto aplicado com sucesso (status 200)
      return true;
    } else {
      // Trate os erros, se necessário
      return false;
    }
  } catch (error) {
    // Trate os erros de rede ou outras exceções, se necessário
    return false;
  }
};

const updateRating = async (productId: any, rating: any) => {
  try {
    const response = await fetch(`http://localhost:3000/products/${productId}/rating`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "rating" : rating }),
    });

    return response.ok;
  } catch (error) {
    console.error('Erro ao atualizar a avaliação do produto', error);
    return false;
  }
};

const deleteCategory = async (categoryId: any) => {
  try {
    const response = await fetch(`${apiUrl}/categories/${categoryId}`, {
      method: 'DELETE',
    });

    if (response.status === 204) {
      // A exclusão foi bem-sucedida (status 204)
      return true;
    } else {
      // Trate os erros, se necessário
      return false;
    }
  } catch (error) {
    // Trate os erros de rede ou outras exceções, se necessário
    return false;
  }
};




// const fetchProductsPaginated = async (page: any, pageSize: any) => {
//   try {
//     const response = await fetch(`http://localhost:3000/products/paginated?page=${page}&pageSize=${pageSize}`);
//     const productsData = await response.json();
//     return productsData;
//   } catch (error) {
//     throw new Error('Erro ao obter produtos paginados. Detalhes: ' + error.message);
//   }
// };

interface ResponseData {
  [key: string]: any;
}

const authUser = async (data: Record<string, unknown>): Promise<ResponseData | false> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Erro ao logar');
    }

    const responseData: ResponseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Erro ao logar', error);
    return false;
  }
}

const getUser = async (userId: any, jwt: any) => {
  try {
    const response = await fetch(`http://localhost:3000/api/user/${userId}`, {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    })

    if (!response.ok) {
      throw new Error(`Erro ao logar: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Erro ao logar', error);
    return false;
  }
}

async function fetchData(): Promise<void> {
  const response = await fetch(`${apiUrl}/admin`, {
    headers: {
      // Substitua 'username' pelo nome de usuário real
      username: 'username',
    },
  });

  if (response.status === 403) {
    console.error('Acesso negado. Apenas administradores podem acessar esta página.');
    return;
  }

  if (!response.ok) {
    console.error('Ocorreu um erro ao buscar os dados.');
    return;
  }

  // Analise a resposta como JSON
  const data = await response.json();

  // Acesse a propriedade user_role
  const userRole = data.userInfo.user_role;
  console.log(`O papel do usuário é ${userRole}`);

  // Acesse a propriedade user_username
  const username = data.userInfo.user_username;
  console.log(`O nome de usuário é ${username}`);
}

fetchData();



export { authUser, fetchData, fetchCategoriesOrderByName, deleteProduct, fetchProduct, fetchProducts, fetchUsers, };