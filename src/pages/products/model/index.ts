export interface IItemResponse {
  productItems: IItem[];
}

export interface IItem {
  item_no: number;
  item_name: string;
  detail_image_url: string;
  price: number;
  score: number;
  availableCoupon: boolean;
  quantity: number;
  checked: boolean;
}
