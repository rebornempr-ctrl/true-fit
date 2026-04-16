import List "mo:core/List";
import Runtime "mo:core/Runtime";
import ContactTypes "../types/contacts";
import ContactLib "../lib/contacts";

mixin (
  contacts : List.List<ContactLib.ContactSubmission>,
  nextContactId : { var value : Nat },
  admin : Principal,
) {

  // ── Public updates ──────────────────────────────────────────────

  public shared func submitContact(args : ContactTypes.CreateContactArgs) : async ContactLib.ContactSubmission {
    ContactLib.addContact(contacts, nextContactId, args);
  };

  // ── Admin queries ───────────────────────────────────────────────

  public shared ({ caller }) func getContactSubmissions() : async [ContactLib.ContactSubmission] {
    if (caller != admin) {
      Runtime.trap("Unauthorized: admin only");
    };
    ContactLib.listContacts(contacts);
  };
};
