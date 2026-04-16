import List "mo:core/List";
import Runtime "mo:core/Runtime";
import ProductTypes "../types/products";
import ProductLib "../lib/products";

mixin (
  products : List.List<ProductLib.Product>,
  nextProductId : { var value : Nat },
  admin : Principal,
) {

  // ── Public queries ──────────────────────────────────────────────

  public query func getActiveProducts() : async [ProductLib.Product] {
    ProductLib.listActiveProducts(products);
  };

  public query func getProductById(id : ProductTypes.ProductId) : async ?ProductLib.Product {
    ProductLib.getProduct(products, id);
  };

  public query func getProductsByCategory(category : Text) : async [ProductLib.Product] {
    ProductLib.getProductsByCategory(products, category);
  };

  // ── Admin queries ───────────────────────────────────────────────

  public query ({ caller }) func getAllProducts() : async [ProductLib.Product] {
    if (caller != admin) {
      Runtime.trap("Unauthorized: admin only");
    };
    ProductLib.listAllProducts(products);
  };

  // ── Admin updates ───────────────────────────────────────────────

  public shared ({ caller }) func addProduct(args : ProductTypes.CreateProductArgs) : async ProductLib.Product {
    if (caller != admin) {
      Runtime.trap("Unauthorized: admin only");
    };
    ProductLib.addProduct(products, nextProductId, args);
  };

  public shared ({ caller }) func updateProduct(args : ProductTypes.UpdateProductArgs) : async ?ProductLib.Product {
    if (caller != admin) {
      Runtime.trap("Unauthorized: admin only");
    };
    ProductLib.updateProduct(products, args);
  };

  public shared ({ caller }) func deleteProduct(id : ProductTypes.ProductId) : async Bool {
    if (caller != admin) {
      Runtime.trap("Unauthorized: admin only");
    };
    ProductLib.deleteProduct(products, id);
  };

  public shared ({ caller }) func toggleProductActive(id : ProductTypes.ProductId) : async ?ProductLib.Product {
    if (caller != admin) {
      Runtime.trap("Unauthorized: admin only");
    };
    ProductLib.toggleActive(products, id);
  };
};
