export interface ListItem {
  id: string;
  name: string;
  amount: string;
}

export interface AddProductPayload {
  name: string;
  amount: string;
}

export interface RemoveProductPayload {
  id: string;
}
