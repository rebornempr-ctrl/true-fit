import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types/products";

module {
  public type Product = Types.Product;
  public type CreateProductArgs = Types.CreateProductArgs;
  public type UpdateProductArgs = Types.UpdateProductArgs;
  public type ProductId = Types.ProductId;

  public func seedSampleProducts(products : List.List<Product>, nextId : { var value : Nat }) {
    let now = Time.now();
    let samples : [(Text, Nat, Text, Text, [Text], [Text])] = [
      ("Classic White Tee", 2999, "A timeless essential — premium cotton, relaxed fit. The foundation of every wardrobe.", "tops", ["XS", "S", "M", "L", "XL"], ["White", "Black"]),
      ("Slim Fit Chinos", 5999, "Tailored slim-fit chinos in stretch twill. Dress up or down effortlessly.", "bottoms", ["28", "30", "32", "34", "36"], ["Beige", "Olive", "Navy"]),
      ("Oversized Hoodie", 6999, "Ultra-soft fleece hoodie with dropped shoulders. Built for comfort, made to last.", "tops", ["S", "M", "L", "XL", "XXL"], ["Charcoal", "Cream", "Forest Green"]),
      ("Canvas Tote Bag", 1999, "Heavy-duty canvas tote with True Fit signature embroidery. Carry everything with style.", "accessories", ["One Size"], ["Natural", "Black"]),
      ("Straight Leg Jeans", 7499, "Raw denim straight leg jeans with a modern cut. Gets better with every wear.", "bottoms", ["28", "30", "32", "34"], ["Indigo", "Washed Black"]),
    ];
    for ((name, price, description, category, sizes, colors) in samples.vals()) {
      let id = nextId.value;
      nextId.value := nextId.value + 1;
      let product : Product = {
        id;
        name;
        price;
        description;
        category;
        sizes;
        colors;
        imageUrls = [];
        isActive = true;
        createdAt = now;
        updatedAt = now;
      };
      products.add(product);
    };
  };

  public func addProduct(
    products : List.List<Product>,
    nextId : { var value : Nat },
    args : CreateProductArgs,
  ) : Product {
    let now = Time.now();
    let id = nextId.value;
    nextId.value := nextId.value + 1;
    let product : Product = {
      id;
      name = args.name;
      price = args.price;
      description = args.description;
      category = args.category;
      sizes = args.sizes;
      colors = args.colors;
      imageUrls = args.imageUrls;
      isActive = true;
      createdAt = now;
      updatedAt = now;
    };
    products.add(product);
    product;
  };

  public func updateProduct(
    products : List.List<Product>,
    args : UpdateProductArgs,
  ) : ?Product {
    let now = Time.now();
    var updated : ?Product = null;
    products.mapInPlace(
      func(p) {
        if (p.id == args.id) {
          let u : Product = {
            p with
            name = args.name;
            price = args.price;
            description = args.description;
            category = args.category;
            sizes = args.sizes;
            colors = args.colors;
            imageUrls = args.imageUrls;
            updatedAt = now;
          };
          updated := ?u;
          u;
        } else {
          p;
        };
      }
    );
    updated;
  };

  public func deleteProduct(
    products : List.List<Product>,
    id : ProductId,
  ) : Bool {
    let sizeBefore = products.size();
    let remaining = products.filter(func(p) { p.id != id });
    let sizeAfter = remaining.size();
    if (sizeAfter < sizeBefore) {
      products.clear();
      products.append(remaining);
      true;
    } else {
      false;
    };
  };

  public func toggleActive(
    products : List.List<Product>,
    id : ProductId,
  ) : ?Product {
    var result : ?Product = null;
    products.mapInPlace(
      func(p) {
        if (p.id == id) {
          let u : Product = { p with isActive = not p.isActive };
          result := ?u;
          u;
        } else {
          p;
        };
      }
    );
    result;
  };

  public func getProduct(
    products : List.List<Product>,
    id : ProductId,
  ) : ?Product {
    products.find(func(p) { p.id == id });
  };

  public func listActiveProducts(products : List.List<Product>) : [Product] {
    products.filter(func(p) { p.isActive }).toArray();
  };

  public func listAllProducts(products : List.List<Product>) : [Product] {
    products.toArray();
  };

  public func getProductsByCategory(
    products : List.List<Product>,
    category : Text,
  ) : [Product] {
    products.filter(func(p) { p.isActive and p.category == category }).toArray();
  };
};
