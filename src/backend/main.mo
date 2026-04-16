import List "mo:core/List";
import Principal "mo:core/Principal";
import ProductLib "lib/products";
import ContactLib "lib/contacts";
import ProductsApi "mixins/products-api";
import ContactsApi "mixins/contacts-api";

actor self {
  let products = List.empty<ProductLib.Product>();
  let contacts = List.empty<ContactLib.ContactSubmission>();
  var nextProductId = { var value : Nat = 1 };
  var nextContactId = { var value : Nat = 1 };
  var admin : Principal = Principal.fromText("2vxsx-fae");
  var initialized : Bool = false;

  // Set admin to the deploying principal on first call and seed sample products
  public shared ({ caller }) func initialize() : async () {
    if (initialized) {
      return;
    };
    admin := caller;
    initialized := true;
    ProductLib.seedSampleProducts(products, nextProductId);
  };

  public query func getAdmin() : async Principal {
    admin;
  };

  include ProductsApi(products, nextProductId, admin);
  include ContactsApi(contacts, nextContactId, admin);
};
