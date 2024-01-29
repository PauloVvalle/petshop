export interface Product {
    id: string;
    _id: string;
    customId: string;
    title: string;
    price: string;
    description: string;
    category: string;
    image: string;
    // rate: number;
    // count: number;
    parcel: string; // Adicione esta linha
    createdAt: string
    updatedAt: string
  }
  
 export type Category = {
    category_id: string;
    category_name: string;
  };
 export type User = {
  user_name: string;
  user_username: string;
  user_password: string;
  user_role: string;
  user_image: string;
  user_email: string;
  user_phone: string;
  user_city: string;
  user_street: string;
  user_number: number;
  user_cep: string;
  user_petname: string;
  user_pettype: string;
  user_vaccination_date: Date;
  id: string;
  _id: string;
  };

 export interface SelectProduct {
    produto: any; // substitua 'any' pelo tipo real do produto
    onEnvio: (produto: string) => void;
  }
 export interface SelectUser {
  usuarios: any; // substitua 'any' pelo tipo real do produto
    onEnvio: (user: string) => void;
  }

 export interface EditProduct extends Product, SelectProduct {
  onProdutoClick: (produto: string) => void;
}
 export interface EditUser extends User, SelectUser {
  onProdutoClick: (user: string) => void;
}
