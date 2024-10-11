interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
// fetchProducts 함수는 비동기적으로 데이터를 가져오며, 그 결과는 Product 타입의 배열일 것임
// function fetchProducts(): Promise<Product[]> {
// }

// 이렇게 써도 되긴하는데, 좀 비효율적임
// function displayProductDetail(shoppingItem:
//   { id: number; name: string; price: number;}) {
// }


// 이렇게 따로 interface 정의 
interface ProductDetail {
  id: number;
  name: string;
  price: number;
}

// 위에 정의한 interface를 이렇게 씀
// function displayProductDetail(shoppingItem: ProductDetail){
// }


// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
// 타입별칭을 통해 Pick 사용해보기
type ShoppingItem = Pick<Product, 'id'| 'name' | 'price'>

function displayProductDetail(shoppingItem: ShoppingItem) {
  // shoppingItem에 접근하여 id, name, price를 처리
}
// interface UpdateProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }

// 3. 특정 상품 정보를 업데이트(갱신) 하는 함수
// 위에 정의한 interface를 이렇게 씀
// function updateProductItem(productItem: UpdateProduct){
// }

// Partial 사용해보기 (Product의 속성을 전부 옵셔널 처리함)
type UpdateProduct = Partial<Product>

function updateProductItem(productItem: UpdateProduct){
  }