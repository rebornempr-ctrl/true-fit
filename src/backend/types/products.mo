import Common "common";

module {
  public type ProductId = Common.ProductId;
  public type Timestamp = Common.Timestamp;

  public type Product = {
    id : ProductId;
    name : Text;
    price : Nat;
    description : Text;
    category : Text;
    sizes : [Text];
    colors : [Text];
    imageUrls : [Text];
    isActive : Bool;
    createdAt : Timestamp;
    updatedAt : Timestamp;
  };

  public type CreateProductArgs = {
    name : Text;
    price : Nat;
    description : Text;
    category : Text;
    sizes : [Text];
    colors : [Text];
    imageUrls : [Text];
  };

  public type UpdateProductArgs = {
    id : ProductId;
    name : Text;
    price : Nat;
    description : Text;
    category : Text;
    sizes : [Text];
    colors : [Text];
    imageUrls : [Text];
  };
};
